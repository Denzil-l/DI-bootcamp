let response = prompt('Please Enter your your list of words with comma between each word')
response = response.split(',')
let biggestWord = 0
for (let i = 0; i < response.length; i++) {
    if(response[i].length > biggestWord){
        biggestWord = response[i].length
    }
    
}
let line = ''
for (let i = 0; i < biggestWord + 4; i++) {
    line += '*'
}
console.log(line)
for (let i = 0; i < response.length; i++) {
    let word = response[i]
    if( response[i].length < biggestWord){
        for (let j = 0; j < biggestWord - response[i].length; j++) {
            word += ' '
        }
    }
    console.log(`* ${word} *`)
    
}
console.log(line)
