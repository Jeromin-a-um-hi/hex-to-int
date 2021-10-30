export function hexToInt(rawValue) {
    let rawValueArray = rawValue.split("");
    let rawValueArrayMapped = rawValueArray
    .map((i) => {
        if(i === "a" || i === "A"){
            return 10;
        } else if(i === "b" || i === "B"){
            return 11;
        } else if(i === "c" || i === "C"){
            return 12;
        } else if(i === "d" || i === "D"){
            return 13;
        } else if(i === "e" || i === "E"){
            return 14;
        } else if(i === "f" || i === "F"){
            return 15;
        }
    }).reverse();
    let x = 0;
    let sum = 0;
    for(let i in rawValueArrayMapped){
        x += 1;
        sum += rawValueArrayMapped[i] * (16 ** (rawValueArrayMapped.length - x));
    };
    return sum;
};