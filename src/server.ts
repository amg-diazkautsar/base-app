import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

const port = 7500;
app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});