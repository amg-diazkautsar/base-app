import * as express from 'express';
import * as path from 'path';
import { Request, Response } from 'express'

const app = express();

const publicDir = path.join(__dirname,'../');
app.use(express.static(publicDir));

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

const port = 7500;
app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});