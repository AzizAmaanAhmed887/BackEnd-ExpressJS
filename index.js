const express = require('express');
const app = express();

// Start the server
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root path");
})
app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
})
app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
})
app.get("*", (req, res) => { // this isn't working, don't know why, but the syntax is correct
    res.send("This path doesn't exist");
})
app.post("/", (req, res) => {
    res.send("You contacted post request");
})