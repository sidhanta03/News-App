import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Component/Navbar';
import NewsApp from './Component/Newsapp';

function App() {
  return (
    <div className="App">
     <Navbar />
     <NewsApp />
    </div>
  );
}

export default App;
