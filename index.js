const express = require('express');
const app = express();

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});