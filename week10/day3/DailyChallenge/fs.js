const { get } = require('http')

const fs = require('fs').promises

const getMoves = async () =>{
    let currentPosition = 0
    let moves = await fs.readFile('RightLeft.txt','utf-8')
    moves = moves.split('')
    let i = 0
    do {

        moves[i] == '<' ? currentPosition-- : currentPosition++
        i++
    } while (moves.length != i);
    console.log(`${currentPosition} steps to the ${currentPosition > 0 ? 'right' : 'left'}`)
    currentPosition = 0
    i = 0
    do {

        moves[i] == '<' ? currentPosition-- : currentPosition++
        i++
    } while (currentPosition != -1);
    console.log(`Amount steps = ${i}`)

}

getMoves()

