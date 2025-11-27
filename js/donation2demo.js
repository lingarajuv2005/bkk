// Handle amount button click (make active)
const amountButtons = document.querySelectorAll(".amount-btn");
const customAmountInput = document.getElementById("customAmount");

amountButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        amountButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        customAmountInput.value = ""; // clear custom when clicking preset
    });
});

// If user types a custom amount, remove active from preset
customAmountInput.addEventListener("input", () => {
    amountButtons.forEach(b => b.classList.remove("active"));
});


// Get selected donation amount function
function getSelectedAmount() {
    let activeBtn = document.querySelector(".amount-btn.active");
    if (activeBtn) {
        return activeBtn.getAttribute("data-amount");
    } else if (customAmountInput.value) {
        return customAmountInput.value;
    }
    return 0;
}


// Handle donate button click
document.getElementById("donateBtn").addEventListener("click", function () {
    const amount = getSelectedAmount();
    if (amount <= 0) {
        alert("Please select or enter a donation amount");
        return;
    }

    // Basic validation for required fields
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    if (!fullName || !email || !mobile) {
        alert("Please fill all required fields before continuing");
        return;
    }

    // ✅ Razorpay payment integration will go here (server key needed)
    alert("Razorpay integration coming next — Amount: ₹" + amount);
});
