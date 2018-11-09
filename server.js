var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [{
  name: 'AJ',
  phone: '678.888.3453',
  email: 'me@me.com',
  id: 0829829
},
{
  name: 'haydest',
  phone: '800.666.6666',
  email: 'unicorns@rainbows.gov',
  id: 'that bitch'
},
{
  name: 'erik',
  phone: '1.800.mix.alot',
  email: 'doodoo@doodoo.doo',
  id: 'that other bitch'
}
];

var waitlist = [{
  name: 'i swear im not an incel',
  phone: '1.800.don.tcall',
  email: 'do_not@email.com',
  id: 'incel-4-lyfe'
}];

app.get('/', (req, resp) => {
  resp.sendFile(`${__dirname}index.html`)
});

app.get('/view', (req, resp) => {
  resp.sendFile(`${__dirname}view.html`)
});

app.get('/add', (req, resp) => {
  resp.sendFile(`${__dirname}add.html`)
});
