import { useEffect, useState } from 'react';
import './App.css';
import data from './Components/superheroes.json'
import { Card } from './Components/Card';
const Total = (props) => {
  return (
    <>
      <h2>Your total score is: {props.score}</h2>
      <button onClick={props.reset}>Reset</button>
    </>
  )
}

const App = () => {
  let x = localStorage.getItem('topscore')
  console.log(x)

  if (!x) {
    x = 0
    console.log(x)
  }
  const [herose, setHeroes] = useState(data.superheroes)
  const [score, setScore] = useState(0)
  const [topscore, setTopscore] = useState(x)
  const [cardsclicked, setCards] = useState([])
  const [gamefinished, setFinish] = useState(false)

  const IncreaseScore = (id) => {
    if (!gamefinished) {
      if (!cardsclicked.includes(id)) {



        let x = score + 1;
        setScore(x);
        if (topscore <= x) {
          setTopscore(x);
        }
        let y = topscore + 1
        localStorage.setItem('topscore', JSON.stringify(y))

        const array = [...cardsclicked]
        array.push(id)
        console.log(array)

        setCards(array)
        RandomHeroes()

      } else {
        setFinish(true)
      }
    }
  }
  const RandomHeroes = () => {
    const array = [...herose];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setHeroes([...array])
  }
  const Reset = () => {
    setCards([])
    setScore(0)
    setFinish(false)
  }

  useEffect(() => {
  }, [herose]);



  return (
    <>
      <header>
        <h1>SuperHeroes Memory Game</h1>
        <div className="score">
          <span id="score">Score: {score}</span>
          <span id="topscore">TopScore: {topscore}</span>
        </div>
      </header>
      <div className="block">
        Get point by clicking on an image but don't click on any more than once!
      </div>
      <div className="result">
        <Total score={score} reset={Reset} />
      </div>
      <div className="container">
        {
          herose.map(item => (
            <Card data={item} handleClick={IncreaseScore} key={item.id} />
          ))
        }
      </div>
    </>
  );
}

export default App;
