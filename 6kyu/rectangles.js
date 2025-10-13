function sqInRect(lng, wdth){

    if (lng === wdth) {
        // If the rectangle is actually a square, return "nil" or an appropriate value for the language
        return null;
    }
    
    let sizes = [];
    while (lng > 0 && wdth > 0) {
        let size = Math.min(lng, wdth);
        sizes.push(size);
        
        if (lng > wdth) {
            lng -= size;
        } else {
            wdth -= size;
        }
    }
    
    return sizes;
}

console.log(sqInRect(5, 3)); // Example: [3, 2, 1, 1]
console.log(sqInRect(3, 5)); // Example: [3, 2, 1, 1]