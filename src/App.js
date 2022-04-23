import React from 'react'
import img from './Components/dwayne.jpg'


function App() {
  const firstName = "Dwayne";
  const lastName = "Johnson";
  const bioMessage = "I am a retired wrestler and currently an Actor"
  const job = "An actor"  
  const handleName = () =>
    alert(
      `Hi, my name is ${firstName + ' ' + lastName} and i like acting.`
    );
  return (
    <div className="App">
      <profile>
        fullname={firstName + ' ' + lastName},
        biography = {bioMessage},
        profession={job},
        handleName={handleName}
        
        <img src={img} alt="user" onClick={handleName} />
      </profile>

    </div>
  )
}

export default App;