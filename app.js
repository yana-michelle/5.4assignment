const animeNames= ['Gojo', 'Yuji', 'Megumi', 'Nobara', 'Inumaki', 'Maki', 'Panda'];

for (name of animeNames){
    console.log(name);
    if(name === 'Gojo'){
        console.log("Most narcissistic man on earth");
    }
    if(name=== 'Megumi'){
        console.log("Poor kid had gojo as a father figure");
    }
}

let age = 0;

while(age<18){
    console.log("I'm telling your momma you're sticking your nose where it doesn't belong");
}

const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

text.style.color = "red";


text.classList.add("change");

changeColor.addEventListener("click", function(){
text.classList.toggle("change");
});