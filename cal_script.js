// console.log("i am working")

let screen_value = "";

get_value = (value) => {

    let temp = document.getElementById("screen");
    screen_value += value;
    temp.innerHTML = screen_value;
    console.log(screen_value);
}

result = () => {

    screen_value = eval(screen_value);
    document.getElementById("screen").innerHTML = screen_value;
    console.log(eval(screen_value));
}

clr_screen = () => {

    window.location.reload();
}