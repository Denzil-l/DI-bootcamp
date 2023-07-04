// //Exercise 1
// // `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=${limit}&offset=${offset}`

// //api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// const GetRandomGif = async (url) =>{

// try {
//     response = await fetch(url)
//     if(response.ok && response.status == 200){
//         const data = await response.json()
      
//         const src = data.data.images.fixed_height.webp
//         document.body.innerHTML += `<img src="${src}" alt="">`
//     }
// } catch (error) {
//     console.log(error)
// }
// }


// GetRandomGif('https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')


//Exercise 2

//==SEQUENTIAL START==
//starting slow promise
//slow promise is done
//slow
//starting fast promise
//fast promise is done
//fast


//Exercise 3
// ==CONCURRENT START with await==
// starting slow promise
// starting fast promise
// fast promise is done
// slow promise is done
// slow
// fast
// 1
// 2
// 3
//I spent a lot of time and still don't unserstand why it works so....



//Exercise 4
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];
  
  const getData = async function() {
    try {
      const responses = await Promise.all(urls.map(async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      }));
  
      const [users, posts, albums] = responses;
  
      console.log('users', users);
      console.log('posts', posts);
      console.log('albums', albums);
    } catch (error) {
      console.log('ooooooops', error);
    }
  };
  
  getData();
  