import { Router } from 'express';
import ProxyController from '../controllers/proxyController';

const router = Router();
const proxyController = new ProxyController();

router.get('/proxy', proxyController.handleProxyRequest.bind(proxyController));

export default router;