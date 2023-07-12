
let a=0;b=1;
function fibonacci(n) {
	
// your code here
	if(n<=2){
	return n-1;
	}
	for(let i=1;i<=n-2;i++){
		let temp=b;
		b=a+b;
		a=temp;
	}
	return b;
}
console.log(fibonacci(49))
module.exports = fibonacci;
