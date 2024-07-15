
import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';

const Newsboard = ({link}) => {
  const[data,setData]=useState([]);
  const key= "03fc71963a284593b7996db7ab3e29d2";
  useEffect(()=>{
    let api= `https://newsapi.org/v2/top-headlines?country=us&category=${link}&apiKey=03fc71963a284593b7996db7ab3e29d2`;
    fetch(api).then((Response)=>Response.json()).then(item=>setData(item.articles));
  },[link])
  return (
    <div className='game'> 
       {data.map((a,index)=>
     
    {
     return <Newsitem key={index} title={a.title}  url={a.url} description={a.description} pic={a.urlToImage}/>
    }
       
      )
     
      }
     
      
       
    </div>
  )
}

export default Newsboard
