import {useState} from "react";

export default function App() {
  const [counter, setCounter] = useState(0); //Hook

  function handleClick(){
    console.log('Ich wurde geklickt');
}

//let zähler = 0;

  return (
    <div className="App">
      {/*<button
        id='meinButton' onClick={handleClick}>
        Klick mich
      </button>
      <button 
        id='meinButton2' 
        onClick={() => {console.log('Ich wurde auch geklickt!')}}> 
        Klick mich auch
      </button>
      <input onChange={(e) => {console.log(e.target.value)}} 
        type='text'>
      </input>*/}
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
        >
          Like
        </button>
        <p>{counter}</p>
    </div>
  );
}