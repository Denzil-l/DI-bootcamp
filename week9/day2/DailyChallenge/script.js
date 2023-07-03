// //DailyChallenge 1

// const makeAllCaps = (arr) => new Promise((resolve,reject)=>{
//         (arr.reduce((res,el) => res && (typeof(el) == 'string') )? true : false) ? resolve(arr.map(e => e.toUpperCase())) : reject(new Error('One of the elements in your array is not a strign '))
//     })

// const sortWords = (arr) => new Promise((resolve,reject)=>{
//         arr.length > 4 ? resolve(arr.sort()) : reject(new Error('Your array has more than 4 elements'))
//     })



// makeAllCaps(['x','y','x'])
// .then(result => sortWords(result))
// .then(result => console.log(result))
// .catch(error => console.log(error.message))

//DailyChallenge 2


const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`


const toJs = () => new Promise((resolve,reject) =>{
    morse.length != 0 ? resolve(JSON.parse(morse)) : reject(new Error('Your variable is EMPTY'))
})
const toMorse = (morseJS) => new Promise((resolve,reject) =>{
    let userAnswer = prompt('Enter your word or sentence').toLocaleLowerCase()
    let x = userAnswer.split('').sort().join('').trim().split('')
    console.log(x)
    x.every(e => morseJS.hasOwnProperty(e)) ? resolve(userAnswer.split('').map(e => {
        if(morseJS.hasOwnProperty(e)){
            return morseJS[e]
        }
    })) : reject(new Error('Some symbols which you entered is not exist in our world.....'))
})

const joinWords = (morseTranslation) =>{ 
    let str = morseTranslation.join('<br>')
    document.body.innerHTML = str
    console.log(str)
}

toJs()
.then(result => toMorse(result))
.then(result => joinWords(result))
.catch(error => document.body.innerHTML =(error.message))