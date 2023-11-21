import './App.css';
import React from 'react'
import ConditionalRendering from './ConditionalRendering';
import Form from './Form';
import Functionasprops from './Functionasprops';
import Login from './Login';
import Student from './Student';
import { useState } from 'react';
import NewStyle from './NewStyle';
import ReactBootstrap from './ReactBootstrap';
import ArrayMap from './ArrayMap';
import NestedArraymap from './NestedArraymap';
import ReactFragment from './ReactFragment';
import LiftingStateUp from './LiftingStateUp';
import ComUseReff from './ComUseReff';
import Users from './Users';
import ControlledComponent from './ControlledComponent';
import UncontrolledComponent from './UncontrolledComponent';
import HighOrderComponent from './HighOrderComponent';
import { BrowserRouter, Navigate, NavigationType, Route, Routes } from 'react-router-dom';
import Home from './ReactRouter/Home';
import About from './ReactRouter/About';
import Navbar from './ReactRouter/Navbar';
import Page404 from './ReactRouter/Page404';
import RouteParams from './ReactRouter/RouteParams';

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
  function testingalert() {
    alert("Hello from React");
  }
  function parentalert(data) {
    alert(data.name);
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
      <Login />
      <Functionasprops data={testingalert} />
      <NewStyle />
      <ReactBootstrap />
      <ArrayMap />
      <NestedArraymap />
      <useMemoHook />
      <LiftingStateUp alert={parentalert} />
      <ComUseReff />
      <ControlledComponent />
      <UncontrolledComponent />
      <HighOrderComponent />
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path='/*' element={<Page404/>}></Route> */}
          <Route path='/*' element={<Navigate to='/'/>}></Route>
          <Route path='/users/:name' element={<RouteParams/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;