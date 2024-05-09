const express = require('express')
const app = express()
const port = 1010

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extende: true}))
app.use(express.static('public'))

app.get("/",(req,res)=>{

    let category = [
        {
            title: "Title1",
            id : category1
        },
        {
            title: "Title2",
            id : category2
        },
        {
            title: "Title3",
            id : category3
        },
        {
            title: "Title4",
            id : category4
        },
        {
            title: "Title5",
            id  : category5
        },
    ]

    model = {
        title : "Joke Away",
        category: category,
        id : id
    }
    res.render('home', model)
})

app.post("/",(req, res) =>{
    
})


app.listen(port, ()=>{
    console.log("Now running on port: " + port)
})