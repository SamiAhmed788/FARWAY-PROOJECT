import './App.css';
import Packagelist from './Pakaginglist/pakaginglist';
import Form from './form/form';
import Logo from './logo/logo';
import Stats from './stats/Stats';
import { useState } from 'react';
function App() {
  const [count , setCount] = useState(0)
const [itemArr, setitemArr ] =  useState(
  [
    {
      quantity: 4,
      Naam: "bags",
      packed: false
    },
    {
      quantity: 2,
      Naam: "noddles",
      packed: false
    },
    {
      quantity: 6,
      Naam: "blackcoffe",
      packed: false
    },
    {
      quantity: 1,
      Naam: "airbuds",
      packed: false
    },
    {
      quantity: 10,
      Naam: "tofiya",
      packed: false
    }
  ]
)





  return (
    <>
  <Logo/>
  <Form setitemArr={setitemArr} itemArr={itemArr} />
<Packagelist setitemArr={setitemArr} itemArr={itemArr} setcount={setCount} count={count}/>
<Stats  itemArr={itemArr} setcount={setCount} count={count}/>

    </>
  );
}

export default App;
