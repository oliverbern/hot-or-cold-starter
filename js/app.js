$(document).ready(function(){
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

/*--- Code Oliver ---*/
var min = 0
var max = 100
var computer_input = Math.floor(Math.random() * (max - min + 1)) + min;
var guesscount = 0;

$('.new').click(function() {
  newgame();
});

$('#guessButton').click(function() {
        input_user = parseInt($('input[name="userGuess"]').val());
        if (input_user >=0 && input_user<=100) {
        guesscount++;
        $('#count').empty();
        $('#count').append(guesscount);
        game(input_user);
        $('#userGuess').val("");
        $('ul#guessList').append('<li>'+input_user+'</li>');
    }
    else {
        $('#userGuess').val('Only 0-100 numbers');
        $('#userGuess').reset();
         $('.userGuess').val("");
    };
       
        
  });

var newgame = function() {
    computer_input = Math.floor(Math.random() * (max - min + 1)) + min;
    $('#feedback').remove();
    $('#count').empty();
    guesscount = 0;
    $('.userGuess').val("");
    $('#guessList li').remove();  
};


var game = function() {
    var difference = (computer_input - input_user)
    if (difference === 0) {
         $('#feedback').remove();
         $('.game').append('<h2 id="feedback">Well done!</h2>');
         $('.userGuess').val("");
        
}
    else if ((difference<=5 && difference > 0) || (difference>=-5 && difference<0)) {
        $('#feedback').remove();
        $('.game').append('<h2 id="feedback">Very, very hot</h2>');
        $('.userGuess').val("");
    }
    else if ((difference<=15 && difference > 5) || (difference>=-15 && difference<5)) {
        $('#feedback').remove();
        $('.game').append('<h2 id="feedback">Very hot</h2>');
        $('.userGuess').val("");
    }
    else if ((difference<=30 && difference > 15) || (difference>=-30 && difference<15)) {
        $('#feedback').remove();
        $('.game').append('<h2 id="feedback">Hot</h2>');
        $('.userGuess').val("");
    }
     else if ((difference<=50 && difference > 30) || (difference>=-50 && difference<30)) {
         $('#feedback').remove();
         $('.game').append('<h2 id="feedback">Cold</h2>');
         $('.userGuess').val("");
    }
    else if ((difference<=100 && difference > 50) || (difference>=-100 && difference<50)) {
        $('#feedback').remove();
        $('.game').append('<h2 id="feedback">Very cold</h2>');
        $('.userGuess').val("");
    };
};

});


