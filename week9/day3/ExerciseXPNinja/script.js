// `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=${limit}&offset=${offset}`

//api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// //Exercise 1

// const form = document.forms[0]


// form.addEventListener('submit', async(e)=>{
//     e.preventDefault()
//     const input = form.elements.category.value
//     try {
//         response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${input}`)
//         if(response.ok && response.status == 200){
//             const data = await response.json()
//             const src = data.data[0].images.original.webp
//             document.body.innerHTML += `<img src="${src}" alt="">`
//         }
//     } catch (error) {
//         console.log(error)
//     }
// })

//Exercise 2


//==CONCURRENT START with Promise.all==
//starting slow promise
//starting fast promise
//fast promise is done
//slow promise is done
//slow
//fast

//Exercise 3

// starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is done
// slow

//Exercise 4


// starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is done
// slow

