import { useState, useRef } from 'react';
import './App.css';
import List from './Components/List'
import Form from './Components/Form';




const App = () => {
  const [list, setList] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault()
    const array = [...list]
    array.push(event.target.elements.text.value)
    setList(array)
    event.target.elements.text.value = ''

  }

  const handleDelete = (task) => {
    const updatedList = list.filter((item) => item !== task);
    setList(updatedList);
  }
  return (
    <div className="wrapper">
      <div className="block">
        <h2 className="title">Todo's</h2>
        <List handleDelete={handleDelete} list={list} />
        <Form handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
