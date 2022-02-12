import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import next from 'next'
import MyHead from '../components/myhead'



const Home = () => {


  const router =useRouter();

  return (
    <>
      <MyHead>
        <div>我是首页</div>
        <div><Link href="/a" prefetch><a>去A页面</a></Link></div>
        <div><Link href="/b"><a>去B页面</a></Link></div>
        <div><Link href="/films"><a>去电影页面</a></Link></div>

        <div>
          <div><Link href="/phone?name=苹果"><a >苹果手机</a></Link></div>
          {/* <div><Link href="/phone?name=小米"><a >小米手机</a></Link></div> */}
          <div><Link href={{pathname:"/phone",query:{name:'小米'}}}><a >小米手机</a></Link></div>
        </div>

        <div>
          <button onClick={()=>{router.push("/phone?name=苹果")}}>买苹果</button>
        </div>
      </MyHead>


    </>
  )

}
export default Home