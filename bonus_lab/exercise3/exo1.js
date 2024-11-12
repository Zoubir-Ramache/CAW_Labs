const setOne =(arr)=>{
    let mySet =new Set(arr)
    let result = Array.from(mySet)
    return result
}

console.log(setOne([4,5,5,2,2,4,3,1,5,2]));
