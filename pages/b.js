import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

const RedLink =React.forwardRef((props,ref)=>{
    return(
        <a href={props.href} ref={ref}>Link套组件方式回首页</a>
    )
})
export default ({children})=>{
    
    console.log("props",children);
    return (
        <div>
            <Head>
                <title>这是B页面的标题</title>
            </Head>
            <div>这是B页面</div>
            <Link href="/"><a >返回首页</a></Link>
            <hr />
            <p>Link标签中套组件</p>
            <Link href="/" passHref><RedLink></RedLink></Link>
        </div>
    )
}