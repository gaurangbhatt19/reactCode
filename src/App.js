import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import faker from "faker";
function App() {
  return (
    <div className="App">
      <Card image={fake.image.avatar()} name={faker.name.firstName()} designation={faker.name.jobTitle()}>
        <button class="button">Yes</button>
        <button class="button button3">No</button></Card>
      <Card />
    </div>
  );
}

export default App;
