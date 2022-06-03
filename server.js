//this requires express
const express = require('express')
//this is convention - set express to a variable app and then use that
const app = express()
//good idea to use variable instead of port number
const PORT = 8000
//this is an object that has some info in it
const rappers = {
    '21 savage' : {
        'age': 29,
        'birthname': 'joseph something or other',
        'birthLocation': 'London, England'
        },
    'chance the rapper' : {
        'age': 29,
        'birthname': 'bob bobbity',
        'birthLocation': 'Narnia'
        },
    'unknown' : {
        'age': 0,
        'birthname': 'unknown',
        'birthLocation': 'unknown'
        }
}

//this responds to the get request and sends index.html
app.get('/', (request, response) => (
    response.sendFile(__dirname + '/index.html')
))

//if they make a request to api we respond with json- so if they type in localhost:8000/api they get the savage object
app.get('/api/:name', (request, response)=>{
    //if we put /:name here it refers to the query parameter. so we can grab it and use it using params
    const rapperName = request.params.name.toLowerCase() //so grab the query parameter we've called name and then we set it to lowercase to avoid any issues
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
   
})

//this listens for the request to the server
app.listen(PORT, ()=>(
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
))