const button = document.querySelector("button");
var span = document.getElementById("span1");
var users = ["Swetha", "Max", "Alegra"]; //array of strings
var n = users.length; //Length of the array, which is 3
n = n*1000; //multiplying it with 1000 to use in setTimeout Function
const display = (status,user) => { //To Display array and its status
    span1.innerHTML = status+user 
}
const convert = () => {
    return new Promise((resolve, reject) => { //creating a new Promise
        display("Converting Your Text...    ",users);
        setTimeout(() => {
            resolve(users.map(function(x){ return x.toUpperCase() })); //using toUpperCase method to convert
        }, n);
    });
};
const func = () => {
    convert()
    .then(
        users => {
            display("",users)
        })
}
display("Before Converting-",users);
button.addEventListener("click", func);
        