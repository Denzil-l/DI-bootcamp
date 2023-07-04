//Exercise 1
// const GIF = async () =>{
//     try {
        
    
//     let response = await fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//     if(response.status == 200){
//         console.log(response)
//     }else{
//         throw new Error(`Status: ${response.status}`)
//     }
// } catch (error) {
//         console.log(error)
// }
// }

// GIF()

// //Exercise 2

// const GetGIFS = async () =>{
//     try {
//         let response = await fetch('https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//         if(!response.ok || response.status != 200){
//             throw new Error('Okey is not oKEy')
//         }
//         let data = await response.json()
//         console.log(data)
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// GetGIFS()

//Exercise 3

// const GetStarWars = async (url) =>{
//     try {
        
    
//     let response = await fetch(url)
//     if(response.ok && response.status == 200){
//         let data = await response.json()
//         console.log(data)
//     }else{
//     throw new Error("Maybe okey is not okey or maby status is not status. Don't care don't know")

//     }
// } catch (error) {
//         console.log(error)
// }
// }

// GetStarWars("https://www.swapi.tech/api/starships/9/")


//Exercise 4

// In general, Async Await does a nice job. This stops the program and forces it to wait for the result of await part, and only then continue. So the result will be:
// calling
//waiting 2 seconds
// resolved