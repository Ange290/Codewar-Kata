function isValidWalk(walk) {
  if(!walk.length === 10){
    return false
  }
 let grp = walk.reduce((acc,num)=>{
        acc[num]=(acc[num] ||0) +1;
        return acc;
},{});
    
    return (grp['n']||0) === (grp['s']||0) &&
            (grp['w'] ||0) === (grp['e']||0) 
}
console.log(isValidWalk(['n','s','e','w','n','s','e','w','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))