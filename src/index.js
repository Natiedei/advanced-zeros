module.exports = function getZerosCount(number, base) {
  // your implementation
  let  result, divide, zeros, adv;

for (let i = 2; i <= base; i++) {
 if (base % i == 0){
    divide = 0;
   while (base % i == 0) {
       divide++;
       base = base / i;
   }
   zeros = 0, adv = number;
   while (adv / i > 0.1){
     zeros += Math.floor(adv / i);
     adv = Math.floor(adv / i);
   }

  result = Math.floor(zeros / divide);
 }
}
return result;
}