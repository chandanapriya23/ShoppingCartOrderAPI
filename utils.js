export const calculateFinalPrice = (order) => {
    let { line_items, discounts, uuid } = order;
    let total_price = 0;
    let total_tax = 0;
    line_items ?.forEach((item) => {
        const { price, tax_rate } = item;
        total_tax = total_tax + (price * tax_rate);
        let final_price = price + (price * tax_rate);
        discounts ?.forEach((discount) => {
            if (discount.apply_to === item.uuid) {
                if (discount.type == "amount") {
                    final_price = final_price - discount.amount;
                }
                else {
                    final_price = final_price - (price * discount.amount);
                }
            }
        });
        total_price = total_price + final_price;
        discounts ?.forEach((discount) => {
            if (discount.apply_to === uuid) {
                if (discount.type == "amount") {
                    total_price = total_price - discount.amount;
                }
                else {
                    total_price = total_price - (price * discount.amount);
                }
            }
        });
    });
    return { total_price, total_tax };
}
