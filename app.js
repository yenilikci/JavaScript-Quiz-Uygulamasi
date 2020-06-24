//Soru İsimli Kurucu Fonksiyon
function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Sorular Prototip - Doğru Cevap Kontrolü
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

//Soruların Oluşturulması
var q1 = new Question("Kararlı sürümü ECMAScript6 olan dil?",['C#','JavaScript','Python'],"JavaScript");

var q2 = new Question("... Chrome'un JavaScript Runtime teknolojisi üzerine kurulu bir platformdur.",['Visual Basic','NodeJs','Php'],"NodeJS");

var q3 = new Question("... dilinde değişkenler var, let ve const anahtar kelimeleri ile tanımlanabilir.",['Visual Basic','JavaScript','Java']);

