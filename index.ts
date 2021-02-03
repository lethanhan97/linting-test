import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello world'
  });
});

app.listen(PORT, () => {
  console.log(`App is running on Port ${PORT}`);
});
