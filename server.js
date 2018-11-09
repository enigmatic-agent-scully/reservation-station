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
  resp.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/view', (req, resp) => {
  resp.sendFile(path.join(__dirname, '/view.html'));
});

app.get('/add', (req, resp) => {
  resp.sendFile(path.join(__dirname, '/add.html'));
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

app.get("/api/reservations", function (req, res) {
  return res.json(reservations);
});

// Displays a single reservation, or returns false
app.get("/api/reservations/:reservation", function (req, res) {
  var chosen = req.params.reservation;

  console.log(chosen);

  for (var i = 0; i < reservations.length; i++) {
    if (chosen === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }

  return res.json(false);
});

// Create New reservations - takes in JSON input
app.post("/api/reservations", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newreservation
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});
const reserve = () => {
  if (reservations.length <= 4) {

  }
}