const http=require('http')
const dummyData=require('./dummyData')
const details=JSON.stringify(dummyData)
const app=http.createServer((req,res)=>{
    if(req.url === '/post'){
        res.write('This is post page')
        res.end()
    }
    else if(req.url === '/comments'){
        res.write("<h1>What is Node.Js ?</h1>")
        res.write("<p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.Single-threaded non-blocking I/O makes it an excellent choice for both real-time and data streaming applications, too.</p>")
        res.write(details)
        res.end()
    }
    else{
        res.write('error 404 page not found')
    }
})

app.listen(4000,()=>{
    try{
        console.log("Server is live at 4000 port number")
    }
    catch(err){
        console.log(err,"An error occurred")
    }
})

