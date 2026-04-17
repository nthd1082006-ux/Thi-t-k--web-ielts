function goToCourse(courseType) {
    const courseMap = {
        'intensive1': 'khoahoc1.html',
        'foundation1': 'khoahoc2.html',
        'master1': 'khoahoc3.html',
        'online1': 'khoahoc4.html',
        'speaking1': 'khoahoc5.html',
        'writing1': 'khoahoc6.html'
    };

    const targetPage = courseMap[courseType];

    console.log('Đang gọi:', courseType, '→', targetPage);

    if (!targetPage) {
        alert('Khóa học này chưa có lộ trình chi tiết!');
        return;
    }

    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = targetPage;
    } else {
        alert('Cần đăng nhập để xem chi tiết khóa học!');
        sessionStorage.setItem('authRedirectTarget', targetPage);
        window.location.href = 'login_out.html';
    }
}