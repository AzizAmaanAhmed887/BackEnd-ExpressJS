const express = require('express');
const app = express();

// Start the server
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

app.use((req, res) => {
    // console.log(req);
    console.log("Request received");
    // res.send("this is the basic response from the server");
    // res.send({
    //     name: "Amman",
    //     age: 20,
    //     gender: "Male",
    //     address: "Bangalore"
    // });
    let code = "<h1>Hello World</h1> <ul><li>Jabalpur</li><li>Bhopal</li><li>Nagpur</li><li>Bhilai</li></ul>";
    res.send(code);
});