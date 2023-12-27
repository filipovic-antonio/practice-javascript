var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(customer => customer.reduce((a,b)=>a+b)));
  };

let result= maximumWealth([[1,2,3],[5,3,12]]);
console.log(result);