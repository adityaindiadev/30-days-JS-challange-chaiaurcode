var num = 123
console.log(num);

let str = "JavaScript"
console.log(str);


const isHuman = false
console.log(isHuman);

const obj = {
    "id": 1,
    "name": "Nothing"
}

const array = ["nothing", "everything"]

str = "ReactJS"

console.log("type of All the variables:", typeof num, typeof str, typeof isHuman, typeof obj, typeof array);

console.log("If you want to check if variable is array type or not then use Array.isArray  method: ", Array.isArray(array));

try {
    isHuman = true
} catch (error) {
    console.log("const declaration error: ", error);
}
