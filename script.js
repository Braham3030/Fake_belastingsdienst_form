console.log("Hello, World! This is a simple JavaScript file.");

const form = document.querySelector("form");
const input = form.querySelectorAll("input[type='text']");
const button = document.querySelector("button");

button.addEventListener("click", () => {

})


// Elfproef

const BSNnumberInput = document.querySelectorAll(".BSNnumberInput");

BSNnumberInput.forEach(input => {
    input.addEventListener("input", () => {
        const BSNnumber = input.value;


         input.classList.remove("valid", "invalid");

    if (BSNnumber.length === 9) {
        let sum = (BSNnumber[0] * 9) + (BSNnumber[1] * 8) + (BSNnumber[2] * 7) + (BSNnumber[3] * 6) + (BSNnumber[4] * 5) + (BSNnumber[5] * 4) + (BSNnumber[6] * 3) + (BSNnumber[7] * 2) - BSNnumber[8];
        
        let total = sum / 11;
        console.log(BSNnumber[0]);
        console.log(sum);

        console.log(total);
        
        if (total % 1 === 0) {
            input.classList.add("valid");
            console.log("Valid BSN number");
        } else {
            input.classList.add("invalid");
            console.log("Invalid BSN number");
        }
    }
});
});


// Dynamic date input today 

let field = document.querySelector("#overlijdensdatum");

let field2 = document.querySelector("#datumHuwelijkseVoorwaarden");

let date = new Date();

field.value = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2, 0) + '-' + date.getDate().toString().padStart(2, 0);

field.max = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2, 0) + '-' + date.getDate().toString().padStart(2, 0);

field2.max = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2, 0) + '-' + date.getDate().toString().padStart(2, 0);

field2.value = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2, 0) + '-' + date.getDate().toString().padStart(2, 0);

console.log(field.value);


// Blur event dynamic date input

const dateInput = document.getElementById("datumHuwelijkseVoorwaarden");
const fieldsetContainer = dateInput.closest(".field1B");

dateInput.addEventListener("blur", () => {
    fieldsetContainer.classList.add("unfocussed");
    
})


// full fieldset validation check

const fieldset = document.querySelector(".field1A");
const inputs = fieldset.querySelectorAll("input");
const customize = fieldset.querySelector(".customize");

checkValidityStatus = () => {
    let allValid = true;
    inputs.forEach(input => {
        if (!input.checkValidity()) {
        allValid = false;
    
    }
});

if (allValid) {
    fieldset.classList.add("fieldsetValid")
}
}

inputs.forEach(input => {
    input.addEventListener("blur", checkValidityStatus);
})

if (customize) {
    customize.addEventListener("click", () => {
        fieldset.classList.remove("fieldsetValid");
    })
}