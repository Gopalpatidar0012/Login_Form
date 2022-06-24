import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos } from '../app/ApiActions'
import "./VideoStyle.css"



const Videos = () => {
    const data=useSelector((state)=>state.rootReducer.apis.todoList);
    console.log("this is is state ..........",data);
    
    const dispatch=useDispatch();

    useEffect(()=>{
        console.log('dfdfdfdfdf')
        dispatch(fetchVideos())
    },[])
    
    // const handle Videos=()=>{
    //     dispatch(fetchVideos()); 
    // }

    // const datas=data.items;
    //  console.log("data items",data.items[0].id);

    //  data.map((i)=>
           
    //     console.log("data of items",data.items[i].id)
    //  )
  return (
    <div>
         
        <div class="videoPlayer">
      {data && data.items && data.items.length>=0 ?  
            data.items.map((data)=>{
                return  <iframe width="560" height="315" src={`https://www.youtube.com/embed/${data.id}`} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>

        </iframe>
            })
     
        :
        null }
        </div>
    </div>
  )
}

export default Videos