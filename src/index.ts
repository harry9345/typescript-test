import express from 'express';
import diartRouter from './routes/diaries'

const app = express();
app.use(express.json());

const PORT = 3003;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diaries', diartRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});