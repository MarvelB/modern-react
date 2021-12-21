import { useState } from "react";

const Home = () => {
  const [name, setName] = useState<string>('Mario');
  const [age, setAge] = useState<number>(25);

  const handleClick = () => {
    setName('Luigui');
    setAge(30);
  }

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
};

export default Home;
