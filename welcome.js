//exp: Creating a local module and using its functions and 
//properties. Alternative way of creating a local module
const welcome1 = {

    sayHello: function (){
        console.log("Hello FAC students");
    },
    currentDate: new Date().toLocaleDateString(),
    collegeName: "FAC College"
}
module.exports = welcome1