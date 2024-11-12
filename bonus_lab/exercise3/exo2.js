const getRideOf=(tab , ...val)=>{
  return tab.filter(t=> !val.includes(t))
}
console.log(getRideOf(["a","b","c","d","e","f","g"], "b","e","x")) 