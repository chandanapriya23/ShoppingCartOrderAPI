import express from 'express';
import bodyParser from 'body-parser';

import orderRoutes from './routes/orders.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port: http//localhost:${PORT}`);
})