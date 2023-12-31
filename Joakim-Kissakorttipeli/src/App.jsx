import Card from './components/Card'
import './app.css'
import { useState } from 'react'
import PlayButton from "./components/PlayButton";
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

const createCard = index =>({
  image: "http://placekitten.com/120/100?image=" + index,
   stats: [{name:"cuteness", value: getRandomInt(1, 999)},
          {name:"speed" , value: getRandomInt(1, 999)},
          {name: "weight" , value: getRandomInt(1, 999)}],
  id:crypto.randomUUID()
});

const deck = Array(16).fill(null).map((_,index) => createCard(index));
const half = Math.ceil(deck.length / 2);
const dealCards =()=>{
  shuffle(deck);
  return{
    player: deck.slice(0,half),
    opponent: deck.slice(half)
  };
};

function shuffle(array){
  for(let i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j],array[i]];
  }
  return array;
}

export default function App()
{


const[result, setResult] = useState("");
const [cards, setCards] = useState(dealCards);
const [gameState, setGameState] = useState("play");
const [SelectedStat, setSelectedStat] = useState(0);
function compareCards(){
  const playerStat = cards.player[0].stats[SelectedStat];
  const opponentStat = cards.opponent[0].stats[SelectedStat];

  if(playerStat.value === opponentStat.value){
    setResult("draw");
  }
  else if(playerStat.value > opponentStat.value){
    setResult("win");
  }else{
    setResult("loss");
  }
  setGameState("result");
}
function nextRound(){
  setCards(cards =>{
    const playedCards = [{...cards.player[0]}, {...cards.opponent[0]}];
    const player = cards.player.slice(1);
    const opponent = cards.opponent.slice(1);
    if(result === "draw"){

      return{
        player,
      opponent
      };
    }
    if(result === "win"){
      return{
        player: [...player, ...playedCards],
         opponent
      }
    }
    if(result === "loss"){
      return{
        player,
        opponent: [...opponent, ...playedCards]
      }
    }
    return cards;
  })
  setGameState("play");
  setResult("");
}

  return(
    <>
    
    <h1>Hello world!</h1>

      <div className="game">

        <ul className="card-list">
          {cards.player.map((pCard, index) =>(

         <li className="card-list-item player" key={pCard.id}>
          <Card card={index === 0 ? pCard : null} 
          handleSelect={statIndex => gameState === "play" && setSelectedStat(statIndex)}
          SelectedStat={SelectedStat}
          />
        </li>

          ))
              }
        </ul>
          

      <div className="center-area">
        <p> {result || "Press the button"}</p>
        {
           gameState === "play" ?
           (<PlayButton text={"Play"} handleClick={compareCards} />)
           :
           (<PlayButton text={"Next"} handleClick={nextRound} />)
        }
        
      </div>

      <ul className="card-list opponent">
          {cards.opponent.map(oCard =>(

         <li className="card-list-item opponent" key={oCard.id}>
          <Card card={oCard}/>
        </li>

          ))
              }
        </ul>  

      
    </div>
    
   </>
   
  
  );
}