$(document).ready(function(){
	
	
	
	
    // **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
    // START HEADER  CHANGE HOVER HEADER Change -> Waze Check Apllication******
    $('#headXz').hover(function(){    
        //$('#headerp').html('Social Networking');
       $("#textChange").clearQueue();//prevent endeless
       $("#textChange").stop().fadeOut(900,function(){  $(this).html("<span style=''>Weather on-line </span> ") }).fadeIn(900);

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









	
	
    //---------------------------------------------
	$("#clear").click(function() {   // $(document).on("click", '.circle', function() {   // this  click  is  used  to   react  to  newly generated cicles;
        
		clearQRField();

    });
    //END Click random main Button------------------
	
	
	
	
	
	
	//Main action button click, Prevents empty form submitting, runs ajax if the field is not empty---------
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	$("#submit").click(function() {   
	
        if($("#citytext").val().trim()==''){
			if ( !$("#qrResult").is(':visible')) { 
				$("#qrResult").show(900);
			}
			//html weather result with animation
            $("#qrResult").stop().fadeOut("slow",function(){ $(this).html('<div class="alert alert-danger"><h3 class="red"><center><span class="glyphicon glyphicon-log-in"></span><br><br>NO INPUT FOR YOUR CITY</center><h3></div>')}).fadeIn(2000);
			
			return false;
		} else {
			runCityName();

		}
    });
    //END Main action button click, Prevents empty form submitting, runs ajax if the field is not empty------------------
	
	
	
	
	
	
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	function clearQRField()
	{
		
		$("#citytext").val("");
		$("#weatherResult").hide(900);
		$("#qrResult").hide(900);
		scroll_toTop(); // function to scroll the page up
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	window.data_url ="";
	
	
	
	
	
	// function that runs on click
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	 function runCityName()
	 {	 
		 window.cityGet = $('#citytext').val();
		 //alert(cityGet);
		 $("#cityName").html(cityGet);
		 //getWeather(function (data));
		 //return false;
		 
		 if (window.cityGet.trim()==''){
			 var city = "Kiev"; //will never fire
		 } else {
			 var city = window.cityGet; 
			 //alert("You selected " + city); // alert important
		 }
		  //cnt in API means days
	      window.data_url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&mode=json&units=metric&cnt=7&appid=42b614437754a4ec7c704604e2a3f97f";  //Kyiv
		  //alert(window.data_url);
		  
		  var days = 7; // counter for loop
		  //var weather_day_all = "";
          //var weather_day = "<center>";
		  //myAction(); //not working
		  
		  
		  
		  // Used to RUN DUBLICATE getWeather(); on your custom city click, can not run myAction() with getWeather() inside, though runs it on default load
		  myAction();
		  //  END Used to run DUBLICATE getWeather(); on your custom city click, can not run myAction() with getWeather() inside, though runs it on default load
		  
		  
		  
		  
		  
		} // END runCityName()
	    // **                                                                                  **
        // **************************************************************************************
        // **************************************************************************************
	
	
	
	
	
	
	
	
     //RUNS on load
	
	// Weather in Loop------------------------------------------------------------------------
	// ***********************************************************************
    // ***********************************************************************
    // **                                                                   **
	var days = 7; // counter for loop
	if ($("#citytext").val().trim()==''){
		//alert('default city'); //Important alert
	    var city = "Kyiv"; 
	} else {
		//alert('user'); //Important alert
		var city =  window.cityGet;
	}
	$("#cityName").html(city);
	
	//cnt in API means days
    data_url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&mode=json&units=metric&cnt=7&appid=42b614437754a4ec7c704604e2a3f97f";  //Kyiv
   //function to pull information out of the json file and stick it into an HTML element
	var Month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; //not used!!!!!
	//var weather_day_all = "";
    //var weather_day = "<center>";
	
	
	
	myAction(); //working
	
	
	
	
	
	
	
	// Core action which includes getWeather(function (data), it is called onLoad and onClick
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	function myAction(/*data*/) {
	getWeather(function (data) {
		
		//must have declaration to avoid doubling results onClick
		weather_day_all = "";
        weather_day = "<center>";
	
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
            
           //get the day of the week			
		   var daysArr = ['Sund','Mond','Tues','Wedn','Thurs','Frid &nbsp;','Satur'];
           var dayOfWeek = daysArr[new Date(data.list[i].dt * 1000).getDay()];
           //alert(dayOfWeek);		   
   
           //getting  tem  to  var  and  to  Celcium
          //var t=data.main.temp; t=t-272; t=Math.round(t);
   
   
   
          // calling the function to construct the whole Div with results, arg[counter which starts from 1, not 0 for Div naming(div1)/, for()iteration value/, Unix data from a]ax, converted to norn(29/05)/, all ajax data response, dayOfWeek(Friday))
          constructAjaxResponse(myIteration, i, formattedDate, data, dayOfWeek);
					  
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
	
	
	
	
	
	
	
	
	
	// original description for function to use jsonp to get weather information
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
    function getWeather(callback) { 
	    //alert('ajax '+ window.data_url); //Important alert
		
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
	
	
	
	
	
	
	
	
	
	
	
	
	// Scroll the page to results  #resultFinal
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
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
	
	
	
	
	
	
	
	
	//Used in onLoad only, to copy pattern copy var weather_day to click section
	// Comstructs Div with results, arg passed are  from {{function myAction() {getWeather(function (data) }}
	//Some arg have the same name as passed arg, when u call the funtion for simplicity, some(i.e passed "myIteration", but here we use "iteration") are the same,in this case, here in original function, we should rename "myIteration"
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	
	function constructAjaxResponse(iteration, i, formattedDate, data, dayOfWeek) //(iteration=i+1{to form div id="weather1"}), i=i, formattedDate=29/05,data=whole json answer, dayOfWeek=Sunday)
	{
		//getting 2 colors
		var colorArray = ['bg-primary', 'bg-info'];
		var colorFlag = 1;
		    if(i%2 == 0 ){
		       colorFlag = 0;	
		    } 
			
		 // getting  today date and today weather, icon (the 1st day) for adding TODAY date in City header	
            if (i==0){
			    todayXconstruct = formattedDate;
                todayTemp =  Math.floor(data.list[i].temp.min) + "&#186; +" + Math.floor(data.list[i].temp.max) + "&#186;" ;	
                todayIcon = "<img class='weather_icon' style='width:8%;' src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon +  ".png'/>"			
			}	
			
		
        //getting every day in the loop
        weather_day = "<div class='myStyle row " + colorArray[colorFlag] +  "' id='weather" + iteration + "'><center>" +  // <div class='row bg-primary' id='weather1'>
		              
					  // Date and ictyname in <title>
	                  "<div class='col-sm-1 col-xs-2' title='" +data.city.name + " '>" +
	                       dayOfWeek  + " " + formattedDate +  // Date, city in <title>
					  "</div>" +	
					  
                      "<div class='col-sm-2 col-xs-2'>" +					  
					       Math.floor(data.list[i].temp.day) + "&#186;" + // average temp
					  "</div>" +
					  
					  // min and max temp, symbol{&#186;} is a degree mark, temp is Math.floor() to prevent 19.87C
					  "<div class='col-sm-2 col-xs-2'>" +
	                      "+" + Math.floor(data.list[i].temp.min) + "&#186; +" + Math.floor(data.list[i].temp.max) + "&#186;" +
					  "</div>" +
					  
					  "<div class='col-sm-2 col-xs-2'    >" +	  
					      "Wind: " + data.list[i].speed + " m/h" +
					  "</div>" +
					  
					  // Weather description (condition, description) + icon
					  "<div class='col-sm-2 col-xs-2'  >" +
					      data.list[i].weather[0].description +
						      "<img class='weather_icon' style='width:27%;' src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon +  ".png'/>" +
					  "</div>" + 
					  
					  "</center></div>";
					  
					  
					  //Construction city info, name, country, population, lat/lon + weather for today only(Used in City header)
					  city_info = "<br><h3>Weather in " + data.city.name + ", " + data.city.country +" for 7 days<h3>" +
					              "<h6>" + 
								  "Population: " + data.city.population +  ", lon:"  + data.city.coord.lon + ", lat:" + data.city.coord.lat + "<br>" /* + todayIcon */ +  
								  "today " + todayXconstruct + " +" + todayTemp + /* +  "<br>" + todayIcon */   // today date and today tempature
								  "<br></h6>";
					              
					  $('#weather_header').html(city_info);
	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	 //getting every day in the loop
	 /*
        weather_day = "<div style='background-color:;' class='row' id='weather" + iteration + "'><center>" + 
		
	                  "<div class='col-sm-1 col-xs-1 ' style='border:1px solid red;'>" +
	                      "<h4><span class='label label-info' title=' " + data.city.name + " '>" + formattedDate + "</span></h4>" +   // Date, city in <title>
					  "</div>" +	
					  
                      "<div class='col-sm-2 col-xs-2'>" +					  
					      "<h4><span class='label label-warning'>t: " + Math.floor(data.list[i].temp.day) + "&#186; </span></h4>" + // average temp
					  "</div>" +
					  
					  // min and max temp, symbol{&#186;} is a degree mark, temp is Math.floor() to prevent 19.87C
					  "<div class='col-sm-2 col-xs-2'>" +
	                      "<h4><span class='label label-success'>+" + Math.floor(data.list[i].temp.min) + "&#186; +" + data.list[i].temp.max + "&#186; </span></h4>" +
					  "</div>" +
					  
					  "<div class='col-sm-2 col-xs-2'  style='border:1px solid red;'  >" +	  
					      "<h4><span class='label label-success'> Winter: " + data.list[i].speed + " m/h </span></h4>" +
					  "</div>" +
					  
					  // Weather description (condition, description) + icon
					  "<div class='col-sm-2 col-xs-2' style='border:1px solid red;' >" +
					      "<h4><span class='label label-info'>" +  data.list[i].weather[0].description +
						      "<img style='width:13%;' src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon +  ".png'/></span></h4>" +
					  "</div>" + 
					  
					  "</center></div>";
					  
			*/		  
					  
	
	        
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// OLD ----------------------------------------------------------------------------------------------------------------------------------
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
// end ready



