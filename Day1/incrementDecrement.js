/**
 * @param {string[]} operations
 * @return {number}
 */

 var finalValueAfterOperations = function(operations) {
    let x =0;
    operations.forEach((item,index) => {
        switch(item){
            case '++X':
                x+=1;
                break;
             case 'X++':
                x+=1;
                break;
             case '--X':
                x-=1;
                break;
             case 'X--':
                x-=1;
                break;
            default:
                x=x;
                break;
        }
    });
    return x;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
