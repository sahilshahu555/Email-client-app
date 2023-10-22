
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Body from './components/Body/Body';
import Filter from './components/Filter/Filter';
import List from './components/List/List';

function App() {
  const [state, setState] = useState(true);
  const [data, setData] = useState([]);

 const getEmails=()=>{
   axios.get("https://flipkart-email-mock.vercel.app/")
   .then( (res)=>{setData(res.data.list);})
   .catch((err)=>{console.log(err)});
 }  

  useEffect(() => { getEmails() }, [])
 
  return (
    <div className="App">
     <Filter/>
    <div className='container'>
      <div>{data?.map((elm)=>( <List elm={elm}/>))} </div>

     {state?<Body/>:""}
    </div>

    </div>
  );
}

export default App;
