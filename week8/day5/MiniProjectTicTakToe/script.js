
const level = document.querySelectorAll('.level__button')
const type = document.querySelectorAll('.type__button')
const start = document.querySelector('.start')
const message = document.querySelector('.message')
let userChoiceLevel
let userChoiceXO

level.forEach((element,index) => {
        element.addEventListener('click', ()=>{
            if(index == 0){
                userChoiceLevel = 'easy'
                level[0].style.background = 'rgba(255, 255, 0, 0.7)'
                level[1].style.background = 'rgba(0, 128, 0, 0.7)'
                console.log('x')
            }else{
                userChoiceLevel = 'hard'
                level[1].style.background = 'rgba(255, 255, 0, 0.7)'
                level[0].style.background = 'rgba(0, 128, 0, 0.7)'
                console.log('x')
            }
          
        })
});
type.forEach((element,index) => {
        element.addEventListener('click', ()=>{
            if(index == 0){
                userChoiceXO = 'cross'
                type[0].style.background = 'rgba(255, 255, 0, 0.7)'
                type[1].style.background = 'rgba(0, 128, 0, 0.7)'
            }else{
                userChoiceXO = 'circle'
                type[1].style.background = 'rgba(255, 255, 0, 0.7)'
                type[0].style.background = 'rgba(0, 128, 0, 0.7)'
            }
        })
});
start.addEventListener('click', ()=>{
    let firstTurn = Math.floor(Math.random() * 2)
    userChoiceLevel == undefined ? null : userChoiceLevel == 'easy' ? easyMode(userChoiceXO,firstTurn) : hardMode(userChoiceXO,firstTurn)
    
})

const Win = (space) => {
  switch (true) {
    case space[0] == space[1] && space[1] == space[2]:
      return true;
    case space[3] == space[4] && space[4] == space[5]:
      return true;
    case space[6] == space[7] && space[7] == space[8]:
      return true;
    case space[0] == space[4] && space[4] == space[8]:
      return true;
    case space[2] == space[4] && space[4] == space[6]:
      return true;
    case space[0] == space[3] && space[3] == space[6]:
      return true;
    case space[1] == space[4] && space[4] == space[7]:
      return true;
    case space[2] == space[5] && space[5] == space[8]:
      return true;
    default:
      return false;
  }
};




const computerEasyMode = (game) =>{

    const addSign = (randomium) => {
        game.Grid[randomium].innerHTML = `<img src="./source/${game.computersign}.svg" alt="">`;
        game.moves++
        game.currentMove = 0
        game.space[randomium] = game.computersign
        let win = Win(game.space)

        game.win = win
      };
    let check = true
    do {
        let randomium = Math.floor(Math.random() * game.space.length) 
        if (!isNaN(game.space[randomium])){
            addSign(randomium)
            check = false
        }   
    } while (check);

}
const userMove = (game) => {
    return new Promise((resolve) => {
      game.currentsign = game.usersign;
  
      const handleElementClick = (element, index) => {
        
  
        element.addEventListener('click', addSign);
      };
  
      game.Grid.forEach((element, index) => {
        game.space[index] == index ? handleElementClick(element, index) : null;
      });

    });
  };
const computerMove = (game,mode) =>{
    game.currentsign = game.computersign
    mode == 'easy' ? computerEasyMode(game) : computerhardMode(game)
}
const easyMode = (sign,firstTurn) => {
    start.innerText = 'ReStart'
    let usersign = sign
    let computersign = usersign == 'circle' ? 'cross' : 'circle'
    let game = {
        space : [0,1,2,3,4,5,6,7,8],
        moves : 0,
        win : false,
        currentMove : firstTurn,
        Grid : document.querySelectorAll('.Grid__item'),
        usersign: usersign,
        computersign: computersign,
        currentsign: ''

    }
const play = async () =>{
    do {
        if(game.currentMove == 0){
            await userMove(game)
            game.Grid.forEach(element => {
                element.removeEventListener('click', addSign);
              });
        }else{
            computerMove(game,'easy')
        }
        // game.currentMove == 0 ? await userMove(game) : computerMove(game,'easy')
    } while (game.moves < 9 && game.win == false);
    game.currentsign == game.usersign ? message.innerText = 'You win' : 'You lose'
}
   play()
    
}






const hardMode = (sign) => {
    const Grid = document.querySelectorAll('.Grid__item')
    start.innerText = 'ReStart'
console.log('hard mode')
}
