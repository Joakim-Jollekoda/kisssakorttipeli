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
  const playerStat = playerCard.stats[0];
  const opponentStat = opponentCard.stats[0];

  let result = "";

  if(playerStat.value === opponentStat.value){
    result = "draw";
  }
  else if(playerStat.value > opponentStat.value){
    result = "win";
  }else{
    result = "loss";
  }
  console.log(result);
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