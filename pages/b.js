import Link from 'next/link'
import Head from 'next/head'

export default ({children})=>{
    
    console.log("props",children);
    return (
        <div>
            <Head>
                <title>这是B页面的标题</title>
            </Head>
            <div>这是B页面</div>
            <Link href="/"><a >返回首页</a></Link>
        </div>
    )
}