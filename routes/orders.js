import express from 'express';
import {createOrder, getOrder, updateOrder} from '../services/orders'

const router = express.Router();

router.post('/', createOrder);

router.get('/:uuid', getOrder);

router.put('/:uuid', updateOrder);

export default router;