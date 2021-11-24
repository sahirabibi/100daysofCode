// check for substring in a search 
// pseudocode
// loop over the string
// loop over the shorter string
// if char does not match, brak out of the inner loop
// if you complete the inner loop and find a match increment the count of the matches
// return the count

function naiveSearch(str, elem) { // lorielol / lol
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === elem[0]) { // l
            for (let j = 0; j < elem.length; j++) {
                if (str[i + j] !== elem[j]) { // 
                    break;
                }
                if (j === elem.length - 1) {
                    count++;
                }
            }
            
        }
    }
    return count;
}

let obj = {
    'I': 1, 'J':2
}
console.log(obj['I'])
console.log(naiveSearch('lorie loled', 'lo'))