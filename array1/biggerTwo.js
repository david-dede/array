function biggerTwo(a, b){
  let aa=a[0]+a[1]
  let bb=b[0]+b[1]
  if(aa>=bb){
    return [a[0],a[1]]
  }
    if(aa<bb){
    return [b[0],b[1]]
  }
}