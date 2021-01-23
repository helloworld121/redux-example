
// SPLICE MUTATES THE ORIGINAL ARRAY, THEREFORE WE NEED TO COPY IT FIRST

function insertItem(array, action) {
    let newArray = array.slice();
    newArray.splice(action.index, 0, action.item);
    return newArray;
}

function removeItem(array, action) {
    let newArray = array.slice();
    newArray.splice(action.index, 1);
    return newArray;
}
