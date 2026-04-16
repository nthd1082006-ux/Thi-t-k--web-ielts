document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (!isLoggedIn) {
        // Redirect to login if not logged in
        sessionStorage.setItem('authRedirectTarget', 'payment_history.html');
        window.location.href = 'login_out.html';
        return;
    }
    
    // Update navbar active for payment_history
    const navItems = document.querySelectorAll('.nav-menu a');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Set active on payment history
    const historyLink = document.querySelector('a[href="payment_history.html"]');
    if (historyLink) historyLink.classList.add('active');
    
    // Update auth buttons for logged in user
    const authButtons = document.querySelector('.auth-buttons');
    authButtons.innerHTML = `
        <span style="color: #10b981; font-weight: 600;">
            <i class="fa-solid fa-user-check"></i> Đã đăng nhập
        </span>
        <a href="login_out.html?logout=true" class="btn-login" style="background: #ef4444; padding: 8px 16px;">Đăng xuất</a>
    `;
    
    // Listen for logout
    window.addEventListener('storage', function(e) {
        if (e.key === 'isLoggedIn' && e.newValue !== 'true') {
            window.location.href = 'login_out.html';
        }
    });
});
