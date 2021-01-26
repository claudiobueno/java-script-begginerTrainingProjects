//The idea was to make a random hex value created from an array of all the possible different hex values, loop through them, and concatenate 6 different values to a String that begun with the # character.

(function(){
    const button = document.querySelector("#btn")
    const body = document.querySelector("body")
    const hexValues = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    const value = document.querySelector("#hex-value")

    button.addEventListener("click", changeHex)

    function changeHex(){
        let hex = "#"

        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*hexValues.length)
            hex += hexValues[index]
        }
        value.textContent = hex
        body.style.backgroundColor = hex
    }

})()