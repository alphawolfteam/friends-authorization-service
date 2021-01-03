import { Router } from 'express';
import SpikeController from './controller';
// import SpikeValidator from './validator';
import { wrapAsync } from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import { login, callback } from './validator.schema';

const spikeRouter: Router = Router();

spikeRouter.get('/login', ValidateRequest(login), wrapAsync(SpikeController.redirectUser));
spikeRouter.get('/callback', ValidateRequest(callback), wrapAsync(SpikeController.saveToken));

export default spikeRouter;