 import React from 'react'
 import image from '../../src/Assets/news-2444778_640.jpg'

const Newsitem = ({title,url,pic,description}) => {

  
  return (
<div className='container'>
 <a href={url}><img src={pic?pic:image} style={{width:"230px",height:"190px",borderRadius:"10px",cursor:"pointer" }} alt=""/></a>
 <h5 className='card-title'>{title.slice(0,50)}</h5>
  <p className='card-text'>{description}</p>
 <a href={url} className='read'>Read More</a>
</div>
  )
  }
 export default Newsitem;
