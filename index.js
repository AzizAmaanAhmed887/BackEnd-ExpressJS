const express = require('express');
const app = express();

// Start the server
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get("/search", (req, res) => {
    let {q} = req.query;
    if (!q) {
        res.send("search query doesn't exist");
    }
    res.send(`<h1> the search query is: ${q}</h1>`);
});

app.get("/", (req, res) => { //root path
    res.send("Im root path");
})

app.get("/:id", (req, res) => { //root path
    res.send(`User id is: ${req.params.id}`);
})
app.get("/apple", (req, res) => { // /apple
    res.send("Im apple path");
})
app.get("/orange", (req, res) => {// /orange
    res.send("Im orange path");
})
app.get("/banana", (req, res) => { // /banana
    res.send("Im banana path");
})
// app.get("*", (req, res) => { // this wildcard route isn't working, don't know why, but the syntactically is correct
//     res.send("This path doesn't exist");
// })
app.post("/", (req, res) => {
    res.send("You contacted post request");
})