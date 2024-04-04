import React from "react";
import Banner from '../composants/home/banner'
import DisplayCards from "../composants/home/displaycard"
import "../pages/Home.css"

function Home() {
  return (
    <div>  
        <Banner />
        <DisplayCards />    
    </div>
  );
}

export default Home;