const express = require('express');
const app = express();

// Start the server
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get('/home', (req, res) => {
    res.send("This is GET request for HOME page");
})
app.get('/about', (req, res) => {
    res.send("This is GET request for ABOUT page");
})
app.get('/contact', (req, res) => {
    res.send("This is GET request for CONTACT page");
})
app.get('*', (req, res) => { // this isn't working don't know why, but the syntax is correct
    res.send("This is the default route");
})
app.post('/', (req, res) => {
    res.send("This is POST request");
})