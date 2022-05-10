import app from './app.js';


const port = app.get('port');

app.get('/', (req, res) => {
    res.json({
        message: 'Your app is running',
        documentation: 'www.google.com'
    })
})

app.listen(port, () => console.log(`Server running on port ${port}`))