// Using frequency counter approach to reduce a O(N2) solution to an O(N) solution
// create an two obj to store freq of each letter in each string
    // compare both objects, and make sure that the letters and their frequency matches up
    // check if char in obj1 in obj2
        // return false 
    // check value is the same in both objs
        // if not, return false
    // return true

function validAnagram(str1, str2) { //rat tar
    if (str1.length !== str2.length) {
        return false;
    }
    let obj1 = {}
    let obj2 = {}
    for (var i of str1) {
        obj1[i] ? obj1[i]++ : obj1[i] = 1;
    }
    for (var i of str2) {
        obj2[i] ? obj2[i]++ : obj2[i] = 1;
    }

    for (prop in obj1) {
        if (obj1[prop]) {
            if(obj1[prop] !== obj2[prop]) {
                return false
            }
        } else {
            return false;
        }
    }
    return true;
}

// better solution 
function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let obj1 = {}
    for (var i of str1) {
        obj1[i] ? obj1[i]++ : obj1[i] = 1;
    }
    
    for (let i = 0; i < second.length; i++) {
        if (!lookup[letter]) {
            return false // if letter not in obj OR is value is 0 (falsey) return false
       
        } else {
            lookup[letter] -= 1;
        }
            
}



