const express = require('express');
const app = express();
const birds = require('./bird-app/db/birds.js');
const PORT = 3000;


//to get all the birds
app.get('/birds.json', async (request, response) => {
    try {
      response.json(birds);
    } catch(error) {
      console.log(`Something bad happened: ${error}`);
    }
  });

//to get bird id
app.get('/birds/:id.json', async (request, response) => {
  try {
let id = request.params.id - 1;
    response.json(birds[id]);
  } catch(error) {
    console.log(`Something bad is happening when finding bird names: ${error}`);
   }
});

app.get('/', async(request, response) => {
    try {
        response.send('This is da birds!');
    } catch(error) {
        console.log(`Something bad happened: ${error}`);
    } 
});

//bonus attempt
app.get('/birds/:type.json', async (request, response) => {
  try {
  let type = request.params.type;
  response.json(birds[type]);
} catch(error) {
  console.log(`Something bad is happening when finding bird type: ${error}`);
}
});

app.listen(PORT, () => {
    console.log(`Express yo'self port ${PORT}`);
});

