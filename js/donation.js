const oneTimeAmounts = [500, 1000, 2000, 5000];
const monthlyAmounts = [350, 500, 1200, 1500];
const yearlyAmounts = [1000, 2000, 5000, 8000];

const btnOneTime = document.getElementById('btnOneTime');
const btnMonthly = document.getElementById('btnMonthly');
const btnYearly = document.getElementById('btnYearly');
const presetAmounts = document.getElementById('presetAmounts');
const customAmountInput = document.getElementById('customAmount');
const summaryAmount = document.getElementById('summaryAmount');

function updateSummaryAmount() {
  let val = Number(customAmountInput.value) || 0;
  summaryAmount.textContent = `₹${val.toLocaleString("en-IN")}`;
}

// PRESERVE active pill, custom amount, and summary sync
function renderAmounts(amounts) {
  presetAmounts.innerHTML = '';
  amounts.forEach(val => {
    const btn = document.createElement('button');
    btn.className = 'amount-pill';
    btn.textContent = `₹${val.toLocaleString('en-IN')}`;
    btn.type = 'button';
    btn.onclick = () => {
      presetAmounts.querySelectorAll('.amount-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      customAmountInput.value = val;
      updateSummaryAmount();
    };
    presetAmounts.appendChild(btn);
  });
}

// Tab click handlers
btnOneTime.onclick = () => {
  btnOneTime.classList.add('active');
  btnMonthly.classList.remove('active');
  btnYearly.classList.remove('active');
  renderAmounts(oneTimeAmounts);
  customAmountInput.value = '';
  updateSummaryAmount();
};

btnMonthly.onclick = () => {
  btnOneTime.classList.remove('active');
  btnMonthly.classList.add('active');
  btnYearly.classList.remove('active');
  renderAmounts(monthlyAmounts);
  customAmountInput.value = '';
  updateSummaryAmount();
};

btnYearly.onclick = () => {
  btnOneTime.classList.remove('active');
  btnMonthly.classList.remove('active');
  btnYearly.classList.add('active');
  renderAmounts(yearlyAmounts);
  customAmountInput.value = '';
  updateSummaryAmount();
};

// Custom amount typing should live update summary
customAmountInput.addEventListener('input', () => {
  presetAmounts.querySelectorAll('.amount-pill').forEach(x => x.classList.remove('active'));
  updateSummaryAmount();
});

// INIT
renderAmounts(oneTimeAmounts);
updateSummaryAmount();
