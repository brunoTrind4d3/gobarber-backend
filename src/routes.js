import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Bruno Trindade',
    email: 'b.l.trindade@outlook.com',
    password_hash: 'q38482378',
  });
  return res.json(user);
});
export default routes;
