function getReturnPage() {
  return sessionStorage.getItem("authReturnPage") || document.referrer || "Home.html";
}

function getRedirectTarget() {
  const params = new URLSearchParams(window.location.search);
  return params.get("redirect") || sessionStorage.getItem("authRedirectTarget") || "Home.html";
}

function goBackToPreviousPage() {
  const returnPage = getReturnPage();
  window.location.href = returnPage;
}

function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;
  let msg = document.getElementById("msg");

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  if (!u || !p) {
    msg.innerText = "Vui lòng nhập đầy đủ";
    return;
  }

  if (u === savedUser && p === savedPass) {
    msg.innerText = "";
    document.body.style.opacity = "0.5";

    const redirectTarget = getRedirectTarget();
    sessionStorage.setItem("authRedirectTarget", redirectTarget);
    localStorage.setItem("isLoggedIn", "true");

    setTimeout(() => {
      window.location.href = redirectTarget;
    }, 500);
  } else {
    msg.innerText = "Sai tài khoản hoặc mật khẩu";
  }
}

function goRegister() {
  const currentPage = getReturnPage();
  const redirectTarget = getRedirectTarget();
  sessionStorage.setItem("authReturnPage", currentPage);
  sessionStorage.setItem("authRedirectTarget", redirectTarget);
  window.location.href = `register.html?redirect=${encodeURIComponent(redirectTarget)}`;
}

function register() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;
  let r = document.getElementById("repass").value;
  let msg = document.getElementById("msg");

  if (!u || !p || !r) {
    msg.innerText = "Vui lòng nhập đầy đủ";
    msg.className = "error";
    return;
  }

  if (p !== r) {
    msg.innerText = "Mật khẩu không khớp";
    msg.className = "error";
    return;
  }

  localStorage.setItem("user", u);
  localStorage.setItem("pass", p);

  msg.innerText = "Đăng ký thành công!";
  msg.className = "success";

  setTimeout(() => {
    document.body.style.opacity = "0.5";
    setTimeout(() => {
      const redirectTarget = getRedirectTarget();
      window.location.href = `login_out.html?redirect=${encodeURIComponent(redirectTarget)}`;
    }, 500);
  }, 1000);
}

function goLogin() {
  window.location.href = "login_out.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const redirectTarget = params.get("redirect");

  if (redirectTarget) {
    sessionStorage.setItem("authRedirectTarget", redirectTarget);
  }

  if (!sessionStorage.getItem("authReturnPage") && document.referrer) {
    const referrerFile = document.referrer.split("/").pop();
    if (referrerFile) {
      sessionStorage.setItem("authReturnPage", referrerFile);
    }
  }
});
