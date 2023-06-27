const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

const usernames = []
const winners  = []

gameInfo.forEach(element => {
    usernames.push(`${element.username}!`)
});
gameInfo.forEach(element => {
    if(element.score > 5 ){
    winners.push(element.username)
    }
});
console.log(gameInfo.reduce((acc,val)=> acc + val.score, 0))