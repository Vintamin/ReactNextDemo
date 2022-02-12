import Link from 'next/link'
export default ()=>{
    return(
        <>
        <h2>列表界面</h2>
        <Link href="/list/[id]" as="/list/1">
            <a >新闻1</a>
        </Link>
        
        </>
    )
}