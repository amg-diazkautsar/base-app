import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

const port = 6000;
app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});