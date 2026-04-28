// فتح المودال
function openModal() {
  document.getElementById("ratingModal").style.display = "flex";
}

// إغلاق المودال
function closeModal() {
  document.getElementById("ratingModal").style.display = "none";
}

// إضافة تقييم
function addRating(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const stars = document.getElementById("stars").value;
  const comment = document.getElementById("comment").value;

  const list = document.getElementById("ratingsList");

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${name}</h3>
    <div>${"⭐".repeat(stars)}</div>
    <p>${comment}</p>
    <small>${new Date().toLocaleDateString("ar-EG")}</small>
  `;

  list.prepend(card);

  event.target.reset();
  closeModal();
}

// إغلاق عند الضغط خارج المودال
window.onclick = function(e) {
  const modal = document.getElementById("ratingModal");
  if (e.target === modal) {
    closeModal();
  }
};