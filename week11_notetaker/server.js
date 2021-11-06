const express = require('express')
const webRoutes = require('./routes/web/web');
const notesRoutes = require('./routes/api/notes');



const app = express();






const PORT = process.env.PORT || '3001';

// teaches express to understand json
app.use(express.json());

// load static assets in public folder
app.use(express.static('public'));


app.use(notesRoutes);
app.use(webRoutes);

app.listen(PORT, () => {
    console.log('App is running on http://localhost:' + PORT);
})

