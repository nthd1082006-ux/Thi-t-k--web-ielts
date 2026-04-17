const courses = {
    intensive: {
        title: "IELTS Intensive (Cấp tốc)",
        desc: "2-3 tháng • Cần bằng gấp • 24 buổi • Cam kết đầu ra 6.0+",
        classes: [
            { id: 1, schedule: "Thứ 2, 4, 6 (Tối)", time: "18:00 - 20:00", teacher: "Th.s. Nam (IELTS 8.5)", size: "12/15", full: false },
            { id: 2, schedule: "Thứ 3, 5, 7 (Sáng)", time: "8:00 - 10:00", teacher: "Ms. Lan (IELTS 8.0)", size: "10/15", full: false },
            { id: 3, schedule: "Thứ 2, 4, 6 (Chiều)", time: "14:00 - 16:00", teacher: "Th.s. Minh (IELTS 9.0)", size: "14/15", full: true },
            { id: 4, schedule: "Thứ 3, 5, 7 (Tối)", time: "19:00 - 21:00", teacher: "Ms. Hoa (IELTS 8.0)", size: "8/15", full: false },
            { id: 5, schedule: "Cuối tuần (T7-CN)", time: "9:00 - 11:00", teacher: "Th.s. Huy (IELTS 8.5)", size: "11/15", full: false },
            { id: 6, schedule: "Thứ 2→6 linh hoạt", time: "17:00 - 19:00", teacher: "Ms. Ngọc (IELTS 8.0)", size: "9/15", full: false }
        ]
    },


    foundation: {
        title: "IELTS Foundation",
        desc: "Từ 0 → 4.5+ • 48 buổi • Xây dựng nền tảng vững chắc",
        classes: [
            { id: 1, schedule: "Thứ 2, 4, 6 (Sáng)", time: "7:30 - 9:30", teacher: "Ms. Anh (IELTS 7.5)", size: "13/15", full: false },
            { id: 2, schedule: "Thứ 3, 5, 7 (Chiều)", time: "15:00 - 17:00", teacher: "Th.s. Tuấn (IELTS 8.0)", size: "9/15", full: false },
            { id: 3, schedule: "Cuối tuần (CN)", time: "14:00 - 16:00", teacher: "Ms. Phương (IELTS 7.5)", size: "11/15", full: false },
            { id: 4, schedule: "Thứ 2, 4 (Tối)", time: "20:00 - 22:00", teacher: "Th.s. Long (IELTS 8.0)", size: "7/15", full: false },
            { id: 5, schedule: "Thứ 3→7 linh hoạt", time: "18:30 - 20:30", teacher: "Ms. Mai (IELTS 8.0)", size: "12/15", full: false },
            { id: 6, schedule: "T7 sáng", time: "10:00 - 12:00", teacher: "Th.s. Đức (IELTS 8.5)", size: "10/15", full: false }
        ]
    },

    master: {
        title: "IELTS Master 7.5+",
        desc: "Luyện sâu kỹ năng • 36 buổi • Cam kết 7.5+",
        classes: [
            { id: 1, schedule: "Thứ 5, 7, CN", time: "19:00 - 21:30", teacher: "Ms. Linh (IELTS 8.5)", size: "8/12", full: false },
            { id: 2, schedule: "Thứ 2, 4 (VIP)", time: "20:00 - 22:30", teacher: "Th.s. Khánh (IELTS 9.0)", size: "6/12", full: false },
            { id: 3, schedule: "Cuối tuần đầy đủ", time: "9:00 - 12:00", teacher: "Ms. Thảo (IELTS 8.5)", size: "11/12", full: true },
            { id: 4, schedule: "Thứ 3, 6 sáng", time: "8:30 - 11:00", teacher: "Th.s. Vinh (IELTS 8.0)", size: "9/12", full: false },
            { id: 5, schedule: "Thứ 7 chiều", time: "15:00 - 17:30", teacher: "Ms. Hương (IELTS 8.5)", size: "7/12", full: false },
            { id: 6, schedule: "Linh hoạt tối", time: "21:00 - 23:00", teacher: "Th.s. Quang (IELTS 8.5)", size: "10/12", full: false }
        ]
    },

    online: {
        title: "IELTS Online",
        desc: "Học linh hoạt tại nhà • 42 buổi • Live + ghi hình",
        classes: [
            { id: 1, schedule: "Tự học + Live 3x/tuần", time: "20:00 Thứ 4,6,CN", teacher: "Ms. Trang (IELTS 8.0)", size: "25/30", full: false },
            { id: 2, schedule: "Live tối hàng ngày", time: "19:00 - 20:30", teacher: "Th.s. Bình (IELTS 8.5)", size: "22/30", full: false },
            { id: 3, schedule: "Sáng linh hoạt", time: "9:00 - 10:30", teacher: "Ms. Yến (IELTS 8.0)", size: "28/30", full: false },
            { id: 4, schedule: "Cuối tuần dài", time: "14:00 - 17:00 T7-CN", teacher: "Th.s. Sơn (IELTS 8.5)", size: "18/30", full: false },
            { id: 5, schedule: "Tối muộn", time: "22:00 - 23:30", teacher: "Ms. Linh (IELTS 8.0)", size: "20/30", full: false },
            { id: 6, schedule: "Sáng sớm", time: "6:30 - 8:00", teacher: "Th.s. Hùng (IELTS 8.5)", size: "15/30", full: false }
        ]
    },

    speaking: {
        title: "IELTS Speaking Master",
        desc: "Trọng tâm Speaking • 30 buổi • Fluency 7.5+",
        classes: [
            { id: 1, schedule: "Thứ 3, 5, 7", time: "20:00 - 21:30", teacher: "Ms. Quỳnh (IELTS 8.5 Speaking)", size: "10/12", full: false },
            { id: 2, schedule: "T7-CN Speaking", time: "16:00 - 18:00", teacher: "Th.s. Đạt (IELTS 8.0)", size: "9/12", full: false },
            { id: 3, schedule: "Thứ 4, 6", time: "18:30 - 20:00", teacher: "Ms. Nhi (IELTS 9.0 Speaking)", size: "11/12", full: true },
            { id: 4, schedule: "Linh hoạt tối", time: "21:00 - 22:30", teacher: "Th.s. Tùng (IELTS 8.5)", size: "8/12", full: false },
            { id: 5, schedule: "Sáng T7", time: "9:00 - 10:30", teacher: "Ms. Vy (IELTS 8.0)", size: "7/12", full: false },
            { id: 6, schedule: "Chiều CN", time: "15:00 - 16:30", teacher: "Th.s. Nam (IELTS 8.5)", size: "10/12", full: false }
        ]
    },

    writing: {
        title: "IELTS Writing Expert",
        desc: "Trọng tâm Writing Task 1 & 2 • 28 buổi",
        classes: [
            { id: 1, schedule: "Thứ 2, 4, 6", time: "20:30 - 22:00", teacher: "Ms. Hiền (IELTS 8.5 Writing)", size: "9/12", full: false },
            { id: 2, schedule: "Thứ 3, 5 sáng", time: "8:00 - 9:30", teacher: "Th.s. Phong (IELTS 8.0)", size: "8/12", full: false },
            { id: 3, schedule: "Cuối tuần", time: "10:30 - 12:00", teacher: "Ms. Thu (IELTS 8.5)", size: "11/12", full: false },
            { id: 4, schedule: "Thứ 7 chiều", time: "17:00 - 18:30", teacher: "Th.s. Kiên (IELTS 8.0)", size: "7/12", full: false },
            { id: 5, schedule: "Thứ 7 tối", time: "21:00 - 22:30", teacher: "Ms. Linh (IELTS 8.5)", size: "10/12", full: false },
            { id: 6, schedule: "CN sáng", time: "11:00 - 12:30", teacher: "Th.s. Toàn (IELTS 8.5)", size: "9/12", full: false }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    let courseType = urlParams.get('type');

    // Detect course from filename since <script src="khoahoc.js?type=..."> query ignored by browser
    if (!courseType || !courses[courseType]) {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('khoahoc1.html') || path.includes('khoahoc1')) courseType = 'intensive';
        else if (path.includes('khoahoc2.html') || path.includes('khoahoc2')) courseType = 'foundation';
        else if (path.includes('khoahoc3.html') || path.includes('khoahoc3')) courseType = 'master';
        else if (path.includes('khoahoc4.html') || path.includes('khoahoc4')) courseType = 'online';
        else if (path.includes('khoahoc5.html') || path.includes('khoahoc5')) courseType = 'speaking';
        else if (path.includes('khoahoc6.html') || path.includes('khoahoc6')) courseType = 'writing';
        else courseType = 'intensive';
    }

    const course = courses[courseType];

    if (!course) {
        document.body.innerHTML = '<h1 style="text-align: center; padding: 50px; color: #64748b;">Khóa học không tồn tại</h1>';
        return;
    }

    document.getElementById('courseTitle').textContent = course.title;
    document.getElementById('courseDesc').textContent = course.desc;

    const grid = document.getElementById('classesGrid');
    grid.innerHTML = course.classes.map(classItem => `
        <div class="class-card ${classItem.full ? 'class-full' : ''}" onclick="${classItem.full ? '' : `registerClass(${classItem.id})`} style="animation-delay: ${0.1 * classItem.id}s">
            <div class="class-header">
                <span class="class-type">Lớp ${classItem.id}</span>
                <h3 class="class-name">${classItem.schedule}</h3>
            </div>
            <div class="class-details">
                <div class="detail-row">
                    <i class="fa-solid fa-clock detail-icon"></i>
                    <span>${classItem.time}</span>
                </div>
                <div class="detail-row">
                    <i class="fa-solid fa-chalkboard-teacher detail-icon"></i>
                    <span>${classItem.teacher}</span>
                </div>
                <div class="detail-row">
                    <i class="fa-solid fa-users detail-icon"></i>
                    <span>${classItem.size}</span>
                </div>
            </div>
            <div class="class-status">
                ${classItem.full ? '<span class="status-full">🔴 Lớp đầy</span>' : '<span class="status-open">🟢 Còn chỗ</span>'}
            </div>
        </div>
    `).join('');
});


document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const courseType = urlParams.get('type') || Object.keys(courses)[0];
    const course = courses[courseType];

    if (!course) {
        document.body.innerHTML = '<h1 style="text-align: center; padding: 50px; color: #64748b;">Khóa học không tồn tại</h1>';
        return;
    }

    document.getElementById('courseTitle').textContent = course.title;
    document.getElementById('courseDesc').textContent = course.desc;

    const grid = document.getElementById('classesGrid');
    grid.innerHTML = course.classes.map(classItem => `
        <div class="class-card ${classItem.full ? 'class-full' : ''}" onclick="${classItem.full ? '' : `registerClass(${classItem.id})`}">
            <div class="class-header">
                <span class="class-type">Lớp ${classItem.id}</span>
                <h3 class="class-name">${classItem.schedule}</h3>
            </div>
            <div class="class-details">
                <div class="detail-row">
                    <i class="fa-solid fa-clock detail-icon"></i>
                    <span>${classItem.time}</span>
                </div>
                <div class="detail-row">
                    <i class="fa-solid fa-chalkboard-teacher detail-icon"></i>
                    <span>${classItem.teacher}</span>
                </div>
                <div class="detail-row">
                    <i class="fa-solid fa-users detail-icon"></i>
                    <span>${classItem.size}</span>
                </div>
            </div>
            <div class="class-status">
                ${classItem.full ? '<span class="status-full">🔴 Lớp đầy</span>' : '<span class="status-open">🟢 Còn chỗ</span>'}
            </div>
        </div>
    `).join('');
});

function registerClass(classId) {
    const courseType = new URLSearchParams(window.location.search).get('type') || 'intensive';
    const username = localStorage.getItem('user') || 'Khách';
    const course = courses[courseType];

    // Add to payment history
    const history = JSON.parse(localStorage.getItem('paymentHistory') || '[]');
    history.unshift({
        id: Date.now(),
        course: course.title,
        classId: classId,
        date: new Date().toLocaleString('vi-VN'),
        amount: '6.9tr',
        status: 'pending'
    });
    localStorage.setItem('paymentHistory', JSON.stringify(history.slice(0, 10)));

    alert(`✅ Đăng ký thành công!\nKhóa: ${course.title}\nLớp: ${classId}\n→ Chuyển thanh toán...`);
    window.location.href = 'select.html'; // or pay.html
}