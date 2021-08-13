console.log("Hello Typescript");
var x; // inference to any
x = 100;
x = "abc";
x = [1, 2, 3];
var y = 10; //  Type inference
//Type checking
//y = "hello"; //compiler error
var obj = { id: 10 };
obj.id = 20;
//obj.name = ""; //compiler error
var message; // type annotation
message = "asddas";
//message = 10;
var user;
user = { id: 1, name: "Anil" };
