import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { createRouteHandler } from 'uploadthing/express';
import { uploadRouter } from './upload-router.js';

dotenv.config();

const server = express();

server.use(cors());

server.use('/api/uploadthing', createRouteHandler({
  router: uploadRouter,
  config: {
    token: process.env.UPLOADTHING_TOKEN
  }
}));

const instance = server.listen(process.env.PORT ?? 8080, () => {
  console.log('Listening at', instance.address());
});