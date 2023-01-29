const oneDraw = Math.floor(Math.random() * 10) + 1;
const CPUoneDraw = Math.floor(Math.random() * 10) + 1;
const twoDraw = Math.floor(Math.random() * 10) + 1;
const CPUtwoDraw = Math.floor(Math.random() * 10) + 1;
const thirdDraw = Math.floor(Math.random() * 10) + 1;
const CPUthirdDraw = Math.floor(Math.random() * 10) + 1;
const fourthDraw = Math.floor(Math.random() * 10) + 1;
const CPUfourthDraw = Math.floor(Math.random() * 10) + 1;
const fifthDraw = Math.floor(Math.random() * 10) + 1;
const CPUfifthDraw = Math.floor(Math.random() * 10) + 1;
const sixthDraw = Math.floor(Math.random() * 10) + 1;
const CPUsixthDraw = Math.floor(Math.random() * 10) + 1;
const seventhDraw = Math.floor(Math.random() * 10) + 1;
const CPUseventhDraw = Math.floor(Math.random() * 10) + 1;
const eighthDraw = Math.floor(Math.random() * 10) + 1;
const CPUeighthDraw = Math.floor(Math.random() * 10) + 1;
const ninethDraw = Math.floor(Math.random() * 10) + 1;
const CPUninethDraw = Math.floor(Math.random() * 10) + 1;
const tenthDraw = Math.floor(Math.random() * 10) + 1;
const CPUtenthDraw = Math.floor(Math.random() * 10) + 1;

//Math.floor(Math.random() * 10) + 1;
function removePlayButton(){
    document.querySelector('.cards-container').style.visibility = 'visible';
    document.querySelector('.play-button').remove();
    document.querySelector('p').style.visibility = 'visible';
    document.querySelector('#first-draw').innerHTML = oneDraw;
    document.querySelector('#second-draw').innerHTML = twoDraw;
    document.querySelector('.gameButtons').style.visibility = 'visible';
    
    
}
function hitMe(){
    document.querySelector('#third-draw').style.visibility = 'visible'
    document.querySelector('#third-draw').innerHTML = thirdDraw;
    document.querySelector('.gameButtons').remove();
    if(oneDraw + twoDraw + thirdDraw == 21){
        document.querySelector('#bust').innerHTML = 'You hit 21! Blackjack!'
    } else if (oneDraw + twoDraw + thirdDraw < 21){
        document.querySelector('.gameButtonsTwo').style.visibility = "visible"
        document.querySelector('#bust').innerHTML = "Your total is " + (oneDraw + twoDraw + thirdDraw)+'! Hit or Stand?'
    }else{
        document.querySelector('#bust').innerHTML = 'You Busted! Your total was ' + (oneDraw + twoDraw + thirdDraw)+"!"
        document.querySelector('#bust').style.color = 'red'
        losses++;
        document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function stand(){
    const total = oneDraw + twoDraw;
    const cputotal = CPUoneDraw + CPUtwoDraw;
    console.log("A",cputotal);
    document.querySelector('#cpu').style.visibility = 'visible'
    document.querySelector('#bust').innerHTML = "It's Your Opponents Turn :";
    document.querySelector('#total').style.visibility = "visible"
    document.querySelector('#total').innerHTML = "Your Total Was " + total + "! CPU's Total Was " + cputotal
    document.querySelector('#first-draw').innerHTML = CPUoneDraw;
    document.querySelector('#second-draw').innerHTML = CPUtwoDraw;
    document.querySelector('#first-draw').style.color = 'black';
    document.querySelector('#second-draw').style.color = 'black';
    if (cputotal > 21){
        document.querySelector('#bust').innerHTML = "You Win! Opponent Busted!"
        wins++
    }else if (total > cputotal){
      document.querySelector('#bust').innerHTML = "You Win!"
      wins++
      document.querySelector('.score').innerHTML = wins + '-' + losses
     }else{
      document.querySelector('#bust').innerHTML = "You Lose!"
      losses++
      document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}

function secondHit(){
    document.querySelector('#fourth-draw').style.visibility = "visible"
    document.querySelector('#fourth-draw').innerHTML = fourthDraw;
    document.querySelector('.gameButtonsTwo').remove();
    if (oneDraw + twoDraw + thirdDraw + fourthDraw == 21){
        document.querySelector('#bust').innerHTML = 'You hit 21! Blackjack!'
    }else if (oneDraw + twoDraw + thirdDraw + fourthDraw < 21){
        document.querySelector('.gameButtonsThree').style.visibility = "visible"
        document.querySelector('#bust').innerHTML = "Your total is " + (oneDraw + twoDraw + thirdDraw + fourthDraw)+'! Hit or Stand?'
    }else{
        document.querySelector('#bust').innerHTML = 'You Busted! Your total was ' + (oneDraw + twoDraw + thirdDraw + fourthDraw)+"!"
        document.querySelector('#bust').style.color = 'red'
        losses++
        document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function standTwo(){
    const total = oneDraw + twoDraw + thirdDraw;
    const cputotal = CPUoneDraw + CPUtwoDraw + CPUthirdDraw;
    document.querySelector('#cpu').style.visibility = 'visible'
    document.querySelector('#total').style.visibility = "visible"
    document.querySelector('#total').innerHTML = "Your Total Was " + total + "! CPU's Total Was " + cputotal
    document.querySelector('#bust').innerHTML = "Youre opponents cards are:";
    document.querySelector('#first-draw').innerHTML = CPUoneDraw;
    document.querySelector('#second-draw').innerHTML = CPUtwoDraw;
    document.querySelector('#third-draw').innerHTML = CPUthirdDraw;
    document.querySelector('#first-draw').style.color = 'black';
    document.querySelector('#second-draw').style.color = 'black';
    document.querySelector('#third-draw').style.color = 'black';
    if (cputotal > 21){
        document.querySelector('#bust').innerHTML = "You Win! Opponent Busted!"
        wins++
        document.querySelector('.score').innerHTML = wins + '-' + losses
    }else if (total > cputotal){
      document.querySelector('#bust').innerHTML = "You Win!"
      wins++
      document.querySelector('.score').innerHTML = wins + '-' + losses
     }else{
      document.querySelector('#bust').innerHTML = "You Lose!"
      losses++
      document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function thirdHit(){
    document.querySelector('#fifth-draw').style.visibility = "visible"
    document.querySelector('#fifth-draw').innerHTML = fifthDraw;
    document.querySelector('.gameButtonsThree').remove();
    if (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw == 21){
        document.querySelector('#bust').innerHTML = 'You hit 21! Blackjack!'
    } else if (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw < 21){
        document.querySelector('.gameButtonsFour').style.visibility = "visible"
        document.querySelector('#bust').innerHTML = "Your total is " + (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw)+'! Hit or Stand?'
    }else{
       document.querySelector('#bust').innerHTML = 'You Busted! Your total was ' + (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw)+"!"
       document.querySelector('#bust').style.color = 'red'
       losses++
       document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function standThree(){
    const total = oneDraw + twoDraw + thirdDraw + fourthDraw;
    const cputotal = CPUoneDraw + CPUtwoDraw + CPUthirdDraw + CPUfourthDraw;
    document.querySelector('#cpu').style.visibility = 'visible'
    document.querySelector('#total').style.visibility = "visible"
    document.querySelector('#total').innerHTML = "Your Total Was " + total + "! CPU's Total Was " + cputotal
    document.querySelector('#bust').innerHTML = "Youre opponents cards are:";
    document.querySelector('#first-draw').innerHTML = CPUoneDraw;
    document.querySelector('#second-draw').innerHTML = CPUtwoDraw;
    document.querySelector('#third-draw').innerHTML = CPUthirdDraw;
    document.querySelector('#fourth-draw').innerHTML = CPUfourthDraw;
    document.querySelector('#first-draw').style.color = 'black';
    document.querySelector('#second-draw').style.color = 'black';
    document.querySelector('#third-draw').style.color = 'black';
    document.querySelector('#fourth-draw').style.color = 'black';
    if (cputotal > 21){
        document.querySelector('#bust').innerHTML = "You Win! Opponent Busted!"
        wins++
        document.querySelector('.score').innerHTML = wins + '-' + losses
    }else if (total > cputotal){
      document.querySelector('#bust').innerHTML = "You Win!"
      wins++
      document.querySelector('.score').innerHTML = wins + '-' + losses
     }else{
      document.querySelector('#bust').innerHTML = "You Lose!"
      losses++
      document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function fourthHit(){
    document.querySelector('#sixth-draw').style.visibility = "visible"
    document.querySelector('#sixth-draw').innerHTML = sixthDraw;
    document.querySelector('.gameButtonsFour').remove();
    if (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw == 21){
        document.querySelector('#bust').innerHTML = 'You hit 21! Blackjack!'
    } else if (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw < 21){
        document.querySelector('.gameButtonsFive').style.visibility = "visible"
        document.querySelector('#bust').innerHTML = "Your total is " + (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw)+'! Hit or Stand?'
    }else{
       document.querySelector('#bust').innerHTML = 'You Busted! Your total was ' + (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw)+"!"
       document.querySelector('#bust').style.color = 'red'
       losses++
       document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function standFour(){
    const total = oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw;
    const cputotal = CPUoneDraw + CPUtwoDraw + CPUthirdDraw + CPUfourthDraw + CPUfifthDraw;
    document.querySelector('#cpu').style.visibility = 'visible'
    document.querySelector('#total').style.visibility = "visible"
    document.querySelector('#total').innerHTML = "Your Total Was " + total + "! CPU's Total Was " + cputotal
    document.querySelector('#bust').innerHTML = "Youre opponents cards are:";
    document.querySelector('#first-draw').innerHTML = CPUoneDraw;
    document.querySelector('#second-draw').innerHTML = CPUtwoDraw;
    document.querySelector('#third-draw').innerHTML = CPUthirdDraw;
    document.querySelector('#fourth-draw').innerHTML = CPUfourthDraw;
    document.querySelector('#fifth-draw').innerHTML = CPUfifthDraw;
    document.querySelector('#first-draw').style.color = 'black';
    document.querySelector('#second-draw').style.color = 'black';
    document.querySelector('#third-draw').style.color = 'black';
    document.querySelector('#fourth-draw').style.color = 'black';
    document.querySelector('#fifth-draw').style.color = 'black';
    if (cputotal > 21){
        document.querySelector('#bust').innerHTML = "You Win! Opponent Busted!"
        wins++
        document.querySelector('.score').innerHTML = wins + '-' + losses
    }else if (total > cputotal){
      document.querySelector('#bust').innerHTML = "You Win!"
      wins++
      document.querySelector('.score').innerHTML = wins + '-' + losses
     }else{
      document.querySelector('#bust').innerHTML = "You Lose!"
      losses++
      document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function fifthHit(){
    document.querySelector('#seventh-draw').style.visibility = "visible"
    document.querySelector('#seventh-draw').innerHTML = seventhDraw;
    document.querySelector('.gameButtonsFive').remove();
    if (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw == 21){
        document.querySelector('#bust').innerHTML = 'You hit 21! Blackjack!'
    } else if (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw < 21){
        document.querySelector('.gameButtonsSix').style.visibility = "visible"
        document.querySelector('#bust').innerHTML = "Your total is " + (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw)+'! Hit or Stand?'
    }else{
       document.querySelector('#bust').innerHTML = 'You Busted! Your total was ' + (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw)+"!"
       document.querySelector('#bust').style.color = 'red'
       losses++
       document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function standFive(){
    const total = oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw;
    const cputotal = CPUoneDraw + CPUtwoDraw + CPUthirdDraw + CPUfourthDraw + CPUfifthDraw + CPUsixthDraw;
    document.querySelector('#cpu').style.visibility = 'visible'
    document.querySelector('#total').style.visibility = "visible"
    document.querySelector('#total').innerHTML = "Your Total Was " + total + "! CPU's Total Was " + cputotal
    document.querySelector('#bust').innerHTML = "Youre opponents cards are:";
    document.querySelector('#first-draw').innerHTML = CPUoneDraw;
    document.querySelector('#second-draw').innerHTML = CPUtwoDraw;
    document.querySelector('#third-draw').innerHTML = CPUthirdDraw;
    document.querySelector('#fourth-draw').innerHTML = CPUfourthDraw;
    document.querySelector('#fifth-draw').innerHTML = CPUfifthDraw;
    document.querySelector('#sixth-draw').innerHTML = CPUsixthDraw;
    document.querySelector('#first-draw').style.color = 'black';
    document.querySelector('#second-draw').style.color = 'black';
    document.querySelector('#third-draw').style.color = 'black';
    document.querySelector('#fourth-draw').style.color = 'black';
    document.querySelector('#fifth-draw').style.color = 'black';
    document.querySelector('#sixth-draw').style.color = 'black';
    if (cputotal > 21){
        document.querySelector('#bust').innerHTML = "You Win! Opponent Busted!"
        wins++
        document.querySelector('.score').innerHTML = wins + '-' + losses
    }else if (total > cputotal){
      document.querySelector('#bust').innerHTML = "You Win!"
      wins++
      document.querySelector('.score').innerHTML = wins + '-' + losses
     }else{
      document.querySelector('#bust').innerHTML = "You Lose!"
      losses++
      document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function sixthHit(){
    document.querySelector('#sixth-draw').style.visibility = "visible"
    document.querySelector('#sixth-draw').innerHTML = sixthDraw;
    document.querySelector('.gameButtonsSix').remove();
    if (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw == 21){
        document.querySelector('#bust').innerHTML = 'You hit 21! Blackjack!'
    } else if (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw < 21){
        document.querySelector('.gameButtonsSeven').style.visibility = "visible"
        document.querySelector('#bust').innerHTML = "Your total is " + (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw)+'! Hit or Stand?'
    }else{
       document.querySelector('#bust').innerHTML = 'You Busted! Your total was ' + (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw)+"!"
       document.querySelector('#bust').style.color = 'red'
       losses++
       document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function standSix(){
    const total = oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw;
    const cputotal = CPUoneDraw + CPUtwoDraw + CPUthirdDraw + CPUfourthDraw + CPUfifthDraw + CPUsixthDraw + CPUseventhDraw;
    document.querySelector('#cpu').style.visibility = 'visible'
    document.querySelector('#total').style.visibility = "visible"
    document.querySelector('#total').innerHTML = "Your Total Was " + total + "! CPU's Total Was " + cputotal
    document.querySelector('#bust').innerHTML = "Youre opponents cards are:";
    document.querySelector('#first-draw').innerHTML = CPUoneDraw;
    document.querySelector('#second-draw').innerHTML = CPUtwoDraw;
    document.querySelector('#third-draw').innerHTML = CPUthirdDraw;
    document.querySelector('#fourth-draw').innerHTML = CPUfourthDraw;
    document.querySelector('#fifth-draw').innerHTML = CPUfifthDraw;
    document.querySelector('#sixth-draw').innerHTML = CPUsixthDraw;
    document.querySelector('#seventh-draw').innerHTML = CPUseventhDraw;
    document.querySelector('#first-draw').style.color = 'black';
    document.querySelector('#second-draw').style.color = 'black';
    document.querySelector('#third-draw').style.color = 'black';
    document.querySelector('#fourth-draw').style.color = 'black';
    document.querySelector('#fifth-draw').style.color = 'black';
    document.querySelector('#sixth-draw').style.color = 'black';
    document.querySelector('#seventh-draw').style.color = 'black';
    if (cputotal > 21){
        document.querySelector('#bust').innerHTML = "You Win! Opponent Busted!"
        wins++
        document.querySelector('.score').innerHTML = wins + '-' + losses
    }else if (total > cputotal){
      document.querySelector('#bust').innerHTML = "You Win!"
      wins++
      document.querySelector('.score').innerHTML = wins + '-' + losses
     }else{
      document.querySelector('#bust').innerHTML = "You Lose!"
      losses++
      document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function seventhHit(){
    document.querySelector('#seventh-draw').style.visibility = "visible"
    document.querySelector('#seventh-draw').innerHTML = seventhDraw;
    document.querySelector('.gameButtonsSeven').remove();
    if (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw + ninethDraw == 21){
        document.querySelector('#bust').innerHTML = 'You hit 21! Blackjack!'
    } else if (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw + ninethDraw < 21){
        document.querySelector('.gameButtonsEight').style.visibility = "visible"
        document.querySelector('#bust').innerHTML = "Your total is " + (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw + ninethDraw)+'! Hit or Stand?'
    }else{
       document.querySelector('#bust').innerHTML = 'You Busted! Your total was ' + (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw + ninethDraw)+"!"
       document.querySelector('#bust').style.color = 'red'
       losses++
       document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function standSeven(){
    const total = oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw;
    const cputotal = CPUoneDraw + CPUtwoDraw + CPUthirdDraw + CPUfourthDraw + CPUfifthDraw + CPUsixthDraw + CPUseventhDraw + CPUeighthDraw;
    document.querySelector('#cpu').style.visibility = 'visible'
    document.querySelector('#total').style.visibility = "visible"
    document.querySelector('#total').innerHTML = "Your Total Was " + total + "! CPU's Total Was " + cputotal
    document.querySelector('#bust').innerHTML = "Youre opponents cards are:";
    document.querySelector('#first-draw').innerHTML = CPUoneDraw;
    document.querySelector('#second-draw').innerHTML = CPUtwoDraw;
    document.querySelector('#third-draw').innerHTML = CPUthirdDraw;
    document.querySelector('#fourth-draw').innerHTML = CPUfourthDraw;
    document.querySelector('#fifth-draw').innerHTML = CPUfifthDraw;
    document.querySelector('#sixth-draw').innerHTML = CPUsixthDraw;
    document.querySelector('#seventh-draw').innerHTML = CPUseventhDraw;
    document.querySelector('#eighth-draw').innerHTML = CPUeighthDraw;
    document.querySelector('#first-draw').style.color = 'black';
    document.querySelector('#second-draw').style.color = 'black';
    document.querySelector('#third-draw').style.color = 'black';
    document.querySelector('#fourth-draw').style.color = 'black';
    document.querySelector('#fifth-draw').style.color = 'black';
    document.querySelector('#sixth-draw').style.color = 'black';
    document.querySelector('#seventh-draw').style.color = 'black';
    document.querySelector('#eighth-draw').style.color = 'black';
    if (cputotal > 21){
        document.querySelector('#bust').innerHTML = "You Win! Opponent Busted!"
        wins++
        document.querySelector('.score').innerHTML = wins + '-' + losses
    }else if (total > cputotal){
      document.querySelector('#bust').innerHTML = "You Win!"
      wins++
      document.querySelector('.score').innerHTML = wins + '-' + losses
     }else{
      document.querySelector('#bust').innerHTML = "You Lose!"
      losses++
      document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function eighthHit(){
    document.querySelector('#eighth-draw').style.visibility = "visible"
    document.querySelector('#eigth-draw').innerHTML = eigthDraw;
    document.querySelector('.gameButtonsEight').remove();
    if (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw + ninethDraw + tenthDraw == 21){
        document.querySelector('#bust').innerHTML = 'You hit 21! Blackjack!'
    } else if (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw + ninethDraw + tenthDraw < 21){
        document.querySelector('.gameButtonsEight').style.visibility = "visible"
        document.querySelector('#bust').innerHTML = "Your total is " + (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw + ninethDraw + tenthDraw)+'! Hit or Stand?'
    }else{
       document.querySelector('#bust').innerHTML = 'You Busted! Your total was ' + (oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw + ninethDraw + tenthDraw)+"!"
       document.querySelector('#bust').style.color = 'red'
       losses++
       document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}
function standEight(){
    const total = oneDraw + twoDraw + thirdDraw + fourthDraw + fifthDraw + sixthDraw + seventhDraw + eighthDraw + ninethDraw;
    const cputotal = CPUoneDraw + CPUtwoDraw + CPUthirdDraw + CPUfourthDraw + CPUfifthDraw + CPUsixthDraw + CPUseventhDraw + CPUeighthDraw + CPUninethDraw;
    document.querySelector('#cpu').style.visibility = 'visible'
    document.querySelector('#total').style.visibility = "visible"
    document.querySelector('#total').innerHTML = "Your Total Was " + total + "! CPU's Total Was " + cputotal
    document.querySelector('#bust').innerHTML = "Youre opponents cards are:";
    document.querySelector('#first-draw').innerHTML = CPUoneDraw;
    document.querySelector('#second-draw').innerHTML = CPUtwoDraw;
    document.querySelector('#third-draw').innerHTML = CPUthirdDraw;
    document.querySelector('#fourth-draw').innerHTML = CPUfourthDraw;
    document.querySelector('#fifth-draw').innerHTML = CPUfifthDraw;
    document.querySelector('#sixth-draw').innerHTML = CPUsixthDraw;
    document.querySelector('#seventh-draw').innerHTML = CPUseventhDraw;
    document.querySelector('#eighth-draw').innerHTML = CPUeighthDraw;
    document.querySelector('#nineth-draw').innerHTML = CPUninethDraw;
    document.querySelector('#first-draw').style.color = 'black';
    document.querySelector('#second-draw').style.color = 'black';
    document.querySelector('#third-draw').style.color = 'black';
    document.querySelector('#fourth-draw').style.color = 'black';
    document.querySelector('#fifth-draw').style.color = 'black';
    document.querySelector('#sixth-draw').style.color = 'black';
    document.querySelector('#seventh-draw').style.color = 'black';
    document.querySelector('#eighth-draw').style.color = 'black';
    document.querySelector('#nineth-draw').style.color = 'black';
    if (cputotal > 21){
        document.querySelector('#bust').innerHTML = "You Win! Opponent Busted!"
        wins++
    }else if (total > cputotal){
      document.querySelector('#bust').innerHTML = "You Win!"
      wins++
      document.querySelector('.score').innerHTML = wins + '-' + losses
     }else{
      document.querySelector('#bust').innerHTML = "You Lose!"
      losses++
      document.querySelector('.score').innerHTML = wins + '-' + losses
    }
}

