// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Currency          Unit Amount
// Penny             $0.01 (PENNY)
// Nickel            $0.05 (NICKEL)
// Dime              $0.1 (DIME)
// Quarter           $0.25 (QUARTER)
// Dollar            $1 (DOLLAR)
// Five Dollars      $5 (FIVE)
// Ten Dollars       $10 (TEN)
// Twenty Dollars    $20 (TWENTY)
// One-hundred Dollars $100 (ONE HUNDRED)
// *******************************************************************
function checkCashRegister(price, cash, cid) {
  var arr = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var change = cash - price;
  var sumCid = cid.reduce((sum, b) => sum + b[1], 0).toFixed(2);
  var obj = {status: "OPEN", change: []};

    if (change > Number(sumCid)) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } 
    if (change === Number(sumCid)) {
      return {status: "CLOSED", change: cid};
    } 
   
  for (var i = arr.length - 1; i >= 0; i--) {
    var arrChange = [cid[i][0], 0];//0.25
    while(arr[i] <= change && cid[i][1]) {
      arrChange[1] += arr[i];
      change = (change - arr[i]).toFixed(2);;//0.25
      cid[i][1] -= arr[i];
    }
    if (arrChange[1] !== 0) {
      obj.change.push(arrChange);
    }
    
  }
 if (change > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  // Here is your change, ma'am.
  return obj;
}




// ===================================================================
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.






