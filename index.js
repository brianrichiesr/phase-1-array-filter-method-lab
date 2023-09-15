const findMatching = (arr, str) => {
    return arr.filter((each) => {
        return each.toLowerCase() === str.toLowerCase();
    })
}

const fuzzyMatch = (arr, str) => {
    return arr.filter((each) => {
        return each[0].toLowerCase() === str[0].toLowerCase();
    })
}

const matchName = (arr, str) => {
    return arr.filter ((each) => {
        return each.name === str;
    })
}