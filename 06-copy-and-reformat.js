/* Your task is to create a function called copyFormatted(obj) that
creates a copy of obj with the following formatting applied:
- All strings are converted to lowercase
- All numbers are rounded to 2 decimal places
- obj should not be modified in any way
- you can assume the object's properties can have values that are limited to 
primitives or other objects with the same limitations (ie. no arrays, sets, etc.)
*/


function copyFormatted(obj) {
    const copy = {};
    for (let key in obj) {
        const val = obj[key];
        switch(typeof val) {
            case "string":
                copy[key] = val.toLowerCase();
                break;
            case "number":
                copy[key] = +val.toFixed(2);
                break;
            case "object":
                copy[key] = copyFormatted(val);
                break;
            default:
                copy[key] = val;
        }
    }
    return copy;
}

const data = {
    name: "BiLLy bOb JoE",
    monthlySalary: 100000 / 12,
    team: "enGinEErinG",
    stats: {
        model: "Gemini",
        tokensUsed: 3125917.667,
    },
    isActive: true,
}

const formattedData = copyFormatted(data);

console.log(data);
console.log(formattedData);
console.assert(formattedData !== data);
