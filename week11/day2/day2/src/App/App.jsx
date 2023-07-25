import { useState } from 'react'



const App = () => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ])
  const increaseVote = (index) => {
    setLanguages(languages => languages.map((l, i) => {
      if (i == index) {
        l.votes++
        return l
      } else {
        return l
      }
    }))
  }
  return (
    <div>
      <ul>
        {languages.map((element, index) => (
          <li key={index}>
            {element.votes}
            {element.name}
            <button onClick={() => increaseVote(index)}>Click Here</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
