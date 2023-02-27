let score = 0;
let highscore = 0;

let number = Math.floor(Math.random() * 13) + 1;
let number2 = Math.floor(Math.random() * 13) + 1;
let highorlow = '';

let mode_n = 0;
let x = 0;
let y = 0;
const music_correct = new Audio('Quiz-Correct_Answer02-1.mp3');
const music_wrong = new Audio('Quiz-Wrong_Buzzer02-3.mp3');

const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d');

window.onload = function(){
    console.log('start');
    score = 0;
    gametitle();
    
}

function onClick(e){
    const rect = canvas.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;

    if(mode_n == 0){

        if (x >= 225 && x <= 475 && y >= 350 && y <= 400) {
            mode_n = 1;

            ctx.clearRect(0, 0, 750, 500);
            num();
            gamedraw();
        }

    }else if(mode_n == 1){

        if (x >= 200 && x <= 300 && y >= 350 && y <= 450) {
            highorlow = 'high';
            game();

        }else if (x >= 450 && x <= 550 && y >= 350 && y <= 450) {

            highorlow = 'low';
            game();
        }

    }else if(mode_n == 2){
        if (x >= 450 && x <= 650 && y >= 350 && y <= 400) {
            ctx.clearRect(0, 0, 750, 500);
            mode_n = 1;
            score = 0;
            num();
            gamedraw();
        }
    }

}


canvas.addEventListener('click',onClick,false);




function gametitle(){

    // 四角形を描画
    ctx.fillStyle = 'red';
    ctx.fillRect(225, 350, 250, 50); 

    //テキストを描画
    ctx.fillStyle = 'black';
    ctx.font = '100px serif';
    ctx.fillText('High & Low', 110, 200);
    ctx.font = '50px serif';
    ctx.fillText('start', 300, 390);

    
}

function gamedraw(){

    ctx.clearRect(0, 0, 750, 500);


    // 四角形を描画
    ctx.fillStyle = 'red';
    ctx.fillRect(200, 350, 100, 100); 
    ctx.fillStyle = 'black';
    ctx.font = '30px serif';
    ctx.fillText('HIGH', 200, 415);   

    ctx.fillStyle = 'blue';
    ctx.fillRect(450, 350, 100, 100); 
    ctx.fillStyle = 'black';
    ctx.font = '30px serif';
    ctx.fillText('LOW', 450, 415);

    //テキストを描画
    ctx.fillStyle = 'black';
    ctx.font = '20px serif';
    ctx.fillText('High & Low', 0, 20);
    ctx.font = '50px serif';
    ctx.fillText('score: ' + score, 300, 60);
    ctx.font = '20px serif';
    ctx.fillText('highscore: '+highscore, 600, 30);

    //card
    ctx.fillStyle = 'white';
    ctx.fillRect(175,100,125,175);
    ctx.fillStyle = 'black';
    ctx.font = '50px serif';
    ctx.fillText(number, 215, 200);

    ctx.fillStyle = 'black';
    ctx.fillRect(450,100,125,175);
    ctx.fillStyle = 'white';
    ctx.font = '50px serif';
    ctx.fillText("?", 475, 200);

}

function game(){
    if(number > number2 && highorlow === 'low'){

        music_correct.play();
        score++;
        num();
        gamedraw();
    }else if(number < number2 && highorlow === 'high'){

        music_correct.play();
        score++;
        num();
        gamedraw();
    }else{

        music_wrong.play();
        mode_n= 2;

      
        result();
    }
}

function result(){
    ctx.fillStyle = 'white';
    ctx.fillRect(10, 10, 730, 480); 

    ctx.fillStyle = 'yellow';
    ctx.fillRect(450, 350, 200, 50); 
    ctx.fillStyle = 'black';
    ctx.font = '30px serif';
    ctx.fillText('RETRY', 480, 380);

    ctx.fillStyle = 'black';
    ctx.font = '50px serif';
    ctx.fillText('RESULT', 260, 60);

    ctx.fillStyle = 'black';
    ctx.font = '50px serif';
    ctx.fillText('SCORE: '+score, 60, 150);

    if(score > highscore){
        highscore = score;
        ctx.fillStyle = 'green';
        ctx.font = '50px serif';
        ctx.fillText('NEW RECODE', 60, 240);
    }
}

function num(){
    number = Math.floor(Math.random() * 13) + 1;
    number2 = Math.floor(Math.random() * 13) + 1;

    while(number == number2){

        number2 = Math.floor(Math.random() * 13) + 1;
    }
}

