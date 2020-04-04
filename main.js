var x = 10;
// Here x is 10
{
    // Here x is 2
    // let declaration let's us declare variables with block scope.
    let x = 2;
    console.log('Local variable x:' + x);
    // const are variables whos value cannot be changed
    const y = 17;
    console.log("Const:" + y);


}
// Here x is 10
console.log('global variable x:' + x);