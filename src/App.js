import './App.css';
import {useFetch} from './countryData';
import { useEffect, useState } from 'react';
import Followers from './Followers';
const url ='https://api.github.com/users/john-smilga/followers?per_page=100'
function App() {
  const {isLoading,data} = useFetch(url);
  const [page,setPage] = useState(0);
  const [followers,setFollowers] = useState([]);
  useEffect(()=>{
    if(!isLoading)
    setFollowers(data[page])
  },[isLoading,page])
  const handlePage=(index)=>{
    setPage(index)
  }
  function prevBtn(){
    setPage((oldpage)=>{
     let prevpage = oldpage - 1;
     if(prevpage < 0){
        prevpage = data.length -1;
     }
     return prevpage;
    }
    )
 }
  function nextBtn(){
     setPage((oldpage)=>{
      let nextpage = oldpage + 1;
      if(nextpage > data.length - 1){
         nextpage = 0;
      }
      return nextpage;
     }
     )
  }
  return (
    <div className="App">
      <h1>{isLoading?'Loading...':'Data'}</h1>
      <div className='container'>
      {
        followers.map(item=>{
          return(
            <Followers key={item.id} {...item} />
          )
        })
      }
      </div>
      { !isLoading && <div className='btn-container'>
        <>
        <button className='page-btn' onClick={prevBtn}>prev</button>
        {
       data.map((items,index)=>{
        return(  
          <button className={index===page?'page-btn active':'page-btn'} key={index}
          onClick={()=>{handlePage(index)}}>{index+1}</button>
          )
       })
      }
       <button className='page-btn' onClick={nextBtn}>next</button>
       </>   
  </div>
}

    </div>
  );
}

export default App;
