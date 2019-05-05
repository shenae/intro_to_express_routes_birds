const express = require('express');
const app = express();
const Birds = require('./bird-app/db/birds.js');
const PORT = 3000;

//app.use(express.static('public'));

// const Birds = await db.bulkCreate(db);

app.get('/birds', async (request, response) => {
    try {
    //const { Birds } = require('./bird-app/db/birds.js'); 
    //const allBirds = await Birds.findAll();
      response.json(Birds);
    } catch(error) {
      console.log(`Something bad happened: ${error}`);
    }
  });

//to get bird names
app.get('/birdnames/:id', async (request, response) => {
  try {
    //const { birds } = require('./bird-app/db/birds.js');
const birdNames = await Birds.findAll(request.params.id);
    response.json(birdNames);
  } catch(error) {
    console.log(`Something bad happened: ${error}`);
   }
});

app.get('/bird/parrot', async (request, response) => {
    try {
      const parrot = await Birds.findAll
      ({where: {
        type: 'parrot'}
});
    response.json(parrot);
  } catch(error) {
    console.log(`Something bad is happening: ${error}`);
  }
});

app.get('/', async(request, response) => {
    try {
        response.send('This is da birds!');
    } catch(error) {
        console.log(`Something bad happened: ${error}`);
    } 
});

app.listen(PORT, () => {
    console.log(`Express yo'self port ${PORT}`);
});

