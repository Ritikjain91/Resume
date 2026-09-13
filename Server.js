const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static assets (CSS, JS, images) from current directory
app.use(express.static(__dirname));

// Primary route to serve the resume
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Download endpoints
app.get('/download/html', (req, res) => {
    res.download(path.join(__dirname, 'index.html'), 'Ritik_Jain_Resume.html', (err) => {
        if (err) {
            console.error('Error downloading HTML resume:', err);
            res.status(500).send('Error downloading file');
        }
    });
});

app.get('/download/css', (req, res) => {
    res.download(path.join(__dirname, 'styles.css'), 'styles.css', (err) => {
        if (err) {
            console.error('Error downloading CSS:', err);
            res.status(500).send('Error downloading file');
        }
    });
});

app.listen(port, () => {
    console.log(`Resume server running at http://localhost:${port}`);
});
