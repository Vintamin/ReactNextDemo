export default (req,res)=>{
    let data={
        name:"李佳康",
        age:18
    }
    res.setHeader('Content-Type', 'application/json')
    //res.send(data)
    res.json(data)
}