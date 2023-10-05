import Card from './components/Card'
import './app.css'

const playerCard = {
  image:"http://placekitten.com/120/100",
  stats: [{name:"cuteness", value:83},
          {name:"speed" , value: 51}
                                      ]
}

const opponentCard = {
  image:"http://placekitten.com/120/100",
  stats: [{name:"cuteness", value:63},
          {name:"speed" , value: 73}
                                      ]
}

export default function App(){

function compareCards(){
  console.log("button clicked!");
}

  return(
    <>
    
    <h1>Hello world!</h1>
    <div className="game">
    <Card card={playerCard}/>
    <button onClick={compareCards} type="button">Play</button>
    <Card card={opponentCard}/>
</div>
    
   </>
   
  

  );
}