console.log("Hello, World! This is a simple JavaScript file.");

const form = document.querySelector("form");
const input = form.querySelectorAll("input[type='text']");
const button = document.querySelector("button");

button.addEventListener("click", () => {

})


// Elfproef

const BSNnumberInput = document.querySelector(".BSNnumberInput");

BSNnumberInput.addEventListener("input", () => {
    const BSNnumber = BSNnumberInput.value;

    if (BSNnumber.length === 9) {
        BSNnumber.split("")
        let sum = BSNnumber[0] * 9 + BSNnumber[1] * 8 + BSNnumber[2] * 7 + BSNnumber[3] * 6 + BSNnumber[4] * 5 + BSNnumber[5] * 4 + BSNnumber[6] * 3 + BSNnumber[7] * 2 - BSNnumber[8] * -1;
        
        total = sum / 11;
        console.log(BSNnumber[0]);
        console.log(sum);

        console.log(total);
        
        if (total % 1 === 0) {
            console.log("Valid BSN number");
        } else {
            console.log("Invalid BSN number");
        }

    }
})


// Dynamic date input today 

let field = document.querySelector("#overlijdensdatum");

let date = new Date();

field.value = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2, 0) + '-' + date.getDate().toString().padStart(2, 0);

field.max = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2, 0) + '-' + date.getDate().toString().padStart(2, 0);


console.log(field.value);