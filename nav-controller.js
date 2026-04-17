// Universal navbar login controller - include in all pages
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // Update auth-buttons across all pages
    const authButtons = document.querySelector('.auth-buttons');
    if (!authButtons) return;
    
if (isLoggedIn) {
        authButtons.innerHTML = `
            <div class="user-dropdown">
                <button class="user-avatar" onclick="toggleUserMenu()">
                    <span>👤</span>
                    <span>Hi, User</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="dropdown-menu" id="userMenu">
                    <div class="dropdown-header">
                        <i class="fa-solid fa-user-circle"></i>
                        <span>Tài khoản của bạn</span>
                    </div>
                    <a href="payment_history.html" class="dropdown-item">
                        <i class="fa-solid fa-receipt"></i>
                        Lịch sử thanh toán
                    </a>
                    <a href="profile.html" class="dropdown-item">
                        <i class="fa-solid fa-user"></i>
                        Hồ sơ cá nhân
                    </a>
                    <a href="login_out.html?logout=true" class="btn-logout dropdown-item">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        Đăng xuất
                    </a>
                </div>
            </div>
        `;
        
        // Add dropdown toggle script
        window.toggleUserMenu = function() {
            const menu = document.getElementById('userMenu');
            menu.classList.toggle('active');
        };
        
        // Close dropdown on outside click
        document.addEventListener('click', function(e) {
            const dropdown = document.querySelector('.user-dropdown');
            if (!dropdown.contains(e.target)) {
                document.querySelector('.dropdown-menu')?.classList.remove('active');
            }
        });
    } else {
        authButtons.innerHTML = `
            <a href="login_out.html" class="btn-login">Đăng nhập</a>
            <a href="register.html" class="btn-register">Đăng ký</a>
        `;
    }
    
    // Listen for login changes from other tabs
    window.addEventListener('storage', function(e) {
        if (e.key === 'isLoggedIn') {
            location.reload();
        }
    });
});
