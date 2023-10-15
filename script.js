$(function() {
    $("h1").text("Correlation One Trivia!");
  })
  
  $(function() {
    $("p").text("Which person is a Co-founder and Co-CEO of Correlation One?")
  })
  
  $(function() {
    $("#answerOne").text("Shane Miller");
  })
  
  $(function() {
    $("#answerTwo").text("Rasheed Sabar");
    
  })
  
  $(function() {
    $("#answerThree").text("Ralph Smith");
  })
  
  $(function() {
    $("#answerFour").text("Shawn Milton");
  })
  
  
   $('#answerTwo').on('click', function() {
    $(this).css('background-color', 'green')
  })
  
  $('#answerOne').on('click', function() {
   $(this).css('background-color', 'red')
  })
  
  $('#answerThree').on('click', function() {
    $(this).css('background-color', 'red')
  })
  
  $('#answerFour').on('click', function() {
    $(this).css('background-color', 'red')
  })
  
  $('.answer').on('click', function() {
    $('#answerOne').prop("disabled", true)
    $('#answerTwo').prop("disabled", true)
    $('#answerThree').prop("disabled", true)
    $('#answerFour').prop("disabled", true)
  })
  
  $('#answerTwo').on('click', function() {
    $('#correct').show()
  })
  
  $('#answerOne').on('click', function() {
    $('#incorrect').show()
  })
  
  $('#answerThree').on('click', function() {
    $('#incorrect').show()
  })
  
  $('#answerFour').on('click', function() {
    $('#incorrect').show()
  })