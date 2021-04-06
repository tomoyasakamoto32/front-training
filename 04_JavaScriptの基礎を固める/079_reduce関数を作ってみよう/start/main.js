const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    return `${accu}<${curr}>`;
}

const result = reduce(strArry, tag, "");

function reduce(arry, callback, defaultValue){
    let accu = defaultValue;
    for(let i = 0; i <arry.length; i++){
        let curr =arry[i];
        callback(accu, curr);
    }
}

console.log(result);