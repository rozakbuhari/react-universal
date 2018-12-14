import '@babel/polyfill';
import express from 'express';
import renderer from './renderer';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.send(renderer());
});

app.listen(3000, () => {
  console.log('\nListening on port 3000');
});
