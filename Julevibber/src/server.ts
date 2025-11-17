import express from 'express';
import path from 'path';

const app = express();

// Redirect root to home page
app.get('/', (req, res) => {
    res.redirect('/home.html');
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// For local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
}

// Export for Vercel serverless
export default app;
