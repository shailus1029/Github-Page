export const handleTypeFilter = (type, arr) => {
    let filteredArray = [];
    if (type === 'all') {
        filteredArray = arr;
    } else {
        filteredArray = arr.filter((item) => item[type] === true);
    }
    return filteredArray
}