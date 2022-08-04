const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, './')));

app.post('/contacts', (req, res) => {
    const fs = require('fs');
    fs.appendFile('./contacts.txt', JSON.stringify(req.body) + '\n', function(err) {
        if(err) {
            res.status(500).send('Server error');
            return console.log(err);
        }
        console.log('Data saved: ' + JSON.stringify(req.body));
        res.send('Data saved');
    });
});
console.log(
    'Server is running on',
    process.env.PORT || 3000,
    process.env.IP || '0.0.0.0'
    );
app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0');

// app.get('/', (req, resp) => {
//     resp.send(`<h4>Category: ${req.params.category}</h4>`);
// })

// app.get('/shop/:category/:subcategory', (req, resp) => {
//     resp.send(`<h4>Category: ${req.params.category}</h4>
//     <h4>Subcategory: ${req.params.subcategory}</h4>`);
// })

// app.listen(3000, () => console.log('Listening 3000...'));