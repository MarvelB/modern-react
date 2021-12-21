import { SyntheticEvent } from "react";

const Home = () => {

  const handleClick = (event: SyntheticEvent) => {
    console.log('perra', event)
  }

  const handleClickAgain = (name: string, event: SyntheticEvent) => {
    console.log(`perra ${name}`, event)
  }

  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('maldita', e)}>Click me again</button>
    </div>
  )
};

export default Home;
