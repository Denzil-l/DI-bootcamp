const checkAnagram = (str1,str2) =>{
    str1 = str1.toLowerCase().split('').sort().join('').trim()
    str2 = str2.toLowerCase().split('').sort().join('').trim()
    console.log(str1)
    console.log(str2)
    return str1 == str2 ? true : false
    
}

console.log(checkAnagram('The Morse Code','Here come dots'))