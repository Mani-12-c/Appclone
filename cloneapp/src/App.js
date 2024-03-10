import React from 'react'
// import Footer from './components/footer/footer'
import Header from './components/header/Header'
import TabOptions from './components/tabOptions/TabOptions'
import { useState } from 'react'


const App = () => {

  const [activeScreen,setActiveScreen] = useState("diningout")

  return (
    <div>
      <Header/>
      <TabOptions/>
      {
        getCurrentScreen(activeScreen)
      }
      {/* <Footer/> */}
    </div>
    
  )
}

const getCurrentScreen =(option)=>{
    switch(option){
      // case "diningout":return "Dining Out";
      case "Delivery":return "Delivey";
      case "NightLife":return "NightLife";
      // default :return "Dining Out"
    }
}

export default App