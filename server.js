const express =require ('express')
const app= express()

const port=5000







const middle = (req, res, next) => {
    const d = new Date();
    const day = d.getDay();
    const hour = d.getHours();
    console.log('hour', hour);

    if (hour < 9 || hour > 17 || day<0||day>6) {
        return res.send('Sorry, the web application is not available now');
    }

    next();
};



app.use(middle);


app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render()
})



app.listen(port,(err)=>{
    err ? console.log('err',err): console.log (`server is running on port:${port}`)
})