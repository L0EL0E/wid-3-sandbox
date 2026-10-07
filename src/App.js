export default function App() {

function handleClick(){
  console.log('Ich wurde geklickt');
}

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
      </button>*/}
      <input onChange={(e) => {console.log(e.target.value)}} 
        type='text'>
      </input>
    </div>
  );
}