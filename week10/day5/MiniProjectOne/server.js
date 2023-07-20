const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios');

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');


let Parser = require('rss-parser');
let parser = new Parser();

app.get('/', async (req, res) => {
  try {
    const posts = await parser.parseURL('https://thefactfile.org/feed/');
    console.log(posts.items)
    res.render('index', { posts: posts.items });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/search', async (req, res) => {
  try {
    const posts = await parser.parseURL('https://thefactfile.org/feed/');
    const allCategories = posts.items.map(post => post.categories);
    const flattenedCategories = [...new Set(allCategories.flat())]
    res.render('search', { posts: posts.items, categories: flattenedCategories });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.post('/search/title', async (req, res) => {
  try {
    let posts = await parser.parseURL('https://thefactfile.org/feed/');
    posts = posts.items;
    const chosenPost = posts.find(post => post.title === req.body.title);
    res.send(chosenPost)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.post('/search/category', async (req, res) => {
  try {
    console.log(req.body)
    let posts = await parser.parseURL('https://thefactfile.org/feed/');
    posts = posts.items
    const chosenPosts = posts.filter(post => post.categories.includes(req.body.category));

    console.log(chosenPosts.length)
    res.send(chosenPosts)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000,()=>console.log('Server is running on port 3000'))