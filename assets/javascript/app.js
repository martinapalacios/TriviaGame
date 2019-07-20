$(document).ready(function(){

  $("#triviaForm").hide(); //hides trviaForm div until called upon
  
  $("#Answers").hide(); //hides Answers div until called upon
  
  $(".start").click(function (){
  $("#triviaForm").fadeToggle(); //when button is clicked, triviaForm div is shown
  
  $(".start").hide(); //hide start button
  
  let counter = 100; //100 seconds
  let correctAnswer = 0;
  let wrongAnswer = 0;
  let unAnswered = 9; 
  let interval = setInterval(function(){

 $("#counter").text(counter + "s"); //putting counter on page
  counter--; //making the counter go down
 if (counter == 0){ // if counter runs out
  $("#Answers").fadeToggle();   //show Answers div
  unAnswered = 9-Number($("input:radio.answer:checked").length); //get all the answers that are checked minus 9
  $("input:radio.answer:checked").each(function(){ //check to  see which one is correct or wrong of the answered questions
    let radioButtonName = $(this).attr("name"); 
    switch(radioButtonName){
      case "question1" :
      if ($(this).val() == "43True"){ //if correct answer, increase correct answer
        correctAnswer++;
        }
      else{
          wrongAnswer++;  //otherwise, inscrese wrong answer
        }
       break;
       case "question2" :
       if ($(this).val() == "AstrodomeTrue"){
           correctAnswer++;
       }
        else{
          wrongAnswer++;  
        }
       break;
       case "question3" :
       if ($(this).val() == "HakeemTrue"){
           correctAnswer++;
       }
        else{
          wrongAnswer++;  
        }
       break; 
       case "question4" :
       if ($(this).val() == "8thTrue"){
           correctAnswer++;
       }
        else{
          wrongAnswer++;  
        }
       break; 
       case "question5" :
       if ($(this).val() == "OliersTrue"){
           correctAnswer++;
       }
        else{
          wrongAnswer++;  
        }
       break; 
       case "question6" :
       if ($(this).val() == "BuffaloTrue"){
           correctAnswer++;
       }
        else{
          wrongAnswer++;  
        }
       break; 
       case "question7" :
       if ($(this).val() == "1836True"){
           correctAnswer++;
       }
        else{
          wrongAnswer++;  
        }
       break; 
       case "question8" :
       if ($(this).val() == "TrueTrue"){
           correctAnswer++;
       }
        else{
          wrongAnswer++;  
        }
       break; 
       case "question9" :
       if ($(this).val() == "aobTrue"){
           correctAnswer++;
       }
        else{
          wrongAnswer++;  
        }
       break;   
      }
        
    });

    $("#correctAnswer").text(correctAnswer); //displays results on Answers div
    $("#wrongAnswer").text(wrongAnswer);
    $("#unAnswered").text(unAnswered);   
    $("#triviaForm").fadeToggle();
    }

    }, 1000);

  });
    
});