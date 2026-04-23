
const form = document.querySelector("form");
const input = form.querySelectorAll("input[type='text']");


// Elfproef

const BSNnumberInput = document.querySelectorAll(".BSNnumberInput");

BSNnumberInput.forEach(input => {
    input.addEventListener("input", (e) => {
        // Everything that is not a number will be replace by ""
        e.target.value = e.target.value.replace(/\D/g, "")
        const BSNnumber = input.value;

         input.classList.remove("valid", "invalid");

        //  The elfproef only works when 9 digits are entered.
         const numbersOnly = /^[0-9]{9}$/;

    if (numbersOnly.test(BSNnumber)) {
        let sum = (BSNnumber[0] * 9) + (BSNnumber[1] * 8) + (BSNnumber[2] * 7) + (BSNnumber[3] * 6) + (BSNnumber[4] * 5) + (BSNnumber[5] * 4) + (BSNnumber[6] * 3) + (BSNnumber[7] * 2) - BSNnumber[8];
        
        let total = sum / 11;
        console.log(BSNnumber[0]);
        console.log(sum);

        console.log(total);
        // If the total is an integer (no decimals), the BSN number is valid.
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


// full fieldset validation check

const saveButtons = document.querySelectorAll(".saveBtn");

saveButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
    e.preventDefault();

    const currentContainer = btn.closest("fieldset");
    

    const inputs = currentContainer.querySelectorAll("input");
    

    let allValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
        allValid = false;
    }
});

if (allValid) {
    currentContainer.classList.remove("show-error");

    currentContainer.classList.add("fieldsetValid");
} else {
    currentContainer.classList.add("show-error");

    const invalidInputs = currentContainer.querySelector("input:invalid");
    if (invalidInputs) {
        // Focus on the invalid input field
        invalidInputs.focus();
    }
}
    })



    const checkValidityStatus = () => {
    

if (allValid) {
    btn.classList.add("saveBtnVisible");
} else {
    btn.classList.remove("saveBtnVisible");
}
}

input.forEach(input => {
    input.addEventListener("input", checkValidityStatus);
    input.addEventListener("blur", checkValidityStatus);
})

btn.addEventListener("click", (e) => {
    e.preventDefault();

    currentContainer.classList.add("fieldsetValid");

    btn.classList.remove("saveBtnVisible");
})
    checkValidityStatus();

});

// MARK: Dynamisch inladen verkrijgers

// checkRemovebtn checks the number of fieldsets and changes the behavior of the remove button
const checkRemovebtn = () => {
    const removeBtns = document.querySelectorAll(".verkrijgerContainer .remove-btn")

    if (removeBtns.length <= 1) {
        if (removeBtns[0]) removeBtns[0].classList.remove("remove-btn-visible");
    } else {
        removeBtns.forEach(btn => btn.classList.add("remove-btn-visible"));
    }
}

checkRemovebtn();


let verkrijgerCount = 1;
const addBtn = document.querySelector(".field1E .add-btn");

// When clicked on the addBtn, a new form will be added to the html.
addBtn.addEventListener("click", () => {
    // "verkrijgerCount" is used to increase the number of the "verkrijger"
    verkrijgerCount++;

    const newForm = `
    <fieldset class="verkrijgerContainer">
                    <div class="legendRemoveStyling">
                        <legend>Verkrijger ${verkrijgerCount}</legend>
                        <button type="button" class="remove-btn" onclick="this.parentElement.parentElement.remove(); checkRemovebtn();">
                            Verwijder ✗
                        </button>
                    </div>

                    <div class="field1Ee">
                        <label for="">Bsn/RSIN</label>
                        <input type="text" name="BSNnummerVerkrijger${verkrijgerCount}" id="BSNnummerVerkrijger${verkrijgerCount}" minlength="8" maxlength="9" placeholder="" required class="BSNnumberInput">
                        <span>Dit veld is verplicht!</span>
                    </div>
                    <div class="field1Ee">
                        <label for="">Voorletters</label>
                        <input type="text" name="voorlettersVerkrijger${verkrijgerCount}" id="voorlettersVerkrijger${verkrijgerCount}" required>
                        <span>Dit veld is verplicht!</span>
                    </div>

                    <div class="field1Ee">
                        <label for="">Tussenvoegsel(s)</label>
                        <input type="text" name="tussenvoegselVerkrijger${verkrijgerCount}" id="tussenvoegselVerkrijger${verkrijgerCount}">
                    </div>

                    <div class="field1Ee">
                        <label for="">Achternaam</label>
                        <input type="text" name="achternaamVerkrijger${verkrijgerCount}" id="achternaamVerkrijger${verkrijgerCount}" required>
                        <span>Dit veld is verplicht!</span>
                    </div>
                    
                    <fieldset class="field1ERadio">
                        <legend>Krijgt deze verkrijger waarvoor u geen aangifte doet het hele vermogen?</legend>
                        <div class="radioBox">
                            <label for="vermogenNee${verkrijgerCount}" class="radio-button-label">
                                <input type="radio" name="vermogen${verkrijgerCount}" id="vermogenNee${verkrijgerCount}" value="Nee" required>
                                    <span>Nee</span>
                                </label>
                            <label for="vermogenJa${verkrijgerCount}" class="radio-button-label">
                                <input type="radio" name="vermogen${verkrijgerCount}" id="vermogenJa${verkrijgerCount}" value="Ja" required>
                                    <span>Ja</span>
                                </label>
                        </div>
                    </fieldset>
                     <fieldset class="field1ERadio">
                        <legend>Doet deze verkrijger een beroep op diens legitieme portie (wettelijke erfdeel)?</legend>
                        <div class="radioBox">
                            <label for="legitiemeNee${verkrijgerCount}" class="radio-button-label">
                                <input type="radio" name="legitieme${verkrijgerCount}" id="legitiemeNee${verkrijgerCount}" value="Nee" required>
                                <span>Nee</span>
                            </label>
                            <label for="legitiemeJa${verkrijgerCount}" class="radio-button-label">
                                <input type="radio" name="legitieme${verkrijgerCount}" id="legitiemeJa${verkrijgerCount}" value="Ja" required>
                                    <span>Ja</span>
                            </label>
                        </div>
                    </fieldset>

                </fieldset>
    `;

    // The form will be added to the html before the addBtn
    addBtn.insertAdjacentHTML("beforebegin", newForm);

    checkRemovebtn();
})


// Send animation onClick

const sendBtn = document.querySelector(".send");

if (sendBtn) {
    sendBtn.addEventListener("click", (e) => {
        // preventDefault is used to prevent the form from being submitted before the animation is finished.
        e.preventDefault();

        if (form.checkValidity()) {
            
            sendBtn.classList.add("sendAnimation");

            const span = sendBtn.querySelector("span");
            if (span) {
                span.textContent = "Succesvol verzonden!";
            }
            // setTimeout prevents submitting after for 3 seconds
            setTimeout(() => {
                form.submit();
            }, 3000);
        } else {
            form.reportValidity();
        }
    })
}

// Datevalidation

const today = new Date().toISOString().split("T")[0];

document.querySelectorAll('input[type="date"]').forEach((input) => {
  input.max = today;
});