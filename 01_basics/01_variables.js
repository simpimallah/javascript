const accountId=1455332;
let accountEmail="test@gmail.com";
var accountPassword="12345";
accountCity="Jaipur";
// accountId=2;  /not allowed
accountEmail="demo@gmail.com";
accountPassword="5623";
accountCity="Bangaluru";

let accountState;
console.log(accountId);
/*
Prefer not to use var
becouse of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])