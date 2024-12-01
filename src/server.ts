import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import { router } from './routes';

const app = express();
const port = 3333;

// Configurações do Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    // Se for instância de error
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
});

// Exporta o manipulador para o Vercel
export default app;
