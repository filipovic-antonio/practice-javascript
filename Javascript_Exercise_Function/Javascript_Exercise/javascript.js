function calculateDiscount(userAge, orderSummary){
    if(userAge < 18){
        return 0;
    } else if(userAge > 18 && userAge < 30 && orderSummary > 50){
        return 10;
    } else if(userAge > 30 && orderSummary > 50){
        return 15;
    } else if(orderSummary > 100){
        return 20;
    }else{
        return 0;
    }     
}
console.log('Discount: ' + calculateDiscount(17, 150));
console.log('Discount: ' + calculateDiscount(22, 150));
console.log('Discount: ' + calculateDiscount(24, 70));
console.log('Discount: ' + calculateDiscount(78, 70));
console.log('Discount: ' + calculateDiscount(20, 10)); 