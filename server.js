const express = require('express');
const exphbs  = require('express-handlebars');
const indexRouter = require('./routes/index');

const app = express();

// Set up handlebars view engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Set static files directory
app.use(express.static('public'));

// Use the index router
app.use('/', indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
