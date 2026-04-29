const form = document.querySelector("form");
const input = form.querySelectorAll("input[type='text']");

// Elfproef

const BSNnumberInput = document.querySelectorAll(".BSNnumberInput");

BSNnumberInput.forEach((input) => {
	input.addEventListener("input", (e) => {
		// Everything that is not a number will be replace by ""
		e.target.value = e.target.value.replace(/\D/g, "");
		const BSNnumber = input.value;

		input.classList.remove("valid", "invalid");

		//  The elfproef only works when 9 digits are entered.
		const numbersOnly = /^[0-9]{9}$/;

		if (numbersOnly.test(BSNnumber)) {
			let sum =
				BSNnumber[0] * 9 + BSNnumber[1] * 8 + BSNnumber[2] * 7 + BSNnumber[3] * 6 + BSNnumber[4] * 5 + BSNnumber[5] * 4 + BSNnumber[6] * 3 + BSNnumber[7] * 2 - BSNnumber[8];

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

saveButtons.forEach((btn) => {
	const currentContainer = btn.closest("fieldset");

	const inputs = currentContainer.querySelectorAll("input");

	const checkValidityStatus = () => {
		let allValid = true;

		inputs.forEach((input) => {
			// The show-error span is dynamically adjusted based on the validity check
			const errorSpan = input.parentElement.querySelector(".show-error");

			if (!input.checkValidity()) {
				// allValid is set to false
				allValid = false;

				if (errorSpan) {
					// If the input is invalid, missing any value. It will then show the following textContent
					if (input.validity.valueMissing) {
						errorSpan.textContent = "Dit veld is verplicht!";
						// If the input is invalid, mismatched according to the pattern. It will then show the following textContent
					} else if (input.validity.patternMismatch) {
						errorSpan.textContent = "Ongeldig formaat!";
					}
				}
			}
		});

		if (allValid) {
			btn.classList.add("saveBtnVisible");
		} else {
			btn.classList.remove("saveBtnVisible");
		}
		return allValid;
	};

	inputs.forEach((input) => {
		input.addEventListener("input", checkValidityStatus);
		input.addEventListener("blur", checkValidityStatus);
	});

	btn.addEventListener("click", (e) => {
		e.preventDefault();

		const formValidity = checkValidityStatus();

		if (formValidity) {
			currentContainer.classList.remove("form-error");
			currentContainer.classList.add("fieldsetValid");
			btn.classList.remove("saveBtnVisible");

			// Scroll to the next sibling after clicking the save button
			const nextFieldset = currentContainer.nextElementSibling;
			if (nextFieldset) {
				setTimeout(() => {
					nextFieldset.scrollIntoView({
						behavior: "smooth",
					});
				}, 300);
			}
		} else {
			currentContainer.classList.add("form-error");

			currentContainer.classList.remove("fieldsetValid");

			const invalidInputs = currentContainer.querySelector("input:invalid");
			if (invalidInputs) {
				// Focus on the invalid input field
				invalidInputs.focus();
			}
		}
	});
	checkValidityStatus();
});

// Radio button scroll into view

const allRadioButtonns = document.querySelectorAll('input[type="radio"]');

allRadioButtonns.forEach((radio) => {
	radio.addEventListener("change", (e) => {
		// scrolls to the closest fieldset
		const currentFieldset = e.target.closest("fieldset");

		setTimeout(() => {
			currentFieldset.scrollIntoView(
				{
					behavior: "smooth",
				},
				300,
			);
		});
	});
});

// DatePicker scroll into view

const allDatePicker = document.querySelectorAll('.field1Bb > input[type="date"]');

allDatePicker.forEach((date) => {
	date.addEventListener("change", (e) => {
		const currentFieldset = e.target.closest("fieldset");

		setTimeout(() => {
			currentFieldset.scrollIntoView(
				{
					behavior: "smooth",
				},
				300,
			);
		});
	});
});

// MARK: Dynamisch inladen verkrijgers

// checkRemovebtn checks the number of fieldsets and changes the behavior of the remove button
const checkRemovebtn = () => {
	const removeBtns = document.querySelectorAll(".verkrijgerContainer .remove-btn");

	if (removeBtns.length <= 1) {
		if (removeBtns[0]) removeBtns[0].classList.remove("remove-btn-visible");
	} else {
		removeBtns.forEach((btn) => btn.classList.add("remove-btn-visible"));
	}
};

checkRemovebtn();

let verkrijgerCount = 1;
const addBtn = document.querySelector(".field1E .add-btn");

// When clicked on the addBtn, a new form will be added to the html.
addBtn.addEventListener("click", () => {
	// "verkrijgerCount" is used to increase the number of the "verkrijger"
	verkrijgerCount++;

	const newForm = `
    <fieldset class="verkrijgerContainer animateTo">
                    <fieldset class="fieldEeContainer">
                        <legend class="legendRemoveStyling">
                            <span>Verkrijger ${verkrijgerCount}</span>
                            <button type="button" class="remove-btn" onclick="this.closest('.verkrijgerContainer').remove(); checkRemovebtn(); reCalc();">
                                Verwijder ✗
                            </button>
                        </legend>

                        <div class="field1Ee">
                            <label for="BSNnummerVerkrijger${verkrijgerCount}">BSN/RSIN<span>*</span></label>
                            <input type="text" name="BSNnummerVerkrijger${verkrijgerCount}" id="BSNnummerVerkrijger${verkrijgerCount}" minlength="8" maxlength="9" placeholder="" required class="BSNnumberInput">
                            <span class="show-error">Dit veld is verplicht!</span>
                        </div>
                        <div class="field1Ee">
                            <label for="voorlettersVerkrijger${verkrijgerCount}">Voorletters<span>*</span></label>
                            <input type="text" name="voorlettersVerkrijger${verkrijgerCount}" id="voorlettersVerkrijger${verkrijgerCount}" pattern="[a-zA-Z]{2,10}" required>
                            <span class="show-error">Dit veld is verplicht!</span>
                        </div>

                        <div class="field1Ee">
                            <label for="tussenvoegselVerkrijger${verkrijgerCount}">Tussenvoegsel(s)</label>
                            <input type="text" name="tussenvoegselVerkrijger${verkrijgerCount}" id="tussenvoegselVerkrijger${verkrijgerCount}">
                        </div>

                        <div class="field1Ee">
                            <label for="achternaamVerkrijger${verkrijgerCount}">Achternaam<span>*</span></label>
                            <input type="text" name="achternaamVerkrijger${verkrijgerCount}" id="achternaamVerkrijger${verkrijgerCount}" pattern="[a-zA-Z]{2,30}" required>
                            <span class="show-error">Dit veld is verplicht!</span>
                        </div>
                    </fieldset>
                    
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

	// Re-calculate the number of the span

	const reCalc = () => {
		const allSpans = document.querySelectorAll(".verkrijgerContainer");

		allSpans.forEach((container, index) => {
			const titleSpan = container.querySelector(".legendRemoveStyling > span");

			if (titleSpan) {
				// The textContent adjustes the current number based on the amount of fieldsets on the screen
				titleSpan.textContent = `Verkrijger ${index + 1}`;
			}
		});
	};

	// Scroll to the newly added form
	const allForms = document.querySelectorAll(".verkrijgerContainer");

	const newAdded = allForms[allForms.length - 1];

	if (newAdded) {
		setTimeout(() => {
			newAdded.scrollIntoView({
				behavior: "smooth",
				block: "end",
			});
		}, 100);
	}

	reCalc();
});

// Send animation onClick

const sendBtn = document.querySelector(".send");

if (sendBtn) {
	sendBtn.addEventListener("click", (e) => {
		// preventDefault is used to prevent the form from being submitted before the animation is finished.
		e.preventDefault();

		const allInputs = form.querySelectorAll("input");

		// Check if the input is hidden by checking the computed styles of the input
		allInputs.forEach((input) => {
			let isHidden = false;
			let elementCheck = input;

			// while is being used to check the input and all of its parent elements until it reaches the form element
			while (elementCheck && elementCheck !== form) {
				const styles = window.getComputedStyle(elementCheck);

				// Check for opacity and pointer-events
				if (styles.opacity === "0" || styles.pointerEvents === "none") {
					isHidden = true;
					// If the input is hidden, it will break the forEach loop and set the input to disabled
					break;
				}
				// Check the parent element
				elementCheck = elementCheck.parentElement;
			}
			// If the input is hidden, it will be disabled
			input.disabled = isHidden;
		});

		if (form.checkValidity()) {
			sendBtn.classList.add("sendAnimation");

			const span = sendBtn.querySelector("span");
			setTimeout(() => {
				if (span) {
					span.textContent = "✅ Succesvol verzonden!";
				}
			}, 400);

			sendBtn.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
			// setTimeout prevents submitting after for 3 seconds
			setTimeout(() => {
				form.submit();
			}, 3000);
		} else {
			form.classList.add("form-error");

			allInputs.forEach((input) => {
				if (!input.disabled && !input.checkValidity()) {
					const errorSpan = input.parentElement.querySelector(".show-error");

					// Error message will be based upon validity state of the input
					if (errorSpan) {
						if (input.validity.valueMissing) {
							errorSpan.textContent = "Dit veld is verplicht!";
						} else if (input.validity.patternMismatch) {
							errorSpan.textContent = "Ongeldig formaat!";
						}
					}
				}
			});

			const firstInvalidInput = form.querySelector("input:invalid:not(:disabled)");

			if (firstInvalidInput) {
				firstInvalidInput.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});

				setTimeout(() => {
					firstInvalidInput.focus();
				}, 400);
			}
		}
	});
}

// Date validation
// Obtained from Justin

const today = new Date().toISOString().split("T")[0];

document.querySelectorAll('input[type="date"]').forEach((input) => {
	input.max = today;
});
