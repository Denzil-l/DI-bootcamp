// // console.log(fetch("https://api.artic.edu/api/v1/artworks/4"))
// console.log("Starting ...")

// const displayArtwork = (art) => {
//     const {title, artist_title : artist} = art.data
//     const paragraph = document.querySelector("#info-art");
//     paragraph.textContent = `The painting is named 
//     ${title} by the artist ${artist}`;
// }

// const displayError = (error) => {
//     const paragraph = document.querySelector("#info-art");
//     paragraph.textContent = `We have a problem ${error}`;
// }
// const getArtwork = () => {
//     console.log("Working ...")
//     fetch("https://api.artic.edu/api/v1/artworks/14572")
//         .then((response) => {
//             console.log(response);
//             if(response.ok === true){
//                 return response.json()
//             } else {
//                 throw new Error("Wrong artwork")
//             }
//         })
//         .then((obj) => {
//             displayArtwork(obj);
//         })
//         .catch((error)  => {
//             displayError(error);
//         });
//     console.log("Work Done ...")
// }



// getArtwork()

// console.log("Starting ...")
// const addArticle = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);

//     const objBody = {
//         method: "POST",
//         body: JSON.stringify(Object.fromEntries(data)),
//         headers: {"Content-type": "application/json; charset=UTF-8"}
//     }

//     console.log("Working ...")
//     fetch("https://jsonplaceholder.typicode.com/posts", objBody)
//         .then((response) => {
//             console.log(response);
//             if(response.ok === true){
//                 return response.json()
//             } else {
//                 throw new Error("Wrong post")
//             }
//         })
//         .then((obj) => {
//             console.log(obj);
//         })
//         .catch((error)  => {
//             console.log(error);
//         });
//     console.log("Work Done ...")
// }

// const formArticle = document.querySelector("form");
// formArticle.addEventListener("submit", addArticle);

const getRandomCategory = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/categories');
      if (response.status !== 400 && response.ok) {
        const categories = await response.json();
        return categories;
      } else {
        throw new Error('Bad request');
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const getChuckNorrisJoke = async () => {
    const categories = await getRandomCategory();
    if (categories) {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const url = `https://api.chucknorris.io/jokes/random?category=${randomCategory}`;
      try {
        const response = await fetch(url);
        if (response.ok) {
          const joke = await response.json();
          return joke;
        } else {
          throw new Error('Bad request');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  getChuckNorrisJoke()
    .then(result => console.log(result.value));


    let goodGrades = 110;

    let endSemester = new Promise((resolve, reject) => {
        if (goodGrades > 90) {
            resolve("Computer");
        } else if (goodGrades >= 80) {
            resolve("Phone");
        } else {
            reject("I won't get the gift");
        }
    })
    
    const checkRequest = async () => {
        try {
            console.log('test 2');
            let gift = await endSemester;
            console.log(`I got an amazing gift : A ${gift}`);
        } catch (error) {
            console.log(error)
        }
      
    }
    
    console.log('test 1');
    checkRequest();
    console.log('test 3');


    const fetchSunRise = async (endpoint) => {
        const response = await fetch(endpoint);
        console.log("response", response)
        let data = await response.json();
        console.log("data", data);
        let sunrise = data.results.sunrise;
        console.log(`The hour of the sunrise in Tel Aviv is: ${sunrise}`);
    }
    
    fetchSunRise("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818");