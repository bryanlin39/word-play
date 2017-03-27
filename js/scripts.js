$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var newSentence = [];

    var sentence = $("input#sentence").val();
    var sentenceArr = sentence.split(" ");

    sentenceArr.forEach(function(word) {
      if (word.length >= 3) {
        newSentence.push(word);
      }
    });

    newSentence = newSentence.reverse();

    var reverseSentence = "";
    newSentence.forEach(function(word) {
      reverseSentence += " " + word;
    });

    alert(reverseSentence);

  });
});
