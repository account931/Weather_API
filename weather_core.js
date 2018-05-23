$(document).ready(function(){
	
	
	
	
// **************************************************
// **************************************************
// **                                              **
// START HEADER  CHANGE HOVER HEADER Change -> Waze Check Apllication******
  $('#headX').hover(function(){    
         //$('#headerp').html('Social Networking');
   $("#textChange").clearQueue();//prevent endeless
   $("#textChange").stop().fadeOut(900,function(){  $(this).html("<span style='color:black'>Weather on-line </span> ") }).fadeIn(900);

             /*$('#textChange').stop().hide(800);  
             $('#headerpHIDDEN').stop().show(1000);*/

             /*$('#textChange').animate({ "margin-left": 200 }, 2000, 'linear');
              $('#headerpHIDDEN').stop().show(1000);*/
},
function(){ //hover off
           
          $("#textChange").clearQueue();
          $("#textChange").stop().fadeOut(900,function(){  $(this).html("Weather on-line") }).fadeIn(900);
         
  //$(this).html('Dynamically  changed MVC');
              /*$('#headerpHIDDEN').stop().hide(900);
              $('#textChange').stop().show(1000);*/

              //$('#textChange').html('Waze');
             /* $('#textChange').animate({ "margin-right": 0 }, 2000, 'linear');
              $('#headerpHIDDEN').stop().hide(1000);*/
              
});
// END HEADER  CHANGE HOVER HEADER Change----------------------
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************









	
	
    
	$("#clear").click(function() {   // $(document).on("click", '.circle', function() {   // this  click  is  used  to   react  to  newly generated cicles;
        
		clearQRField();

    });
    //END Click random main Button------------------
	
	
	
	//Prevent empty form submitting---------
	$("#submit").click(function() {   
	
        if($("#citytext").val().trim()==''){
			if ( !$("#qrResult").is(':visible')) { 
				$("#qrResult").show(900);
			}
			$("#qrResult").html('<div class="alert alert-danger"><h2 class="red"><center><span class="glyphicon glyphicon-log-in"></span><br><br>NO INPUT FOR YOUR CITY</center><h2></div>'); 
			return false;
		} else {
			runCityName();

		}
		

    });
    //END Prevent empty form submitting------------------
	
	
	
	
	
	
	
	function clearQRField()
	{
		
		$("#citytext").val("");
		$("#weatherResult").hide(900);
		//$("#weather_header").hide(900);
		
		
	
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	window.data_url ="";
	
	 // function that runs on click
	 function runCityName(){
		 
		 window.cityGet = $('#citytext').val();
		 //alert(cityGet);
		 $("#cityName").html(cityGet);
		 //getWeather(function (data));
		 //return false;
		 
		 if (window.cityGet.trim()==''){
			 var city = "Kiev"; 
		 } else {
			 var city = window.cityGet; alert("You selected " + city);
		 }
		  //cnt in API means days
	      window.data_url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&mode=json&units=metric&cnt=7&appid=42b614437754a4ec7c704604e2a3f97f";  //Kyiv
		  //alert(window.data_url);
		  
		  var days = 7; // counter for loop
		  var weather_day_all = "";
          var weather_day = "<center>";
		  //myAction(); //not working
		  
		  
		  
		  
		  // RUNS DUBLICATE getWeather(); on your custom city click, ccan not run myAction() with getWeather() inside, though runs it on default load
		  getWeather(function (data) {
		      var	hours24 = 0;
		      for (var i = 0; i < days; i++){
		          //alert(hours24);
			      var myIteration = i + 1; // for divs, which are from 1-7, not 0-6
	
	              var	hours24 = hours24 + 24; // for var d = new Date(new Date().getTime() + hours24 * 60 * 60 * 1000);
	             //alert(hours24);
	
	             //Getting date--NOT USED, we take date from Json dt!!!!
   
                 // convert received in JSOn answer UNIX to norm date
                 var date = new Date(data.list[i].dt * 1000);
                 // Form the date in {day/month}, all uncommented string returns {day/month/year/hour/min}
                 var formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) /* + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) */;
   
                //getting  tem  to  var  and  to  Celcium
                //var t=data.main.temp; t=t-272; t=Math.round(t);
   
                //getting every day in the loop
                weather_day = "<div class='row' style='overflow:scale;' id='weather" + myIteration + "'><center>" + 
	                  "<div class='col-sm-2 col-xs-2'>" +
	                      "<h4><span class='label label-primary'>" + formattedDate + " " + data.city/*[0]*/.name/*description*/ + "</span></h4>" +   // Date, city
					  "</div>" +	
                      "<div class='col-sm-2 col-xs-2'>" +					  
					      "<h4><span class='label label-warning'>temp: " + data.list[i].temp.day + " C </span></h4>" + // average temp
					  "</div>" +
					  "<div class='col-sm-2 col-xs-2'>" +
					      "<h4><span class='label label-primary'> min: " + data.list[i].temp.min +  " C </span></h4>&nbsp;" +                      // min temp
					  "</div>" +
					  "<div class='col-sm-2 col-xs-2'>" +	  
					      "<h4><span class='label label-success'> max: " + data.list[i].temp.max + " C </span></h4> &nbsp; " +
					  "</div>" +
					  "<div class='col-sm-2 col-xs-2'>" +
					      "<h4><span class='label label-danger'> Condition : " + data.list[i].weather[0].main + "</span></h4>" +
					  "</div>" + 
					  "</center></div>";
					  
               //document.getElementById('weather' + myIteration).innerHTML = weather_day;
	           weather_day_all = weather_day_all + weather_day; // getting all days in one varibale
	      } //end For loop
	
	      weather_day_all = weather_day_all + "</center>";
	      //alert(weather_day_all);
		  
	      //$('#weatherResult').html(weather_day_all);  //html the result
		  //html weather result with animation
		  $("#weatherResult").stop().fadeOut("slow",function(){ $(this).html(weather_day_all)}).fadeIn(2000);
						
	      }); //end function
		  //  END RUNS DUBLICATE getWeather(); on your custom city click, ccan not run myAction() with getWeather() inside, though runs it on default load
		  
		  
		  
		  
		  
		} // END runCityName()
	
	
	
	
	
	
	
	
     //RUNS on load
	
	// Weather in Loop------------------------------------------------------------------------
	// ***********************************************************************
    // ***********************************************************************
    // **                                                                   **
	var days = 7; // counter for loop
	if ($("#citytext").val().trim()==''){
		alert('default city');
	    var city = "Kyiv"; 
	} else {
		alert('user');
		var city =  window.cityGet;
	}
	$("#cityName").html(city);
	
	//cnt in API means days
    data_url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&mode=json&units=metric&cnt=7&appid=42b614437754a4ec7c704604e2a3f97f";  //Kyiv
   //function to pull information out of the json file and stick it into an HTML element
	var Month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
	var weather_day_all = "";
    var weather_day = "<center>";
	
	
	
	myAction(); //working
	
	
	
	
	
	
	
	//#####===============================================
	function myAction() {
	getWeather(function (data) {
		
		
		
		var	hours24 = 0;
		
		
		for (var i = 0; i < days; i++){
		    //alert(hours24);
			 var myIteration = i + 1; // for divs, which are from 1-7, not 0-6
		
	
	var	hours24 = hours24 + 24; // for var d = new Date(new Date().getTime() + hours24 * 60 * 60 * 1000);
	//alert(hours24);
	
	//Getting date--NOT USED, we take date from Json dt!!!!
	var d = new Date(new Date().getTime() + hours24 * 60 * 60 * 1000); // + 24 * 60 * 60 * 1000
   //var d = new Date();
   var x = d.getDate(); 
   var y = d.getMonth(); // + 1; //+1 is not used as we use array with Month
   
   wDate = x + " " + Month[y]; // day + litreal month
   //END  getting  date--NOT USED!!!!
   
   
  // convert received in JSOn answer UNIX to norm date
  var date = new Date(data.list[i].dt * 1000);
  // Form the date in {day/month}, all uncommented string returns {day/month/year/hour/min}
  var formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) /* + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) */;
   
   
   //getting  tem  to  var  and  to  Celcium
   //var t=data.main.temp; t=t-272; t=Math.round(t);
   
   //getting every day in the loop
    weather_day = "<div class='row' style='overflow:scale;' id='weather" + myIteration + "'><center>" + 
	                  "<div class='col-sm-2 col-xs-2'>" +
	                      "<h4><span class='label label-primary'>" + formattedDate + " " + data.city/*[0]*/.name/*description*/ + "</span></h4>" +   // Date, city
					  "</div>" +	
                      "<div class='col-sm-2 col-xs-2'>" +					  
					      "<h4><span class='label label-warning'>temp: " + data.list[i].temp.day + " C </span></h4>" + // average temp
					  "</div>" +
					  "<div class='col-sm-2 col-xs-2'>" +
					      "<h4><span class='label label-primary'> min: " + data.list[i].temp.min +  " C </span></h4>&nbsp;" +                      // min temp
					  "</div>" +
					  "<div class='col-sm-2 col-xs-2'>" +	  
					      "<h4><span class='label label-success'> max: " + data.list[i].temp.max + " C </span></h4> &nbsp; " +
					  "</div>" +
					  "<div class='col-sm-2 col-xs-2'>" +
					      "<h4><span class='label label-danger'> Condition : " + data.list[i].weather[0].main + "</span></h4>" +
					  "</div>" + 
					  "</center></div>";
					  
    //document.getElementById('weather' + myIteration).innerHTML = weather_day;
	weather_day_all = weather_day_all + weather_day; // getting all days in one varibale
	} //end For loop
	
	weather_day_all = weather_day_all + "</center>";
	//alert(weather_day_all);
	
	//$('#weatherResult').html(weather_day_all);  //html the result
	//html weather result with animation
    $("#weatherResult").stop().fadeOut("slow",function(){ $(this).html(weather_day_all)}).fadeIn(2000);
		  
	$('#pureJson').html(JSON.stringify(data, null, 4));  //html pure json to Bootsrap dropdown
	//alert(JSON.stringify(data, null, 4));
	}); //end function
	
	}
	//####### ==================================================================
	
	//END Weather in Loop--------------------------------------------------------------------
	
	
	
	
	
	// function to use jsonp to get weather information
    function getWeather(callback) { 
	    alert('aj '+window.data_url);
		
        $.ajax({
            dataType: "jsonp",
            url: window.data_url,
            success: callback,
			error: function (error) {
				$("#weatherResult").stop().fadeOut("slow",function(){ $(this).html("<h4 style='color:red;'>ERROR!!! <br> NO CITY FOUND</h4>")}).fadeIn(2000);
            }	
       });
		
    };


	//END function to use jsonp to get weather information--------------------------------------------------------------------
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// OLD ----------------------------------------------------------------------------------------------------------------------------------
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	
	
    // On CheckBox change
    $('input[type="checkbox"]').on('change', function() {
		
		// Make sure that the oly checkbox is not unselected
		if ($('input:checked', $(this).parent()).length === 0) {
			$(this).prop('checked', true);
            return false; // this prevents from event triggering-> html-ing the div again
        }
		// Make sure that the oly checkbox is not unselected
		
		
		
		// Start Allow  to  checkBox  only  one  itembox at once;
        $('input[name="' + this.name + '"]').not(this).prop('checked', false); // });
       // End Start Allow  to  checkBox  only  one  item;	
	
	    /*if ( $('#r1').prop('checked') )  {
			alert("1 ch");
		}*/
		
		// function detects the checkbox checked and show relevant div, hides others
		traceCheckBoxSelection(this.id);
	    hideInstructionAndResults(); //hides opened instructions and div withe prev results
        clearFields();
		
	});
	// END On CheckBox change
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	//Click "random it" main Button (1 action for 3 diffrent variants, depends on checkbox checked)----------------------
	// Detects whick checkbox is checked and call a relevant function by contatenation with + "CoreAction()" -> randListCoreAction()
    
	$("#splitButton").click(function() {   // $(document).on("click", '.circle', function() {   // this  click  is  used  to   react  to  newly generated cicles;
        
		
		//get the ID of checked, it is only 1
		$("input:checkbox[name=r]:checked").each(function () { //get the ID of checked, it is only 1
             checkedID = $(this).attr("id");// 
			 return checkedID;
			 //checkedID = eval (checkedID);  // call the relevant function, won't work unless eval it
		});
		//END get the ID of checked, it is only 1
		
		var n = $("#" + checkedID + "_Input").val();  //input with diff IDs, generates the id (i.e. $("#randList_Input") = checkbox ID+"_Input"
		n = $.trim(n); // have to trim as it won't consider spaces as empty
		if ( n !=="") {
			
			
			//mega Error with footer overlap was in below funct, should disable the 2 nd row in hideInstructionAndResults();
		    //hideInstructionAndResults(); //hides opened instructions and div withe prev results
	        $("#hiddenInstructions").hide(2000); //hides instructions

			
            //Call a relevant function (checkBox ID + "CoreAction()")
            var checkedID_Call = checkedID + "CoreAction()" ; // i.e randListCoreAction() 
			checkedID_Call = eval (checkedID_Call);  // call the relevant function, won't work unless eval it
		    //END get the ID of checked, it is only 1
		
		
        } else { //END ($("#randList_Input").val()!=null)
		    // pass the error text to html it, instead of vat text with randommed results
            window.text ='<h2 style="color:red;"></br>Error => No input detected</br></br></h2>';
		}

		
		
		
		displayResults(window.text); // htmls the results/or error 
		scrollResults("#resultFinal"); // Scroll results

    });
    //END Click random main Button------------------
	
	
	
	

	//----------------------------------------------------
    //Click Example  Button
    $("#examplebutton").click(function() {
		
		loadExamples();
    });
    //END Click Example  Button
    //***********************************************
	
	
	
	
	// function detects the checkbox checked and show relevant div, hides others
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	
	function traceCheckBoxSelection(passedID) 
	{
	    //alert (passedID);
		$(".random").fadeOut(1100); // hide all classes
		$("#" + passedID + "Div").show(2000); // show a div that matches checkbox ID + "Div" (i.e randListDiv, randIntegerDiv)
		
		//$(".random").clearQueue();//prevent endeless
        //$(".random").stop().fadeOut(900,function() {  $("#" + passedID + "Div").show() }).fadeIn(900);
		
		//html the relevant instruction to id="hiddenInstructions"
		$("#hiddenInstructions").html("").hide();
		var instr = "window." + passedID + "Instruction"; // i.e randListInstruction, randIntegerInstruction
		    instr = eval(instr); // convert the string to var, otherwise it is html-ed as a string
		$("#hiddenInstructions").html(instr);
	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	
	
	// Core function for 1st checkbox randList -> A tool that randomizes your list
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	
	function randListCoreAction () 
	{
		window.existed = [];  //clear the array with generated numbers
		
		var input = $("#randList_Input").val();
		var inputArray = input.split(('\n')); // slice to array, it may include empty elements, if your sample text included space line (enter), so next line fixes it....
	    inputArray = inputArray.filter(function(e){ return e.replace(/(\r\n|\n|\r)/gm,"")});// erases from array all empty values if sample text included space line (enter)
		
		//alert (inputArray.length); //pass for checking in isRandom()
		window.lengh = inputArray.length;
		ex = randomX(inputArray.length);
		//isRandomUnique(ex);
		//alert (window.existed);
		
		//form the answer
		window.text= '</br><input type="button" value="Copy" id="copybutton"/><span id="flashMessage"></span> </br><center><h5 class="red">' + "Random results -> " + inputArray.length + ' items </h5> </center><p id="tableResults"></br>';
		var ineratorX = 1;
		for (var i =0; i < window.existed.length; i++ ) {
			randd = window.existed[i] - 1;
			
			
			text = text + ineratorX++ + ".)&nbsp; "  + inputArray[randd] + "</br>";
		}
		text = text + "</p>";
		//alert (text);
		// END form the answer
		
		//displayResults(text);
		
		
	
        
		
	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	
	
	// Core function for 2st checkbox randInteger -> A tool that return a singel int within specified range
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	
	function randIntegerCoreAction () 
	{
		window.existed = [];  //clear the array with generated numbers
		
		var inputMin = $("#randInteger_Input").val();
	    var inputMax = $("#randInteger_Input2").val();
		
		//Limit the input
		lengthX = ( inputMax - inputMin ) + 1; // calculates how many elements should be in complete array, input2 - input 1, plus 1 to be correct		
		//if too long range, stop it
		if (lengthX > 900000000000) {
			alert ("More than 900000000000, make it smaller");
			window.text = ''; 
			return;
		}
		// END Limit the input
		
		
		var rand = inputMin - 0.5 + Math.random() * (inputMax - inputMin + 1);
        rand = Math.round(rand);
        //return rand;
		
		
		//form the answer
		window.text = '</br><input type="button" value="Copy" id="copybutton"><span id="flashMessage"></span> </br><center><h5 class="red">' + "Random results" + '</h5><p >';
		text = text + "<h3 class='red' > <span class='badge badgeMine'  id='tableResults'>" + rand + "</span></h3>";
		text = text + "</p></center>";
		//alert (text);
		// END form the answer
		
		
		//displayResults(text);		
		
	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	
	
	
	// Core function for 3rd checkbox randIntegList -> A tool that return a list of rand int within specified range
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	
	function randIntegListCoreAction () 
	{
		window.existed = [];  //clear the array with generated numbers
		
		//window.lengh is a MUST to suppress value in randomIntList3(min, max)
		window.lengh = ( $("#randIntegList_Input2").val() - $("#randIntegList_Input").val() ) + 1; // calculates how many elements should be in complete array, input2 - input 1, plus 1 to be correct
		
		//if too long range, stop it
		if (window.lengh > 3000) {
			alert ("More than 3000, make it smaller");
			window.text = ''; 
			return;
		}
		
		//call rand function
		randomIntList3 ( $("#randIntegList_Input").val(), $("#randIntegList_Input2").val());
		
       
		//alert(window.existed);
		
		//form the answer
		window.text = '</br><input type="button" value="Copy" id="copybutton"><span id="flashMessage"></span> </br><center><h5 class="red">' + "Random results -> " + window.lengh + ' items</h5><p id="tableResults">';
		
		var ineratorX = 1;
		for (var i =0; i < window.existed.length; i++ ) {
			//randd = window.existed[i] - 1;
			text = text + ineratorX++ + ".) " + window.existed[i] + "</br>";
		}
		text = text + "</p>";
		// END form the answer
		
		

		//displayResults(text);
		
		
	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	
	
	
	//generates random complete list for range from 0 to input lenghth -> first DIV 111
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	function randomX(arrayLenth) {
		var rand = Math.floor(Math.random() * arrayLenth) + 1; // returns a number between 1 and 100
		//alert ("rand->" + rand);
		//return rand;
		isRandomUnique(rand);	
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	//generates random complete list for range from 0 to input lenghth -> 3rd DIV 333
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	function randomIntList3(min, max) {
		
		var rand = min - 0.5 + Math.random() * (max - min + 1);
        randZ = Math.round(rand); //alert("-> "+rand);
		isRandomUnique(randZ);	
		
		/* while (window.existed.length != window.lengh) {   // existed is a temp array to store unique, non-repetable ints
			
		    if (window.existed.indexOf(randZ) > -1) {  // if generated int already was generated and exists in temp array "existed"
			    randomIntList3 ( $("#randIntegList_Input").val(), $("#randIntegList_Input2").val());
		    } else {
			    window.existed.push(randZ);
		    }
			
		} */
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	//alert (window.existed);
	 //window.existed = [];
	 
	 
	 
	// Checkes if a generated inter was not prev generated (check in array existed) and force to generate more 
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	function isRandomUnique(generatedRandom){
		//window.existed = [];
		
		while (window.existed.length != window.lengh) {   // existed is a temp array to store unique, non-repetable ints
			
		    if (window.existed.indexOf(generatedRandom) > -1) {  // if generated int already was generated and exists in temp array "existed"
			    randomX(window.lengh);
		    } else {
			    window.existed.push(generatedRandom);
		    }
			
		}
		
		
		/*if (window.existed.length == window.lengh ) {
			alert ("Full");
			return existed;
		}*/
			
		
		return window.existed;
        //alert ("Array " + existed);		
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	//Just html-s results or errors with animation
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	function displayResults(resultedText) 
	{
	    $("#resultFinal").stop().fadeOut("slow",function(){ 
		    $(this).html(resultedText)
						}).fadeIn(2000);

		$("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div	
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	function hideInstructionAndResults()
	
	{
		$("#hiddenInstructions").hide(2000); //hides instructions
		$("#resultFinal").hide(2000); // hides prev results		
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	function clearFields()
	{
		$("#randList_Input").val("");
		$("#randInteger_Input").val(""); //2
		$("#randInteger_Input2").val(""); //2
		
		$("#randIntegList_Input").val(""); //3
		$("#randIntegList_Input2").val(""); //3
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	function loadExamples()
	{
		//get the ID of checked, it is only 1
		$("input:checkbox[name=r]:checked").each(function () { //get the ID of checked, it is only 1
             checkedID = $(this).attr("id");
		});
		// END get the ID of checked, it is only 1
			 
		if (checkedID == "randList") {
			$("#randList_Input").val(" Name_1 \n Name_2 \n Name_3 \n Name_4 \n Name_5 "); //  was \n  in the  end
		} else if (checkedID == "randInteger") {
			$("#randInteger_Input").val("1");
			$("#randInteger_Input2").val("7");
		} else if (checkedID == "randIntegList") {
			$("#randIntegList_Input").val("1");
			$("#randIntegList_Input2").val("27");
		}
		
    }
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	
	// Scroll the page to results  #resultFinal
	function scrollResults(divName) 
	{
		 
         $('html, body').animate({
            
            scrollTop: $(divName).offset().top
			//scrollTop: $('.footer').offset().top
            //scrollTop: $('.your-class').offset().top
        }, 'slow'); 
		// END Scroll the page to results
	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	function scroll_toTop() 
	{
	    $("html, body").animate({ scrollTop: 0 }, "slow");	
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	
	//----------------------------------------------------
    //Click Instruction  Button
    $("#instructionButton").click(function(){ 
    $("#hiddenInstructions").toggle(1000); //show or hide
	
	
    if( $("#instructionButton").attr("value")=="instructions")
    { 
        $("#instructionButton").val("Close"); 
		$("#instructionButton").css("background","red"); 
        scroll_toTop();   
    } else { 
        $("#instructionButton").val("instructions");$("#instructionButton").css("background","grey");
        scrollResults('#hiddenInstructions'); 
   }

 });
//END Click Instructions  Button
//***********************************************
	
	
	
	
	
	
	
	
	//----------------------------------------------------
    //CLEAR  Button
    $("#clearButton").click(function(){
		
    $("#hiddenInstructions").hide(2000);
    $("#resultFinal").hide(1000);
    //hide  instr  &  change  button
    HideInstructions ();
    //END  Hid e Instructuins  and  change  button
	
    scroll_toTop();
	clearFields();

 });
//END CLEAR  Button
//***********************************************
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//--------------------------------------OLD-------------------------------------

//dataX=''; //  gloabal  var
//window.dataX2;
//randList_Input
//var hFinal='';
var newHTML = [];
window.b='';


//---------------------------ERRASE- CONFIRM
//Click SPLIT  Button
    $("#splitButton_PREV").click(function(){        // $(document).on("click", '.circle', function() {   // this  click  is  used  to   react  to  newly generated cicles;

if ($("#randList_Input").val()!="")
 {
	          $("#hiddenInstructions").hide(2000);		
              trimWaze();
 } //END ($("#randList_Input").val()!=null)
 else{hFinal='<h2 style="color:red;"></br>Error => No input detected</br></br></h2>';}

//-----


			$("#resultFinal").stop().fadeOut("slow",function(){ 
						    $(this).html(hFinal)
						}).fadeIn(2000);

			$("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
			//



 });
//END Click SPLIT  Button
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************






  
//----------------------------------------------------
//CR Footer
    $("#cr_footer").click(function(){
        //var textareaCR=$("#randList_Input").val();
          
//below  flaf  is  used  to  trigger in trimWaze()  an  option  weather  or  not  to  add a Footer  CR
          window.flagged="true";
		trimWaze();
          window.flagged="false";
		//var textareaCR=textareaCR+"";
           hFinal=hFinal;
 //hFinal=hFinal+"<p>Best regards,</br>Waze support Team </p></br>";//used in Waze Trim
		 //$("#tableResults").append("<p>Please let me know if you have any additional questions. Feel free to contact us</br>Waze support Team </p>");
		 //$('<p>Text</p>').appendTo('#tableResults');
         
		
		$("#resultFinal").stop().fadeOut("slow",function(){ 
                $(this).html(hFinal)
            }).fadeIn(2000);

$("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div

    });
//END Click CR Footer
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************





//not  working -> Not engaged
//----------------------------------------------------
//CR Header
    $("#cr_header").click(function(){
       	trimWaze();
		//var textareaCR=textareaCR+"<p>Hello Wazer</br>Thanks for contacting us. </p>";
		hFinal="<p>Hello Wazer</br>Thanks for contacting us </p>"+hFinal; //last
		 
		
		
		$("#resultFinal").stop().fadeOut("slow",function(){ 
                $(this).html(hFinal)
            }).fadeIn(2000);

$("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div

    });
//END Click CR Header -> Not engaged
//***********************************************











//"Waze is a 100%       free turn-by-turn GPS navigation        application that provides real-time traffic updates\n plus all kinds             of cool social and geo-gaming elements       that actually make commuting fun."







//----------------------------------------------------
//Click Instruction  Button
    $("#instructionButton_PREV").click(function(){ 
    $("#hiddenInstructions").toggle(1000);
	
	
if( $("#instructionButton").attr("value")=="instructions")
   { $("#instructionButton").val("Close");$("#instructionButton").css("background","red"); 
   } else { 
   $("#instructionButton").val("instructions");$("#instructionButton").css("background","grey");
   scrollResults('#hiddenInstructions'); 
   }

 });
//END Click Instructions  Button
//***********************************************


//----------------------------------------------------
//Click Close Instruction  Button
/* $("#closeIt").click(function(){
    $("#hiddenInstructions").hide(2000);

 });*/
//END   Click Close Instruction  Button






//----------------------------------------------------
//CLEAR  Button
    $("#clearButton_PREV").click(function(){
    $("#hiddenInstructions").hide(2000);
    $("#randList_Input").val('');
    $("#resultFinal").hide(1000);
//hide  instr  &  change  button
    HideInstructions ();
//END  Hid e Instructuins  and  change  button
 $("#highLight_errors_button").hide(1000);// hide link highlight details
 $("#highLight_errors").hide(1000); //hide highlight details

//hide CAUTION in left top corner if ISSET(Help center)
if($('#popAlert').length > 0){$('#popAlert').remove();}

 });
//END CLEAR  Button
//***********************************************








//-------------------------------------------------------------------------------
//Copy Button
  $(document).on("click", '#copybutton', function() {   // this  click  is  used  to   react  to  newly generated cicles;
   // $("#copybutton").click(function(){
//tableResults

$('#flashMessage').html(' Copied!!!!!!!').fadeOut(4500);
//
// creating new textarea element and giveing it id 't'
  var t = document.createElement('textarea');
  t.id = 't';
  // Optional step to make less noise in the page, if any!
  t.style.height = 0;
  // You have to append it to your page somewhere, I chose <body>
  document.body.appendChild(t);
  // Copy whatever is in your div to our new textarea
  t.value = document.getElementById('tableResults').innerText;
  // Now copy whatever inside the textarea to clipboard;
  var selector = document.querySelector('#t');
  selector.select();
  document.execCommand('copy');
  // Remove the textarea;
  document.body.removeChild(t);

//
//$('#flashMessage').html(' Copied!!!!!!!').fadeOut(4500);
//alert("COPIED to  clipboard");    

 });
//END Copy  Button
//**********************************************************************************




//-----------------------------------------------------------
function HideInstructions (){
if ( $('#hiddenInstructions').css('display') == 'none' ){} else{

$("#hiddenInstructions").hide(2000);
        if( $("#instructionButton").attr("value")=="instructions")
       { $("#instructionButton").val("Close");$("#instructionButton").css("background","red");
   } else { $("#instructionButton").val("instructions");$("#instructionButton").css("background","grey")}
}
}
//---------------------------------------------------------------




//function dispalyError()
function  dispalyError(){
$("#resultFinal").stop().fadeOut("slow",function(){  $(this).html("<h1 style='color:red;'>ERROR-> check  your  input</h1>") }).fadeIn(2000);
              $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
              HideInstructions ();}
//end func













//---------------------------------------------------------------------------
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
function trimWaze(){
// replace multiple spaces with a single space, consecutive duplicate and all other option
var textarea=$("#randList_Input").val();




//Here Listed all ReG EXPRESSION Options!!!!!!!!!!!!!!1
// ******************************************************************
// ******************************************************************
// **                                                              **

//Procedures=> each RegExp appears in this supp.js:
//1.RegExp declaration + count variable
//2.In count all counts Errors all together var AllErrorsCount


//count diffrence occurance of errors (double space etc)---------------------
  //var regExp = new RegExp(\s\s+, "gi");
  var numb = (textarea.match(/  +/g) || []).length;
  //alert(numb);
  var numbComma = (textarea.match(/ \,+/g) || []).length; //count space+comma

  var numbDot = (textarea.match(/ \.+/g) || []).length; //count space+dot
  //alert("comma-> "+numbComma +" dot->"+numbDot);
  
  var doubleWords = (textarea.match(/\b(\w+)\s+\1\b/g) || []).length; // count all consecutive duplicate words
  
  var doubleCommas = (textarea.match(/(\,\,+)/g  ) || []).length; // count all consecutive duplicate commas (i.e ",,")

  var doubleDots = (textarea.match(/(\.\.+)/g  ) || []).length; // count all consecutive duplicate dots (i.e "..")
  

// Rex exp for misplaced ad pins
  var RegExp_underscore = /_/gi; // construct Regular expression
  var Underscore_ErrCount = (textarea.match(RegExp_underscore) || []).length; // count undescores (i.e "_")
  




  //start Help Center issue---
  var hrefUrlBlankSpace =(textarea.match(/Help Center/gi) || []).length; // checking Help Center space; if blankspace is linked. Can't design it normally!!! 
         //$("body").append("<div id='popAlert' style='position:absolute;width:10%;height:20px;top:0px;left:0px;background:red;'><center>Caution -></center></div>");
         if(hrefUrlBlankSpace>0){/*alert("Caution -> URL detected!!!");*/
                                $("body").append("<div id='popAlert' style='position:absolute;width:8%;height:20px;top:0px;left:0px;background:red;'><center>Caution -></center></div>");
                              //$("#popAlert").hide(500); //$('#popAlert').remove();
                             }else{$('#popAlert').remove();}
  // END Help Center issue-----[

 


  
   
  //Please know that(if that is missing)!!!!!!!!!!!!!!!!!!!!!!
		var RegExp_PlsKnow = /please (know||note) (?!that)\w*/gi;  //if set "\s*" after "(know||note)'->ERR //Reg Expression itself  http://www.regextester.com/15 //please (know||note) [^t][^h][^a][^t]*\w* /gi;
              //var RegExp_PlsKnow = /please know\s+[^t][^h][^a][^t]*\w* /gi; 
	   var PlsKnowErrCount =(textarea.match(RegExp_PlsKnow ) || []).length; //count "please know"
	    if(textarea.match(RegExp_PlsKnow)) {alert('Missing "that" Error => '+ PlsKnowErrCount);} //if at least 1 result
  //END Please know that(if that is missing)!!!!!!!!!!!!!!!!!!!!!!


  //problem HERE
  //var RegExp_commaNoSpaceChar=/\,([^ ])/g; // reg exp for (word ,word)
  //var commaCharNoSpace =(textarea.match(RegExp_commaNoSpaceChar/*/\,([^ ])/g*/) || []).length; // count comma followed by NO SPACE (i.e ",char")  //work here!!!!!!!

  // var dotCharNoSpace =(textarea.match(/\.(.)/g) || []).length; // count dot followed by NO SPACE (.char)//NOT IMPLEMENTED


//--------------------------------------------------------------------------------------------------------------------------------




   
 // count all counts Errors all together (they are +-ed)
  var AllErrorsCount = numb + numbComma + numbDot+doubleWords + doubleCommas + doubleDots/*+commaCharNoSpace*/  /*+PlsKnowErrCount*/   /* +Underscore_ErrCount */;  //

//end  count ----------------
//Here Listed all RG EXPRESSION Options!!!!!!!!!!!!!!1-----------------------------------------------
// **                                                              **
// ******************************************************************
// ******************************************************************







//START  Highlight with RED  Double Spaces(+comma+dots_dublicates)-
// ******************************************************************
// ******************************************************************
// **                                                              **
var arrayX2HIGHLIGHT=textarea.split('\n');/*.join(',').split(','); */
var resHighlight='';
for(j=0;j<arrayX2HIGHLIGHT.length; j++)
 {  
     resHighlight+= arrayX2HIGHLIGHT[j] /*->double spaces*/
	                .replace(/  +/g, "&nbsp;<span style='background:red;'> __ </span>&nbsp;") 
					.replace(/ \,+/g, "&nbsp;<span style='background:red;'> __, </span>&nbsp;") 
					.replace(/ \.+/g, "&nbsp;<span style='background:red;'> __. </span>&nbsp;") 
	   /*dublicate*/.replace(/\b(\w+)\s+\1\b/g, "&nbsp;<span style='background:red;'> \$1 \$1 </span>&nbsp;") 
		/*double,,*/.replace(/\,\,+/g, "&nbsp;<span style='background:red;'> ,, </span>&nbsp;") 
		/*double..*/.replace(/\.\.+/g, "&nbsp;<span style='background:red;'> .. </span>&nbsp;") 

       /*comma char no space(,word)*/  /*.replace(/\,(.)/g, " &nbsp;&nbsp;<span style='background:red;'>_ ,</span>&nbsp;")   */      
    /*underscore_*/   .
	replace(RegExp_underscore, "&nbsp;<span style='background:red;'> _ </span>&nbsp;")         +"</br>";//!!!!problem here -> why not RegExp_commaNoSpaceChar

//end replacemnet with red color;-----------





	//arrayX2HIGHLIGHT[j].replace(/  +/g, "&nbsp;<span style='background:red;'> __ </span>&nbsp;")+"</br>";//replace all double spaces with red
	//arrayX2HIGHLIGHT[j].replace(/ \,+/g, "&nbsp;<span style='background:red;'> __, </span>&nbsp;")+"</br>";//replace all spaces + Commas with red  /(\.\.+)/g
	
	//resHighlight+= arrayX2HIGHLIGHT[j];   
 }
$("#highLight_errors").html(resHighlight); //Html with final result
//$("#randList_Input").val(resHighlight);
// **                                                              **
// ******************************************************************
// ******************************************************************
//END  Highlight Double Spaces ----








var arrayX2=textarea.split('\n');/*.join(',').split(','); */
//alert(textarea);



/*var stringTrimmed =textarea.replace( /\s\s+/g, ' ' )
$("#randList_Input").val(stringTrimmed);*/
$("#loadAjax").fadeIn(2000).html("Processed").fadeOut(3000);
// END  replace multiple spaces with a single space




// Generates the header depending if any misstakes were found
var TextAfterCorrection;
if(AllErrorsCount==0){TextAfterCorrection="No correction was performed";}else{TextAfterCorrection="Text after correction";}


//All errors detail (available on click)
window.hFinal = '</br><p><p id="ErrorShow" style="color:red;cursor:pointer;" title="click">Errors => ' + 
                AllErrorsCount +
				'</p><p id="ErrorHidden" style="color:red;display:none;">Double Spaces => ' +
				numb +
				'; </br>Char followed by comma with space => ' +numbComma +
				'; Dots followed => '+ numbDot + 
				'; </br>Consecutive duplicates => ' + doubleWords + 
				'; </br>Double commas => ' + doubleCommas +
				'; Double dots => ' + doubleDots +
				/* ';</br> Underscore => ' + Underscore_ErrCount  +  */   //deactivated for zzz production
				/* '; </br>Comma+char with NO space => ' +commaCharNoSpace+*/  
				'</p><input type="button" value="Copy" id="copybutton"><span id="flashMessage"></span> </br><center><h5 style="color:red;">' + TextAfterCorrection+'</h5></center> </br><p id="tableResults"></br>';
  
        
                                                                 

// **************************************************
// **************************************************
// **                                              **
//Corrected text -> Replacing, Correcting/Fixing spaces ,commas, dots, dublicates in result to HTML
 dataX='';
 for(j=0;j<arrayX2.length; j++) {  

    dataX = arrayX2[j] .
	        /*double spaces*/replace( /\s\s+/g, ' ' )
			/*space+comma*/.replace( / \,+/g, ',' )
			/*space+dot*/.replace( / \.+/g, '.' )
			/*word duplicate*/.replace( /\b(\w+)\s+\1\b/g, '\$1' )
			/*double commas ,,*/ .replace( /\,\,+/g, ',' )
			/*double dots ..*/ .replace( /\.\.+/g, '.' ) /*comma followed by char no space!!!!PROBLEM HERE*/  /*.replace(/\,(.)/g, ', \$1' )*/       
			/*underscore _*/ /* .replace( RegExp_underscore , ' ' )  */    +
			'</br>'; 
 
  
 hFinal=hFinal+dataX;
 } //end for
// **                                               **
// ***************************************************
// ***************************************************


 //  should  we  or  not add  a  footer to  result
if (window.flagged=="true"){hFinal=hFinal+"</br><span id='footer'>Best regards,</br>Waze Support team </span></p>";}
else{
hFinal=hFinal+"</p></br></br>";
    }    
//  END should  we  or  not add  a  footer to  result

//show details button
$("#highLight_errors_button").show();//show button
$("#highLight_errors").hide(); //hide content


}
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//------------------------------------------------------------------
// End trimWaze()










// SHOW ERRORS DETAILS
//---------------------
$("#highLight_errors_button").click(function(){ 
 $("#highLight_errors").toggle(1000);
});
//-----------------------------------------------------
//END SHOW DETAILS




// SHOW AllErrors
//---------------------
 $(document).on("click", '#ErrorShow', function() { //Click for newly generated
 $("#ErrorHidden").toggle(500);
});
//-----------------------------------------------------
//END SHOW AllErrors














              






// END READY
});





/*
var newHTML = [];
for (var i = 0; i < vehicles.length; i++) {
    newHTML.push('<p class="resultArray"><span>' + vehicles[i] +'</span>  '+  '<span class="deleteItem" id="'+[i]+'">' + '<img src="images/delete2.png"/></span></p>');
}

$(".resultMy").html(newHTML.join(""));
*/
