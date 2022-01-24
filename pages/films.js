import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import Link from 'next/link'
import Router from 'next/router'
//import '../static/films.css'

export default function Films() {
    const [films,setFilms] =useState([])
    useEffect(async() => {
        const res = await axios.get('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1369598',
            {
                headers: {
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }
        ).then(data=>{
            //films =data.data.data.films;
            setFilms(data.data.data.films)
        })
    },[])
   /*  useEffect(()=>{
        console.log(films);
    },[films]) */


    return (
        <div >
            <h2>电影</h2>
            <button onClick={()=>Router.push("/")}>回到首页</button>
            <ul className="filmUl">
                {
                    films.map(item => {                    
                        return(
                            <li key={item.filmId}>
                            {item.name}
                            <img src="https://img1.baidu.com/it/u=3148093753,3192513874&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" 
                            style={{width:"300px",height:"300px"}}/>
                        </li>
                        )
                        
                        }
                    )
                }
            </ul>
        </div>
    )
}