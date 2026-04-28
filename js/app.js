// ===== تفاصيل المتعهد =====
function showDetails(card) {
  document.getElementById("vendorModal").style.display = "flex";

  document.getElementById("mName").innerText =
    card.querySelector("h3").innerText;

  document.getElementById("mLocation").innerText =
    card.querySelector("p").innerText;

  document.getElementById("mPhone").innerText = "غير متوفر";
  document.getElementById("mEmail").innerText = "غير متوفر";
  document.getElementById("mServices").innerText = "خدمات متعددة";
}

// ===== إغلاق المودال =====
function closeModal() {
  document.getElementById("vendorModal").style.display = "none";
}

// ===== فتح التقييم =====
function openRatingModal(event) {
  event.stopPropagation();
  document.getElementById("ratingModal").style.display = "flex";
}

// ===== إغلاق التقييم =====
function closeRatingModal() {
  document.getElementById("ratingModal").style.display = "none";
}

// ===== إرسال تقييم =====
function submitRating() {
  const text = document.getElementById("ratingText").value;

  if (!text.trim()) {
    alert("اكتب التقييم أولاً");
    return;
  }

  alert("تم إرسال التقييم بنجاح ⭐");

  document.getElementById("ratingText").value = "";
  document.getElementById("ratingStars").value = "1";

  closeRatingModal();
}

// ===== إغلاق عند الضغط خارج =====
window.onclick = function (e) {
  const vendorModal = document.getElementById("vendorModal");
  const ratingModal = document.getElementById("ratingModal");

  if (e.target === vendorModal) {
    vendorModal.style.display = "none";
  }

  if (e.target === ratingModal) {
    ratingModal.style.display = "none";
  }
};

