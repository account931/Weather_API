<!doctype html>
<!--------------------------------Bootstrap  Main variant ------------------------------------------>
  <html lang="en-US">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html">
      <meta name="description" content="Weather in Ukraine" />
      <meta name="keywords" content="weather, weather in Ukraine, weather in Kiev, weather in the world">
      <title>Weather</title>
  
      <!--Favicon-->
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
	  

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	  
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

      <link rel="stylesheet" type="text/css" media="all" href="css/myWeathers.css">
      <script src="weather_core.js"></script><!--  Core Random JS-->
	  
	  
	
	  
	  <meta name="viewport" content="width=device-width" />

     </head>

     <body>
	 
       
       <div id="headX" class=" text-center myShadow colorAnimate" style ='background-color:lavender;padding:10px;'> <!--#2ba6cb;-->
	   
         <h1 id="h1Text">
             <img id ="wLogo" class="shrink-large" src="images/weather2.png"/>		 
		     <span id="textChange" class="textShadow"> Weather on-line</span> 
		     <!--</span> <img src="http://78.media.tumblr.com/tumblr_m2hq5tt3ma1qav3uso1_400.gif" style="width:3%"/>--> 
			 <img id ="wLogo2" src="images/weather.png"/>
			 
		 </h1> 
		   
           <!--<p class="header_p">All cities weather processor</p>-->  <!--generates random lists, ramdomizes integers, etc--> <!--<span class="glyphicon glyphicon-duplicate"></span>-->  
	   </div>
	   
	   <!--
	   <div id="headX" class="jumbotron text-center gradient alert-info" style ='background-color:lavender;'> 
           <h1 id="h1Text"> <span id="textChange"> Weather on-line</span> <span class="glyphicon glyphicon-tree-conifer"></h1>    
           <p class="header_p">All cities weather processor  
           </p>	   
	   </div>
	   -->



         <br>
         <div class="wrapper grey">
    	   <div class="container">
		   
		   
		   
		      <div class="col-sm-4 col-xs-12 myShadow shrink" style="background-color:lavender;">
			  
			  
             
		           <!--------Form Start------>	
                   <form action="" id="myFormZ" method="post">
                      <div class="form-group">
                          <label for="city">Your city: <span class="glyphicon glyphicon-transfer"></span></label>
                          <input type="text" class="form-control" id="citytext" name="qr" list="character">
						  <datalist id="character">
						      
							  <option value="Amsterdam"></option>
							  <option value="Athens"></option>
							  <option value="Copenhagen"></option>
							  <option value="Dubai"></option>
							  
							  <option value="Istanbul"></option>
							  <option value="Kuala Lumpur"></option>
							  <option value="Kuwait"></option>
							  <option value="Kyiv"></option>
							  
							  <option value="London"></option>
							  <option value="Marrakech"></option>
							  <option value="Miami"></option> 
                              <option value="Milan"></option> 							  
                              <option value="Odessa"></option>
							  <option value="Rome"></option>
							  <option value="Stockholm"></option>
							  <option value="Tokyo"></option>
							  <option value="Vienna"></option>
							  <option value="Yakutsk"></option>
							  <option value="Zhytomyr"></option> 
							  
							  
							  
							 
							  
							  
							  
						  </datalist>
                     </div>
					<!--
                    <div class="form-group">
                          <label for="pwd">Password:</label>
                          <input type="password" class="form-control" id="pwd">
                    </div>
                    <div class="checkbox">
                          <label><input type="checkbox"> Remember me</label>
                    </div>
					-->
                   <button type="button" class="btn btn-default" id="submit">Submit</button>
				   <button type="button" class="btn btn-default" id="clear">Clear</button>
                   </form>				   
                   <!---------END Form -------->				   
				  
				   
				 </div> <!--END <div class="col-sm-4" style="background-color:lavender;">-->
				
				 
				  <!--<div class="col-sm-1 col-xs-1" "></div>-->
				 
				 
				 
				 
				 <!--------------------------- START Error window---------------------------->
				<div class="row">
				<div class="col-sm-6 col-xs-12" id="qrResult">
				<center>
				
                
				</center></div> <!-- END <div class="col-sm-4 col-xs-12" id="qrResult">-->
				</div>
                <!------------------------- END Error window------------------------------>
				 
				 
				 
				 
				 
				 
                <!--------------------------- START GENERATING Weather DIVS---------------------------->
				<br>
				<center>
				
				<hr class="lavender-color " style="width:98%;height:8px;">
				
				<!--- Header with city, population--->
				<div class="col-sm-12 col-xs-12 lavender-color myShadow" id="weather_header">
				    <!--Weather in <span id='cityName'>Kyiv</span> for 7 days--> <!-- Content NOT USED, content will be JS html-->
				</div> 
				<br><br>
				
				
				<!----Weather Core result-->
				<div class="col-sm-12 col-xs-12 myShadow" id="weatherResult"  > <!-- This div accept the JS html result--><!--style='word-wrap: break-word;'-->
				       
				
				</div> <!-- END class="row weatherResult">-->
				
                <!------------------------- SEND  GENERATING Weather DIVS------------------------------>
                

				 
				 
				 
				 
				  <!---Bootstrap dropdown JSON-->
				 <br><div  class="col-sm-12 col-xs-12" style="height:30px;"></div><!-- Just for margin-->
				 
    	         <div class="dropdown">
                     <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">JSON
                     <span class="caret"></span></button>
                     <div class="dropdown-menu">
					     <p id="pureJson"></p>
                     
                     </div>
                     </div>
    	         <!---Bootstrap dropdown JSON-->
				 
				 </center>
				 <br><br><br><br><br>
				 
				 
				 
				 
                                    
     
    			</div><!-- /.container -->	
				  		
    		</div><!-- /.wrapper -->

                

       
		
		
		
		  <!-----Footer ---->
		        
				<div class="footer navbar-fixed-bottom"> <!--navbar-fixed-bottom  fixxes bootom problem-->
				    <!--Contact: --> <strong>dimmm931@gmail.com</strong><br>
					<?php  echo date("Y"); ?>
				</div>
		<!--END Footer ---->  
		
		
		
		
		<!-- ##### -- Advertise -- #### -->
		<!--
		   <div class="ads ">
		        <a target="_blank" href="https://www.facebook.com/events/165143454205556/" id="link">
				    <img src="images/ads/sub_od.jpg" alt="Submerged"/>  
				</a>	
			</div>
			-->
		<!-- ##### -- END Advertise -- #### -->
		
		
		
		
    
    </body>
</html>





<?php

// Record (with CLASS) all the  input  to  txt;  //;
      include("Classes/RecordTxt.php");
      RecordTxt::RecordAnyInput(array(/*$user*/), 'recordText/weather_log.txt');// Record  to  text;
//End  Record;
?>
