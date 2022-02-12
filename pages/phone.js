import {withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const List =({datasource})=>{
    return(
        datasource.map(item=>{
        return  <li key={item.id}>{item.name}</li>
    })
    )
    
}

const Phone =({router,data})=>{
    console.log(data);
    return (
        <>
            <div>{router.query.name}真的好</div>
            <List datasource={data}></List>
            <Link href='/'>返回首页</Link>
        </>
    )
}
Phone.getInitialProps = async () => {
    const promise =new Promise((resolve,reject) =>{
        axios('https://jsonplaceholder.typicode.com/users').then(
            (res)=>{
                console.log('结果是',res);
                resolve(res)
            }
        ).catch(err=>console.log('错误是',err))
    })
    return await promise
}

export default withRouter(Phone)