<!doctype html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html">
  <title>Re-trim  </title>
  
   <!--Favicon-->
   <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">

 
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>



  <link rel="stylesheet" type="text/css" media="all" href="css/styles.css">
  <script src="supp.js"></script><!--  Core  JS-->

</head>

<body>





<div class="jumbotron text-center" style =' background-color: #2ba6cb;'>
  <h1>Waze Trim application</h1>
  <p>Finds, highlights and fixes all double blankspaces, consecutive duplicates and more</p> 
</div>







<div class="item contact padding-top-0 padding-bottom-0" id="contact1">
    	
    		<div class="wrapper grey">
    	
    			<div class="container">


				
				


                   





				
    		<!--START DIV 1111-->
    				<div class="col-md-12"> <!--5-->






	                





    			
    					<!--<h3 class="margin-bottom-40 editContent">Your  <span class='subtext'> text</span></h3>-->





<!--------------------------------------------------- TextArea FORm  Start------------------------------------------------->
    				
    					<form role="form">  	
    				  		    				  	
    				  	   				  		
    				  		<div class="form-group">
    				  			<textarea class="form-control" rows="6" placeholder="Your text here.." id='coordsInput' required></textarea>
								
    				  		
    				  			
    				  		</div>
    				  
    				    	
    				  	   
    				
    				
 <!---------------------------------------------------TextArea FORm  END------------------------------------------------->
    			
    					
    				</div><!-- /.col-md-5 --> <!-- END  <div class="col-md-5">-->

  <!-------------------END DIV 1111-->










<!-------------------------------------------------------START BUTTONS---------------------------------------->
                                        <!--mine-->
					</br>
					<div class="col-md-8"  id="" style="margin-top:33px;">  


    				  	   
										
    				  		<button id="splitButton" type="button" class="btn btn-primary btn-embossed btn-lg btn-wide">Run a check</button>
                            <button id="clearButton" type="button"  class="btn btn-primary btn-embossed btn-lg btn-wide">Reset</button >
							<button id="examplebutton" type="button" class="btn btn-primary btn-embossed btn-lg btn-wide">Example</button>
                            <button id="instructionButton" type="button" class="btn btn-primary btn-embossed btn-lg btn-wide">Instruction</button>
                           <button id="cr_footer" type="button" class="btn btn-primary btn-embossed btn-lg btn-wide">CR Footer</button>
    				</div>
<!-------------------------------------------------------START BUTTONS---------------------------------------->







<!------------------------------------------INSTR  WORKING------------------------------->
</br><div class="col-md-8 jumbotron"  id="hiddenInstructions" style="display:none;margin-top:2%;"> 

<!-- INSTRUCTIONS-->
<p>
<!--RU-->
</br></br>
<a href='#' target="_blank" style="font-size:18px; "/>View Video Instructions</a>
</br>

<!-- END RU-->
</br>This application performs a check, finds, highlights and fixes all double blankspaces, blankspace + comma, blankspace + full stop.
</br></br>Additionally, fixes consecutive duplicates, double commas, double dots, cases when word is preceeded by comma without no space and more.
</br>List:
</br>1.Double blankspaces.
</br>2.Character followed by comma wih space (i.e "word ,")
</br>3.Character followed by dot wih space (i.e  "word .")
</br>4.Consecutive duplicates (i.e "to to")
</br>5.Accidentally placed two repetitive commas (i.e  ",,")
</br>6.Accidentally placed two repetitive dots (i.e  "..")
</br>7.Character preceeded by comma without space (i.e ",word") - > <span style="color:red;"> being implemented </span>
</br>8.Character preceeded by dot without space (i.e ".word") - > <span style="color:red;"> being implemented</span>
</br>9.Missing dot in the end of the sentence - > <span style="color:red;"> being implemented</span>
</br>10.Pls know - > <span style="color:red;"> being implemented</span>

 </br></br><i>Note: numbered and bulleted list option and other inner GCases formats will not be saved.</i></br></p>
<!--END  INSTRUCTIONS-->

 </div>
<!-----------------------------------------END INSTR---------------------->



					
					
					<!--------------------------------mine RESULTS------------------------------------->
					</br></br>
					<div class="col-md-8"  id="resultFinal" style="margin-top:33px;">   </div> </br></br></br>
					<!--------------------------------- end  mine-------------------------------------->
					
    		                          

<!--------------  some---------->
</br></br>
<div class="col-md-8">
<p id="highLight_errors_button" style="display:none;cursor:pointer;padding:10px;margin-top:17px;text-decoration:underline;color:red;">show details >></p>
<div id="highLight_errors" style="display:none;padding:19px;border:1px dotted red;box-shadow: 5px 5px 25px red ;"><!-- Highlights with red double spaces-->
</div><!--end id="highLight_errors -->
</br></br>
</div><!--div class="col-md-8">-->
<!----------------end some------>


                                        

    			</div><!-- /.container -->
				
				
				
					
					
					
    		
    		</div><!-- /.wrapper -->

                <div style="height:77px;"></div>


    	
    	</div><!-- /.item -->
    
    </body>
</html>




<!--
<?php
// Record (with CLASS) all the  input  to  txt;  //;
      include("Classes/RecordTxt.php");
      RecordTxt::RecordAnyInput(array(/*$user*/), 'recordText/myWazeUnofficial.txt');// Record  to  text;
//End  Record;
?>-->
