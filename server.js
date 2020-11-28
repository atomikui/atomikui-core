/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const port = process.env.PORT || 6060;
const app = express();

app.use(express.static('build/styleguide'));

app.listen(port, () => {
  console.log('Server running on port:', port);
});
