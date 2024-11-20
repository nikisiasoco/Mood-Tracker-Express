const app = require('./app')


const {PORT} = require('./constants')
app.listen(PORT, () => {
    console.log(`The app is running at http://localhost:${PORT}`)
});

 