
let allOrders = [
    {
        uuid: 'a76ee7b0-7f9e-4443-899c-f4be0faddee3',
        line_items: [
          {
            uuid: '7cd7f0ef-8265-4593-95ea-dd7c2bb6396d',
            quantity: 1,
            name: 'Hamburger',
            price: 875,
            tax_rate: 0.0625
          },
          {
            uuid: '6d419f88-b53f-49e2-af0a-832444d6ed41',
            name: 'Water',
            quantity: 1,
            price: 235,
            tax_rate: 0.0625
          },
          {
            uuid: '47dfb3e6-b892-40b8-9ce6-f769c6e15537',
            name: 'Beer',
            quantity: 1,
            price: 1025,
            tax_rate: 0.0825
          }
        ],
        discounts: [
          {
            uuid: '88140f25-f314-493b-ad81-32932f1ae4cc',
            name: '$1 off beer',
            type: 'amount',
            amount: 100,
            apply_to: '47dfb3e6-b892-40b8-9ce6-f769c6e15537'
          },
          {
            uuid: 'b1d52ea0-141b-4363-a42d-3bbd0b851222',
            name: '10% membership discount',
            type: 'percent',
            amount: 0.10,
            apply_to: 'a76ee7b0-7f9e-4443-899c-f4be0faddee3'
          }
        ],
        tax_total: 132,
        total: 1954
    },
    {
        uuid: 'a76ee7b0-7f9e-4443-899c-f4be0faddert677',
        line_items: [
          {
            uuid: '7cd7f0ef-8265-4593-95ea-dd7c2bb6396d',
            quantity: 1,
            name: 'Hamburger',
            price: 855,
            tax_rate: 0.0625
          },
          {
            uuid: '6d419f88-b53f-49e2-af0a-832444d6ed41',
            name: 'Water',
            quantity: 1,
            price: 275,
            tax_rate: 0.0625
          },
          {
            uuid: '47dfb3e6-b892-40b8-9ce6-f769c6e15537',
            name: 'Beer',
            quantity: 1,
            price: 1025,
            tax_rate: 0.0825
          }
        ],
        discounts: [
          {
            uuid: '88140f25-f314-493b-ad81-32932f1ae4cc',
            name: '$1 off beer',
            type: 'amount',
            amount: 100,
            apply_to: '47dfb3e6-b892-40b8-9ce6-f769c6e15537'
          },
          {
            uuid: 'b1d52ea0-141b-4363-a42d-3bbd0b851222',
            name: '10% membership discount',
            type: 'percent',
            amount: 0.10,
            apply_to: 'a76ee7b0-7f9e-4443-899c-f4be0faddee3'
          }
        ],
        tax_total: 132,
        total: 1954
    }
];

export const createOrderDb = (order) => {
    allOrders.push({...order});    
    return order;
}

export const getOrderDb = (id) => {
    const getOrder = allOrders.find(order => order.uuid == id);      
    return getOrder;
}

/* Updating an order by Adding Line item/ discount */
export const updateOrderDb = (order) => {
    allOrders = allOrders.filter(cur_order => cur_order.uuid !== order.uuid);
    allOrders.push(order);
    return order;
}
