const removeFromArray = function(array, ...removeUs) {
    result = []
    addMe = false
    for(let i = 0; i < array.length; i++) {
        addMe = true;
        for(let removeMe of removeUs) {
            if (array[i] === removeMe) {
                addMe = false;
            }
        }
        if (addMe) result.push(array[i]);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
