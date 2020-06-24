//Question İsimli Kurucu Fonksiyon
function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Question Prototip - Doğru Cevap Kontrolü
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

//Quiz İsimli Kurucu Fonksiyon
function Quiz(questions){
    this.questions = questions;
    this.score = 0; //doğru bilinen soru sayısını tutacak değişken
    this.questionIndex = 0; //soru geçişi için soru indeksini tutacak değişken
}

//Quiz Prototip - Soruyu Geri Döndüren Fonksiyon
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

//Quiz Prototip - Quiz bitti mi?
Quiz.prototype.isFinish = function(){
    return (this.questions.length === (this.questionIndex + 1));
}

//Quiz Prototip - Cevaplama
Quiz.prototype.guess = function(answer){
    var question = this.getQuestion(); //soruyu getirdik
    if(question.checkAnswer(answer)){ //verilen cevap doğru ise
        this.score++; //skor artar
    }
    this.questionIndex++; //bir sonraki soru
}



//Soruların Oluşturulması
var q1 = new Question("Kararlı sürümü ECMAScript6 olan dil?",['C#','JavaScript','Python'],"JavaScript");

var q2 = new Question("... Chrome'un JavaScript Runtime teknolojisi üzerine kurulu bir platformdur.",['Visual Basic','NodeJs','Php'],"NodeJS");

var q3 = new Question("... dilinde değişkenler var, let ve const anahtar kelimeleri ile tanımlanabilir.",['Visual Basic','JavaScript','Java'],"JavaScript");

var questions = [q1,q2,q3]; //soru dizisi

//Quiz başlat
var quiz = new Quiz(questions);

console.log(quiz.isFinish());

console.log(quiz.getQuestion());
quiz.guess('JavaScript');

console.log(quiz.getQuestion());
quiz.guess('NodeJS');

console.log(quiz.getQuestion());
quiz.guess('JavaScript');

console.log(quiz.score);    