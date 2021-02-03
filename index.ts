import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (_, res) => {
  res.status(200).json({
    message: 'Hello world'
  });
});

app.get('/jaymin', (_, res) => {
  res.status(200).json({
    message: 'Hai bebi <3'
  });
});

app.listen(PORT, () => {
  console.log(`App is running on Port ${PORT}`);
});
