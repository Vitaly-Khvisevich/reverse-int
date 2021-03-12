module.exports = function reverse (n) {
let x;
let result=0
if (Math.sign(n)==-1){
    n=Math.abs(n);
  }
while(n){
x=n%10;
result = (result * 10) + x;
n = n/10|0;
}
return result;
}
