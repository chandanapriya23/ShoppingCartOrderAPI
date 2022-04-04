import { createOrderDb, getOrderDb, updateOrderDb } from '../db/orders';
import { calculateFinalPrice } from '../utils';

export const createOrder = (req, res) => {
    let { total_price, total_tax } = calculateFinalPrice({ ...req.body });
    const order_final = { ...req.body, tax_total: total_tax, total: total_price };
    const result = createOrderDb(order_final);
    res.send(result);
}

export const getOrder = (req, res) => {
    const order = getOrderDb(req.params.uuid);
    res.send(order);
}

export const updateOrder = (req, res) => {
    const { line_items, discounts } = req.body;
    let order = getOrder(req, res);
    if (order && line_items ?.length > 0) {
        order.line_items.concat(line_items);
    }
    if (order && discounts ?.length > 0) {
        order.discounts.concat(discounts);
    }
    let { total_price, total_tax } = calculateFinalPrice({ ...order });
    const order_final = { ...order, tax_total: total_tax, total: total_price };
    const result = updateOrderDb(order_final);
    res.send(result);
}