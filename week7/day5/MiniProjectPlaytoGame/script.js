const playTheGame = () =>{
    if(confirm('Do you want to play the game?')){
        let userAnswer = Checker()
        let computerNumber = Math.floor(Math.random() * 11)
        console.log(computerNumber)
        compareNumbers(userAnswer,computerNumber)
    }
    else{
        alert(`No problem, Good by`)
    }
}
function compareNumbers(userNumber,computerNumber) {
    let i = 0
    for (i = 0; i < 4; i++) {
        if(i == 3){
            alert('Sorry, not this time')
            break
        }
        else if (userNumber > computerNumber) {
            alert('Your number > than computer number. Enter again')
            userNumber = Checker()
        }else if(userNumber < computerNumber){
            alert('Your number < than computer number. Enter again')
            userNumber = Checker()
        }else{
            alert('You did it') 
            break
        }      
    }
    
   
}
const Checker = () =>{
    let userAnswer
    do {
        userAnswer = prompt('Enter the number between 0-10')
    } while ((isNaN(+userAnswer) == true) || +userAnswer > 10 || +userAnswer < 0 || userAnswer == '');
    return userAnswer
}