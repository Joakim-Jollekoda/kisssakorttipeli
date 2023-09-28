import Card from './components/Card'
import './app.css'

const playerCard = {
  image:"http://placekitten.com/120/100",
  stats: [{name:"cuteness", value:83},
          {name:"speed" , value: 51}
                                      ]
}

export default function App(){
  return(
    <>
    
    <h1>Hello world!</h1>
    <Card card={playerCard}/>

    </>
    
  

  );
}