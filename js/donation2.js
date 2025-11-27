// ==============================
// DONATION POPUP + FORM LOGIC
// ==============================

// Select radio donation type
let selectedAmount = 0;
let selectedDonationType = "one-time";

const amountButtons = document.querySelectorAll(".amount-btn");
const customAmountInput = document.getElementById("customAmount");
const donateBtn = document.getElementById("donateBtn");

// For popup
const confirmPopup = document.getElementById("confirmPopup");
const confirmAmountText = document.getElementById("confirmAmountText");
const confirmTypeText = document.getElementById("confirmTypeText");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");

// Toggle active button state
amountButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        amountButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedAmount = btn.getAttribute("data-amount");
        customAmountInput.value = "";
    });
});

// If typed amount manually
// customAmountInput.addEventListener("input", () => {
//     amountButtons.forEach(b => b.classList.remove("active"));
//     selectedAmount = customAmountInput.value;
// });


// Toggle active button state + show amount inside input 
amountButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        amountButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedAmount = btn.getAttribute("data-amount");
        customAmountInput.value = selectedAmount;  // ✅ Display in placeholder
    });
});


// "Contribute Now" click → open popup
donateBtn.addEventListener("click", () => {
    // Donation type (radio)
    const donationTypeRadio = document.querySelector('input[name="donationType"]:checked');
    selectedDonationType = donationTypeRadio ? donationTypeRadio.value : "one-time";

    // Validate amount
    if (!selectedAmount || selectedAmount <= 0) {
        alert("Please select or enter a valid donation amount");
        return;
    }

    // Show popup values
    confirmAmountText.textContent = "₹" + selectedAmount;
    confirmTypeText.textContent =
        selectedDonationType === "monthly" ? "Monthly Donation" : "One-Time Donation";

    // Open popup
    confirmPopup.style.display = "flex";
});

// Cancel button → Close popup
confirmNo.addEventListener("click", () => {
    confirmPopup.style.display = "none";
});

// Confirm button → Next (Razorpay integration will go here)
confirmYes.addEventListener("click", () => {
    confirmPopup.style.display = "none";
    // ✅ NEXT STEP: Razorpay payment call will be placed here
    console.log("Confirmed. Ready for Razorpay Integration.");
});
