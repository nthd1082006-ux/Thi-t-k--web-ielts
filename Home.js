
// 1. Mobile Menu (dùng cho tất cả trang)
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });
}

// 2. Stats Counter Animation (chỉ chạy khi có .counter)
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    let count = 0;
    const increment = Math.ceil(target / 80);
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        el.textContent = count.toLocaleString('vi-VN') + (target === 98 ? '%' : '+');
    }, 30);
}

const counters = document.querySelectorAll('.counter');
if (counters.length > 0) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// 3. Tab Switch (chỉ dùng cho trang hoc-vien-giang-vien.html)
const tabButtons = document.querySelectorAll('.tab-btn');
if (tabButtons.length > 0) {
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            const target = btn.getAttribute('data-tab');
            const targetContent = document.getElementById(target);
            if (targetContent) targetContent.classList.add('active');
        });
    });
}

// 4. Form Tư Vấn (chỉ chạy trên home.html)
const consultForm = document.getElementById('consultForm');

if (consultForm) {
    consultForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (!fullName || !phone) {
            alert('Vui lòng điền đầy đủ Họ tên và Số điện thoại!');
            return;
        }

        const btn = this.querySelector('.submit-btn');
        const originalText = btn.innerHTML;

        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Đang gửi...`;
        btn.disabled = true;

        setTimeout(() => {
            alert(` Cảm ơn ${fullName}!\n\nThông tin tư vấn đã được gửi thành công.\nIELTS Global sẽ liên hệ bạn trong ít phút tới!`);

            consultForm.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1800);
    });
}

// 5. Hiển thị thông tin chi tiết khi chạm / nhấn ảnh giáo viên và học sinh
const infoCards = document.querySelectorAll('.team-item, .student-card');
if (infoCards.length > 0) {
    infoCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('details-visible');
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.team-item') && !event.target.closest('.student-card')) {
            infoCards.forEach(card => card.classList.remove('details-visible'));
        }
    });
}
/* TẠO OVERLAY TỰ ĐỘNG */
document.addEventListener("DOMContentLoaded", ()=>{
  const fade = document.createElement("div");
  fade.id = "fadeScreen";
  document.body.appendChild(fade);
});

/* HÀM CHUYỂN TRANG */
function goPage(url){
  const fade = document.getElementById("fadeScreen");

  if(!fade){
    window.location.href = url;
    return;
  }

  fade.classList.add("active");

  setTimeout(()=>{
    window.location.href = url;
  }, 400);
}



console.log('%c✅ IELTS GLOBAL Script loaded successfully on home.html!', 'color: #4f46e5; font-weight: bold; font-size: 14px');

// ===== AUTHENTICATION LOGIC =====
// Global user menu toggle
let userMenuOpen = false;

function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdownMenu');
    if (dropdown) {
        dropdown.classList.toggle('active');
        userMenuOpen = dropdown.classList.contains('active');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.user-dropdown')) {
        const dropdowns = document.querySelectorAll('.dropdown-menu.active');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        userMenuOpen = false;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('user') || 'User';
    const authButtons = document.querySelector('.auth-buttons');
    const hamburger = document.getElementById('hamburger');
    
    if (isLoggedIn && authButtons) {
        // Hide login/register buttons
        authButtons.style.display = 'none';
        
        // Create user menu
        const userMenu = document.createElement('div');
        userMenu.className = 'user-menu';
        userMenu.innerHTML = `
            <div class="user-dropdown">
                <button class="user-avatar" onclick="toggleUserMenu()">
                    <i class="fa-solid fa-user"></i>
                    <span>${username.slice(0,1).toUpperCase()}</span>
                </button>
                <div class="dropdown-menu" id="userDropdownMenu">
                    <div class="dropdown-header">
                        <i class="fa-solid fa-user"></i>
                        <strong>${username}</strong>
                    </div>
                    <a href="#" onclick="logout(); return false;" class="dropdown-item">
                        <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất
                    </a>
                </div>
            </div>
        `;
        
        // Insert after nav-menu (same position as auth-buttons)
        if (hamburger) {
            hamburger.parentNode.insertBefore(userMenu, hamburger);
        } else {
            authButtons.parentNode.replaceChild(userMenu, authButtons);
        }
    }
});

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('pass'); // Security
    location.reload();
}

// ===== PROTECTED ROUTES =====
function goToTest() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'form_test.html';
    } else {
        alert('Cần đăng nhập để đăng  kiểm tra!');
        sessionStorage.setItem('authRedirectTarget', 'form_test.html');
        window.location.href = 'login_out.html';
    }
}
function goToCourse(courseType) {
    const courseMap = {
        'intensive1':  'lotrinh1.html',
        'foundation1': 'lotrinh2.html',
        'master1':     'lotrinh3.html',
        'online1':     'lotrinh4.html',
        'speaking1':   'lotrinh5.html',
        'writing1':    'lotrinh6.html'
    };

    const targetPage = courseMap[courseType];

    if (!targetPage) {
        alert('Khóa học này chưa có lộ trình chi tiết!');
        return;
    }
    window.location.href = targetPage;
}
