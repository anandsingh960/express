// const ex = require('express');

import ex from 'express';
 const app = ex(); 
app.get('/', (req, res) => {
  res.send('<h1> Web Soft Segment</h1>');
});
 
app.listen(8000, () => {
  console.log(`Server is listening at http://localhost:8000`);
});