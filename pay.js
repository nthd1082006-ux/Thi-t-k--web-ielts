const TOTAL_SEC = 300;
let remaining = TOTAL_SEC;
let timerInterval = null;
let currentCourse = '';

function pad(n) { return String(n).padStart(2, '0'); }

function openModal(course) {
  currentCourse = course;
  document.getElementById('modal-course-name').textContent = course;
  document.getElementById('receipt-course').textContent = course;
  showScreen('screen-thank');
  document.getElementById('paymentModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  clearInterval(timerInterval);
  
  const modal = document.getElementById('paymentModal');
  if (modal) modal.classList.remove('active');
  
  document.body.style.overflow = '';
  
  // Chuyển về danh sách khóa học
  setTimeout(() => {
    window.location.href = 'Danhsachkhoahoc.html';
  }, 300);   // delay nhỏ để mượt hơn
}

function goHome() {
  clearInterval(timerInterval);        // Dừng timer nếu còn chạy
  
  const modal = document.getElementById('paymentModal');
  if (modal) modal.classList.remove('active');
  
  document.body.style.overflow = '';
  
  // Chuyển về trang chủ
  window.location.href = 'Home.html';
}

function retryPayment() {
  showScreen('screen-thank');   // Quay lại màn cảm ơn để thử thanh toán lại
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('paymentModal')) closeModal();
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goToQR() {
  remaining = TOTAL_SEC;
  const txn = 'TXN' + Date.now().toString().slice(-6);
  document.getElementById('txn-id').textContent = txn;
  document.getElementById('receipt-txn').textContent = '#' + txn;
  document.getElementById('qr-course-label').innerHTML = `<strong>${currentCourse}</strong> — Còn <strong id="timer-text">5:00</strong>`;
  document.getElementById('qrExpired').style.display = 'none';
  showScreen('screen-qr');
  updateTimerUI();
  clearInterval(timerInterval);
  timerInterval = setInterval(tick, 1000);
}

function tick() {
  remaining--;
  if (remaining <= 0) {
    clearInterval(timerInterval);
    remaining = 0;
    updateTimerUI();
    document.getElementById('qrExpired').style.display = 'flex';
    setTimeout(() => {
      document.getElementById('err-title').textContent = 'Hết thời gian — Đăng ký bị huỷ';
      document.getElementById('err-sub').textContent = 'Bạn chưa thanh toán trong 5 phút, đăng ký đã bị huỷ tự động.';
      document.getElementById('err-reason').textContent = 'Mã QR hết hiệu lực. Bạn có thể đăng ký lại bất cứ lúc nào.';
      showScreen('screen-error');
    }, 1500);
    return;
  }
  updateTimerUI();
}

function updateTimerUI() {
  const m = Math.floor(remaining / 60);
  const s = remaining % 60;
  const txt = pad(m) + ':' + pad(s);
  document.getElementById('timer-text').textContent = txt;
  document.getElementById('timer-text2').textContent = txt;
  const pct = (remaining / TOTAL_SEC) * 100;
  const bar = document.getElementById('timerBar');
  bar.style.width = pct + '%';
  bar.style.background = pct <= 20 ? '#ef4444' : pct <= 50 ? '#f59e0b' : '#22c55e';
}

function confirmSuccess() {
  clearInterval(timerInterval);
  const now = new Date();
  const txn = document.getElementById('txn-id').textContent;
  document.getElementById('receipt-time').textContent = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) + ' — ' + now.toLocaleDateString('vi-VN');
  showScreen('screen-success');
  
  // Save to localStorage for payment_history
  const payment = {
    course: currentCourse,
    txn: txn,
    time: document.getElementById('receipt-time').textContent,
    status: 'Đã thanh toán'
  };
  let history = JSON.parse(localStorage.getItem('ielts_payments')) || [];
  history.unshift(payment); // Add to top
  localStorage.setItem('ielts_payments', JSON.stringify(history));
}

function cancelPayment() {
  clearInterval(timerInterval);
  document.getElementById('err-title').textContent = 'Đăng ký bị huỷ';
  document.getElementById('err-sub').textContent = 'Bạn đã huỷ trước khi hoàn tất thanh toán.';
  document.getElementById('err-reason').textContent = 'Giao dịch bị huỷ theo yêu cầu. Bạn có thể đăng ký lại bất cứ lúc nào.';
  showScreen('screen-error');
}

function retryPayment() { 
  openModal(currentCourse); 
}

document.addEventListener('keydown', e => { 
  if (e.key === 'Escape') closeModal(); 
});
