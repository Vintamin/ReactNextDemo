import Head from 'next/head'

export default ({children}) => {
    
    return(
        <div>
            <Head>
                <title>这是共同的头部</title>
            </Head>
                {children}
                <hr />
            <footer>
                这是李佳康的页面
            </footer>
        </div>
    )
}