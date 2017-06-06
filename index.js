$(document).ready(function(){
 
 var onScreen = '';
 var click = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/Type%20Single%20Key%20(44100%20Hz).mp3");
  
  $('.col').click(function(){
        onScreen += this.value;
       document.getElementById('screen').innerHTML = "<p class = 'onscreen'>" + onScreen + "</p>";

  });

$('#equals').click(function(){
        onScreen = eval(onScreen);
       document.getElementById('screen').innerHTML = "<p class = 'onscreen'>" + onScreen + "</p>";
});

  
 $('#ac').click(function(){
        onScreen = '';
       document.getElementById('screen').innerHTML = "<p class = 'onscreen'>" + onScreen + "</p>";
});

  
$('#bs').click(function(){
        onScreen = onScreen.slice(0, -1);
 // $('.screen').html("<p class ='onscreen'>" + onScreen + "</p>");
  document.getElementById('screen').innerHTML = "<p class ='onscreen'>" + onScreen + "</p>";
});
  
$('button').click(function(){
  var x = $(this);
  x.animate({top: '5px'},100);
  x.animate({top: '0'},100);
  click.play();
});

});