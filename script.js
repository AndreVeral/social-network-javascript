var admin = {
    username:"admin",
    password: "123456"
};

var database = [ {
    username: "user",
    password: "123456"
} ];

var newsFeed = [
    {
        username:"john",
        timeline:"Ótimo dia!"
    },
    {
        username:"Carl",
        timeline:"Vou comer queijo amanhã"
    },
    {
        username:"Peter",
        timeline:"Ganhei na loteria!"
    },

];

var userNamePrompt = prompt("Qual seu nome?");
var passwordPrompt = prompt("Digite sua senha");

function signIn(user, pass){
    if(user === database[0].username && pass === database[0].password){
        console.log(newsFeed);
    }else{
        alert("Access denied. Wrong username or password.");
    }
}

signIn(userNamePrompt,passwordPrompt);