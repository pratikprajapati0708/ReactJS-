import './App.css';
import ConditionalRendering from './ConditionalRendering';
import Form from './Form';
import Functionasprops from './Functionasprops';
import Login from './Login';
import Student from './Student';
import Users from './Users';
import { useState } from 'react';
import NewStyle from './NewStyle';
import ReactBootstrap from './ReactBootstrap';

function App() {
  const [data, updateData] = useState("Welcome to React");
  const [count, setCount] = useState(0);

  function setdata() {
    updateData("Hey There !");
  }
  function updateCount() {
    setCount(count + 1);
  }
  const [namedata, setnamedata] = useState(null);
  function getData(event) {
    setnamedata(event.target.value);
  }
  const [print, setprint] = useState(false);
  const [studentdata, updateStudentdata] = useState("Pratik");
  const [toggle, settoggle] = useState(false);
  function testingalert(){
    alert("Hello from React");
  }
  return (
    <div className="App">
      {/* Use-States */}

      <h1>{data}</h1>
      <button onClick={setdata}>Click</button>
      <button onClick={updateCount}>Counter</button>
      <h2>{count}</h2>

      {/* Getting input text box value  */}
      {
        print ? <h2>{namedata}</h2> : null
      }
      <input type='text' onChange={getData}></input>
      <button onClick={() => setprint(true)}>Print data</button>
      <br></br>

      {/* Props  */}
      <Student name={studentdata} />
      <button onClick={() => updateStudentdata("Naam to suna hi hoga")}>Update the Student Data</button>

      {/* React Hide and Show using Toggle */}
      <div>
        {
          toggle ? <h2>Kya haal chaal?</h2> : null
        }
      </div>
      <button onClick={() => settoggle(!toggle)}>Toggle</button>

      <Form />
      <ConditionalRendering />
      <Login/>
      <Functionasprops data={testingalert}/>
      <NewStyle/>
      <ReactBootstrap/>
    </div>
  );
}

export default App;
