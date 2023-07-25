import {useState} from 'react'


const App = () => {
  const [name,setName] = useState('')


  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])  

  const vote = (item) =>{
    item.votes++
    setLanguages([...languages])
  }
  return(
<div>

{
  languages.map((item,index)=>{
    return(
      <div key={index}>
        {item.name}
        {item.votes}
        <button onClick={() => vote(item)}>Add</button>
        </div>
    )
  })
}

</div>

  )
}

export default App;
