import Card from './components/Card'
import './app.css'
import { useState } from 'react'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min +1)+min)

const playerCard = {
  image:"http://placekitten.com/120/100",
  stats: [{name:"cuteness", value: getRandomInt(1, 999)},
          {name:"speed" , value: 51}
                                      ]
}

const opponentCard = {
  image:"http://placekitten.com/120/100",
  stats: [{name:"cuteness", value:63},
          {name:"speed" , value: 73}
                                      ]
}

export default function App()
{


const[result, setResult] = useState("");

function compareCards(){
  const playerStat = playerCard.stats[0];
  const opponentStat = opponentCard.stats[0];



  if(playerStat.value === opponentStat.value){
    setResult("draw");
  }
  else if(playerStat.value > opponentStat.value){
    setResult("win");
  }else{
    setResult("loss");
  }

}

  return(
    <>
    
    <h1>Hello world!</h1>
      <div className="game">
      <Card card={playerCard}/>
      <div className="center-area">
        <p> {result || "Press the button"}</p>
        <button onClick={compareCards} type="button">Play</button>
      </div>
      <Card card={opponentCard}/>
    </div>
    
   </>
   
  
  );
}