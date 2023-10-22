
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Body from './components/Body/Body';
import Filter from './components/Filter/Filter';
import List from './components/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { getEmailData } from './Redux/action';

function App() {
  let data=useSelector((store)=>store.emailData)

  let email=useSelector((store)=>store.body)
  const Dispatch=useDispatch()
  

  const [Data, setData] = useState([]);


  

  

  useEffect(() => {
    const getEmails=()=>{
      axios.get("https://flipkart-email-mock.vercel.app/")
      .then( (res)=>Dispatch(getEmailData(res.data.list)) )
      .catch((err)=>{console.log(err)});
    } 
    getEmails() 
  
  }, [])
 
  useEffect(() => {
    setData(data);

  },[])
    
  
  

 console.log(email)
  return (
    <div className="App">
     <Filter setData={setData}/>
    <div className='container'>
      <div>{data?.map((elm,i)=>( <List elm={elm} key={i}/>))} </div>

     {email?<Body/>:""}
    </div>

    </div>
  );
}

export default App;
