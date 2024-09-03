function applyDiscount(order) {

    const discountAmount = order.orderTotal*order.discountPercentage;
    const grossAmount = order.orderTotal-discountAmount;
    return{

        orderTotal: order.orderTotal,
        discountPercentage: order.discountpercentage,
        grossAmount : grosssamount,

        
    };

}


const sampleOrder ={

    orderTotal : 100,
    discountPercentage : 0.1

}



const updateedOrder  = applyDiscount(sampleOrder);
console.log(sampleorder);
console.log(updatedOrder);