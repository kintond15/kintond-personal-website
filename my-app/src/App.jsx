import logo from './logo.svg';
import Navbar from "/Users/kintonduong/Desktop/personal-website/my-app/src/Components/Navbar/navbar"
import Home from "/Users/kintonduong/Desktop/personal-website/my-app/src/Sections/home"
import ImageSlider from "/Users/kintonduong/Desktop/personal-website/my-app/src/Sections/imageslider.js";
// import {ReactTyped} from "react-typed"
import './App.css';
import '/Users/kintonduong/Desktop/personal-website/my-app/src/Sections/imageslider.css';

const App = () => {
  const slides = [
    {url:'./me1.png'},
    {url:'./me2.jpg'},
    {url:'./me3.png'},
  ];
  const containerStyles = {
    width: '500px',
    height: "280px",
    margin: "0 auto",
  };

  return (
  

        <div class = "homepage">
          <Navbar/>
          <Home/>
          <div style = {containerStyles}>
          <ImageSlider slides = {slides}/>
          </div>
        </div>
       

  );
}

export default App;
