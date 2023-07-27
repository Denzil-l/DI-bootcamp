const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json())

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});
app.post('/api/world',(req,res)=>{
    const data = req.body.value

    res.send(`I recived your post and now I am thinking about what exactly do you want from me. You are a human, and I am a server....This message:(${data}) is nothin for me`)
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});