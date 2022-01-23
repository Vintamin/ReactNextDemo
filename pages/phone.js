import {withRouter} from 'next/router'
import Link from 'next/link'

const Phone =({router})=>{
    return (
        <>
            <div>{router.query.name}真的好</div>
            <Link href='/'>返回首页</Link>
        </>
    )
}

export default withRouter(Phone)