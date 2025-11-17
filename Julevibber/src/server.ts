import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Redirect root to home page
app.get('/', (req, res) => {
    res.redirect('/home.html');
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
