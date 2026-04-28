// =======================
// تسجيل حساب جديد
// =======================
function register(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  // تحقق من كلمة المرور
  if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "كلمة المرور غير متطابقة";
    return;
  }

  // إنشاء مستخدم
  const user = {
    name,
    email,
    password
  };

  // حفظ في localStorage
  localStorage.setItem("user", JSON.stringify(user));

  message.style.color = "green";
  message.textContent = "تم إنشاء الحساب بنجاح 🎉";

  // تحويل لصفحة تسجيل الدخول
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}


// =======================
// تسجيل الدخول
// =======================
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    message.style.color = "red";
    message.textContent = "لا يوجد حساب مسجل";
    return;
  }

  if (email === user.email && password === user.password) {
    message.style.color = "green";
    message.textContent = "تم تسجيل الدخول بنجاح 🚀";

    setTimeout(() => {
      window.location.href = "pages/contractors.html";
    }, 1000);

  } else {
    message.style.color = "red";
    message.textContent = "الإيميل أو كلمة المرور غير صحيحة";
  }
}