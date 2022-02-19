const names= ['Ed', 'John', 'Maria', 'Eliza', 'Burrito', 'Harry', 'Potter'];


for (name of names) {
    console.log(name)
    if(name === 'Maria'){
        console.log("Maria is in my list");
        break;
    }
}



let loading = 0;

while(loading < 100){
    console.log('Websitr is still loading');

    loading ++;
}