
import { useEffect, useState } from 'react';
import './App.css';
import Add from './pages/Add';
import Results from './pages/Results';



function App() {

  let all = [{ Name: 'Ankit', Amount: 789 }, { Name: 'Narayan', Amount: 365 }]
  let [resultarr, updateResultArr] = useState()
  let [results, updateResults] = useState(true)

  // useEffect(()=>{
  // console.log("---><<",results)
  // console.log("results array",resultarr)
  // },results/sss)

  return (
    <div className='app'>
      <div className="add">

        {results ?
          <Add arr={all} updateResultArr={updateResultArr} updateSwitchPage={updateResults} />
          :
          <Results resultarr={resultarr} />
        }
      </div>
    </div>
  );
}

export default App;
