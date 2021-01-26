const btn1 = document.querySelector(".btn1")
const div1 = document.querySelector ("#div1")
const colors = ["red", "green", "yellow", "blue", "pink", "purple"]

div1.style.backgroundColor = "violet"
btn1.addEventListener("click", changeBackground)

function changeBackground(){
    const colorIndex = parseInt(Math.random()*colors.length)
    div1.style.backgroundColor = colors[colorIndex]
}

//now the goal is: buid a code that change a background image of the div2, based on a array with 8 images

const image = new Array();
image[0] = "../images/"
