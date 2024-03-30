const removeFromArray = function(input_array, ...elements) {
    /* implemented with two stacks where argument[0] is the array
     and following elements are to be removed from array */
    let array = input_array;
    for (const element of elements) {
        let index = array.indexOf(element);
        // use while loop to remove all instance of element
        while (index > -1) {
            array.splice(index, 1)
            index = array.indexOf(element);
        }
    }
    return array
}

// Do not edit below this li<F3>ne
module.exports = removeFromArray;
