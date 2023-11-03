import logo from './logo.svg';
import './App.css';


import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';


function App() {
   
 const finparent=(p)=>{
    alert('Hello From Parent' +p)
 }

  return (
    <div className="App">
    return <ImageSlider slides={SliderData} />;

    </div>
  );
}

export default App;
