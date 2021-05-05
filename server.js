var express = require('express')
var app = express()

app.use(static(__dirname))
app.use(json())
app.use(urlencoded({ extended: false }))

var messages = [
    { name: "john", message: "Hello" },
    { name: "jj", message: "Hi" }
]

app.get(`/messages`, (req, res) => {
    res.send(messages)
})

app.post(`/messages`, (req, res) => {
    messages.push(req.body)
    io.emit(`message`, req.body)
    res.sendStatus(200)
})
io.on(`connection`, (socket) => {
    console.log(`user connected`)
})

var server = http.listen(3010, () => {
    console.log("Server is Ready to listen on port", server.address().port)

})