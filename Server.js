

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve HTML and CSS files
app.get('/download/html', (req, res) => {
    res.download(path.join(__dirname, 'resume.html'), 'resume.html', (err) => {
        if (err) {
            console.log(err);
        }
    });
});

app.get('/download/css', (req, res) => {
    res.download(path.join(__dirname, 'styles.css'), 'styles.css', (err) => {
        if (err) {
            console.log(err);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
