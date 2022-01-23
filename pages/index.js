import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import next from 'next'


const Home =()=>{

 /*  Router.events.on('routeChangeStart',(...args)=>{
    console.log('1.routeChangeStart开始了，参数为',...args);
  })
  Router.events.on('routeChangeComplete',(...args)=>{
    console.log('1.routeChangeComplete结束了，参数为',...args);
  }) */

  const gotoIphone =()=>{
    Router.push({
      pathname:'phone',
      query: {
        name: '苹果'
      }
    })
  }
 
  return (
     <>
    <div>我是首页</div>
    <div><Link href="/a"><a>去A页面</a></Link></div>
    <div><Link href="/b"><a>去B页面</a></Link></div>

    <div>
      <div><Link href="/phone?name=苹果"><a >苹果手机</a></Link></div>
      <div><Link href="/phone?name=小米"><a >小米手机</a></Link></div>
    </div>

    <div>
      <button onClick={gotoIphone}>买苹果</button>
    </div>

  </>
  )
 
}
export default Home