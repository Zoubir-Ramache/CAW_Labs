function mean(arr){


let sum =0;
for(let i =0; i<arr.length;  i++){
sum+=arr[i];
}
let mid =sum/arr.length 
console.log(mid)


}

module.exports=mean

