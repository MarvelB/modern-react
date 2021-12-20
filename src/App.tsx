import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  const title = 'Welcome to the new blog';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
