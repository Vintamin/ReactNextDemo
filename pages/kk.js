function KK(){
    return(
        <>
            <div>我是康康</div>
            <div className="kkClass">我是康康</div>

            <style jsx>
                {`
                    div{color:blue}
                    .kkClass{
                        color:red
                    }
                `}
            </style>
        </>
    )
}

export default KK