let data = 100;
let data1 = 20;


function isDivisible(num) {
    let arr = [];
    let res = "";

    for (let i = 1; i <= num; i++) {

        if (i % 2 === 0) {
            res = "yu";
        }
        if (i % 3 === 0) {
            res = "gi";
        }
        if (i % 5 === 0) {
            res = "oh";
        }
        if (i % 2 === 0 && i % 3 === 0) {
            res = "yu-gi";
        }
        if (i % 2 === 0 && i % 5 === 0) {
            res = "yu-oh";
        }
        if (i % 3 === 0 && i % 5 === 0) {
            res = "gi-oh";
        }
        if (i % 3 === 0 && i % 3 === 0 && i % 5 === 0) {
            result = "yu-gi-oh"
        } else if (res == 0) {
            res = i;
        }
        arr.push(res);

        res = "";
    }
    return arr;
}
console.log(isDivisible(data));
console.log(isDivisible(data1));