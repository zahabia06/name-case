var personName = "zahabia";
// in lower case
console.log("lower case:", personName.toLowerCase());
//in upper case
console.log("upper case:", personName.toUpperCase());
//in title case
console.log("title case:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
