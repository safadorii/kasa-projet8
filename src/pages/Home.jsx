import React from "react";
import Banner from '../composants/banner'
import DisplayCards from "../composants/displaycard"
import "../Assets/css/Home.css"
import banner from "../Assets/images/Mask Group.png"

function Home() {
  return (
    <div>  
        <Banner 
        title="Chez vous, partout et ailleurs"
        img={banner}/>
        <DisplayCards />    
    </div>
  );
}

export default Home;