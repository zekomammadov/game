const userImg = document.querySelector('#user-img');
const enemyImg = document.querySelector('#enemy-img');
const resultText = document.querySelector('#result-text');
const rockBtn = document.querySelector('#rock');
const scissorsBtn = document.querySelector('#scissors');
const paperBtn = document.querySelector('#paper');
const Btn = document.querySelectorAll('.option-img')
const scores = document.querySelector('#score');
const healths = document.querySelector('#health');
const gameContent = document.querySelector('#gameContent');
const restartDiv = document.querySelector('#restartDiv');
const lastScore = document.querySelector('#lastScore');

let score = 0;
let health = 5;
function startGame() {
    for (let i = 0; i < Btn.length; i++) {
        Btn[i].addEventListener('click', function() {
            const clickedBtn = this;
    
            Btn.forEach(btn => {
                btn.classList.remove('active');
            });
    
            clickedBtn.classList.add('active');
            
            const img = document.querySelector('.active img')
    
            if (clickedBtn.classList.contains('active')) {
                userImg.innerHTML = '';
                userImg.innerHTML += `<img class="size-full object-contain" src="${img.src}" alt="">`;
            }
            randomEnemy(); 
            const userImgSrc = userImg.querySelector('img').src;
            const enemyImgSrc = enemyImg.querySelector('img').src;
    
            if (userImgSrc === enemyImgSrc) {
                resultText.textContent = "Equals"
            }
            else if ((userImgSrc.includes('paper') && enemyImgSrc.includes('rock')) || (userImgSrc.includes('rock') && enemyImgSrc.includes('scissors')) || (userImgSrc.includes('scissors') && enemyImgSrc.includes('paper')))  {
                resultText.textContent = 'User Won' ;
                score++;
                scores.textContent = ""
                scores.textContent += parseInt(score);
                
            }
            else{
                resultText.textContent = 'Enemy Won' ;
                health--;
                healths.textContent = ""
                healths.textContent += parseInt(health);
                if (health === 0) {
                    restartGame();
                }
    
            }
        })   
    }
}

function random(max) {
    return Math.floor(Math.random() * max);
}

function randomEnemy() {
    const randomIndex = random(Btn.length);

    const btnImg = Btn[randomIndex].querySelector('img');
    
    enemyImg.innerHTML = `<img class="size-full object-contain" src="${btnImg.src}" alt="">`;
}

function restartGame() {
    gameContent.classList.add('hidden');
    restartDiv.classList.remove('hidden');
    lastScore.textContent = scores.textContent
}

function restart() {
    gameContent.classList.remove('hidden');
    restartDiv.classList.add('hidden');
    score = 0;
    health = 5;
    scores.textContent = score;
    healths.textContent = health;
    userImg.innerHTML = '<img class="size-full object-contain" src="assets/img/rock.png" alt="">';
    enemyImg.innerHTML = '<img class="size-full object-contain" src="assets/img/rock.png" alt="">';
    resultText.textContent = "Let's Play!!";
}
startGame();


