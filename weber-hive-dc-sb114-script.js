// Weber County Hive — S.B. 114 case file interactivity
// Handles: jump-nav scroll buttons + the live sales tax exemption calculator

document.querySelectorAll('[data-scroll-to]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.scrollTo);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Interactive exemption calculator
(function() {
  const slider = document.getElementById('equip-slider');
  const equipDisplay = document.getElementById('equip-display');
  const resultTotal = document.getElementById('result-total');
  const resultState = document.getElementById('result-state');
  const resultLocal = document.getElementById('result-local');
  const presetBtns = document.querySelectorAll('.preset-btn');
  const rateBtns = document.querySelectorAll('.rate-btn');

  // Guard: only run on pages that actually have the calculator markup
  if (!slider) return;

  let currentRate = 6.1;
  const stateRate = 4.85;

  function fmtMoney(n) {
    if (n >= 1e9) return '$' + (n / 1e9).toFixed(2).replace(/\.00$/, '') + 'B';
    if (n >= 1e6) return '$' + (n / 1e6).toFixed(n >= 1e8 ? 0 : 1) + 'M';
    return '$' + Math.round(n).toLocaleString();
  }

  function fmtBillion(n) {
    if (n >= 1e9) return '$' + (n / 1e9).toFixed(2).replace(/\.00$/, '') + ' billion';
    return '$' + (n / 1e6).toFixed(0) + ' million';
  }

  function update() {
    const equip = parseFloat(slider.value);
    const localRate = currentRate - stateRate;
    const total = equip * (currentRate / 100);
    const stateShare = equip * (stateRate / 100);
    const localShare = equip * (localRate / 100);

    equipDisplay.textContent = fmtBillion(equip);
    resultTotal.textContent = fmtMoney(total);
    resultState.textContent = fmtMoney(stateShare);
    resultLocal.textContent = fmtMoney(localShare);
  }

  slider.addEventListener('input', () => {
    presetBtns.forEach(b => b.classList.remove('active'));
    update();
  });

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      slider.value = btn.dataset.val;
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      update();
    });
  });

  rateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      rateBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRate = parseFloat(btn.dataset.rate);
      update();
    });
  });

  update();
})();
