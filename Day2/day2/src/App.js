import './App.css';
import Car from './Car';
import Garage from './Garage';
import Header from './Header';
import Cars from './Cars';
function App() {
  return (
    <div className="App">
      <Garage />
      <Car/>
      <Header/>
      <Cars/>
    </div>
  );
}

export default App;
