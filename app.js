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
    return (this.questions.length === (this.questionIndex));    
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
var q1 = new Question("Kararlı sürümü ECMAScript6 olan dil?",['C#','JavaScript','Python','C++'],"JavaScript");

var q2 = new Question("... Chrome'un JavaScript Runtime teknolojisi üzerine kurulu bir platformdur.",['Visual Basic','NodeJS','Php','C++'],"NodeJS");

var q3 = new Question("... dilinde değişkenler var, let ve const anahtar kelimeleri ile tanımlanabilir.",['Visual Basic','JavaScript','Java','C++'],"JavaScript");

var questions = [q1,q2,q3]; //soru dizisi

//Quiz Başlat
var quiz = new Quiz(questions);

loadQuestion(); //soru yükle

function loadQuestion(){
    if(quiz.isFinish()){ //eğer quiz biterse
        showScore(); //skoru göster
    }else{
        let qs = quiz.getQuestion(); //soruyu getir
        let ch = qs.choices; //seçenekleri al
        document.querySelector('#question').textContent = qs.text; //question id'li elemente soru yazıldı

        for(i = 0; i < ch.length ; i++){
            let element = document.querySelector('#choice'+i); //choice id'li elementler sırası ile elemente atanıp
            element.innerText = ch[i]; //bu elementin txt'ine seçenekler yazıldı
            guess('btn'+i,ch[i]);
        } 

        showProgress(); //ilerlemeyi gösterecek fonksiyon
    }
}

//Yanıtların Verilmesi
function guess(id,guessAns){
    let btn = document.getElementById(id); //ilgili id'ye sahip buton seçildi
    btn.onclick = function(){ //bu butonun onclick olayı ile nesne içindeki prototip guess fonk çalıştırıldı
        quiz.guess(guessAns)
        loadQuestion(); //bir sonraki soru için
    }
}

//Skoru Gösterir
function showScore(){
    let html = `<h2>Skorunuz </h2><h4>${quiz.score}</h4>`; //skor bilgisi
    let cardBody = document.querySelector('.card-body'); //card-body seçildi
    cardBody.innerHTML = html; //skor bilgisi card-body'e yazıldı
    cardBody.classList.add('bg-dark','text-white'); //card-body css sınıflarına ekleme yapıldı
}

//İlerlemeyi Gösterir
function showProgress(){
    let totalQuestion = quiz.questions.length; //toplam soru sayısı
    let questionNumber = quiz.questionIndex + 1; //hangi soru
    document.querySelector('#progress').innerHTML = 'Soru ' + questionNumber + '/' + totalQuestion; //progress üzerine yazılması
}