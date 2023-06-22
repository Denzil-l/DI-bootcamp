const beer = () =>{
    let beer = 99
    let userNumber = +prompt('Enter your nymber which less than 99 and more than 0')
    if (userNumber == 1) {
        console.log('Take 1 down, pass it around')
        beer - userNumber
    }
    do {
        console.log(`we have now ${beer} bottles`)
        userNumber++
        beer-=userNumber
        console.log(`Take ${userNumber} down, pass them around
        `)

    } while (beer > 0);
    console.log('0 bottle of beer on the wall')
}
beer()