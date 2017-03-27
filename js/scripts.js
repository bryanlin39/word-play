$(document).ready(function(){

  //Word Play
  $("form").submit(function(event){
    event.preventDefault();

    var newSentence = [];

    var sentence = $("input#sentence").val();
    var sentenceArr = sentence.split(" ");

// Solution 1 using looping and branching
    sentenceArr.forEach(function(word) {
      if (word.length >= 3) {
        newSentence.push(word);
      }
    });

// Solution 2 using Filters
    // function isLongEnough(string) {
    //   return string.length >= 3;
    // }
    // var newSentence = sentenceArr.filter(isLongEnough);

    newSentence = newSentence.reverse();

    var reverseSentence = "";
    newSentence.forEach(function(word) {
      reverseSentence += " " + word;
    });

    alert(reverseSentence);
  });


  // Build a deck
  // var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  //
  // var suits = ["club", "heart", "diamond", "spade"];
  //
  // suits.forEach(function(suit){
  //   numbers.forEach(function(number){
  //     $("#cards").append("<li>" + number + " of " + suit + "</li>");
  //   });
  // });



    // Word Order
  $("form").submit(function(event){
    event.preventDefault();

    var message = $("#message").val();

    var messagesArr = message.split(" ");
    var finalMessage = [];

    messagesArr.forEach(function(word1) {
      var wordCount = 0;
      messagesArr.forEach(function(word2){
        if (word1 === word2) {
          wordCount += 1;
        }
      });
      finalMessage.push(word1, wordCount);
    });

    alert(finalMessage);


  });
});
