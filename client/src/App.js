
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';
import { searchads } from './service/api';

function App() {

  const[ads,setAd]=useState([]);
 
  console.log(ads);
  console.log(ads);



  const searchHandle = async(e)=>
    {
      const key = e.target.value;
      const result = await searchads(key);
      const adData = result.data;
      console.log(adData);

        setAd(adData);
      }
        
    

  return (
    <div className="App">
      <h2 className='search-app-heading'>Search Ads App</h2>
      <div>
        <input type="text" className='search-ads-box' placeholder='Search Ads' onChange={searchHandle}/>
      </div>
      <div>
      <Card addata={ads}/>
      </div>      
    </div>
  );
}

export default App;
