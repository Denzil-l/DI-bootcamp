import './App.css';
import Exercise from './Expres3';
import UserFavoriteAnimals from './UserFavoriteAnimals';
const myelement = <h1>I love JSX</h1>
const sum = 5 + 5
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};


function App() {
  return (
    <div className="App">
      <h3>Hello World!!</h3>
      {myelement}
      <h2>React is {sum} times better with JSX</h2>

      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals animals={user.favAnimals} />

      <Exercise styles={style_header} />

    </div>
  );
}

export default App;
