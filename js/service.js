const services = [
  {
    name: "الصوتيات",
    desc: "مكبرات صوت - ميكروفونات - DJ",
    price: 1500,
    image: "../assets/images/pexels-anna-pou-8133295.jpg",
    contractors: ["أحمد الصوتي", "صوت العرب"]
  },
  {
    name: "الإضاءة",
    desc: "إضاءة احترافية للحفلات",
    price: 2000,
    image: "../assets/images/pexels-tyler-hendy-9620-53265.jpg",
    contractors: ["نور الإبداع"]
  },
  {
    name: "التصوير",
    desc: "تصوير فيديو وصور احترافية",
    price: 1200,
    image: "../assets/images/pexels-kyleloftusstudios-3379933.jpg",
    contractors: ["عدسة الفن"]
  }
];

const grid = document.getElementById("servicesGrid");

function loadServices() {
  services.forEach((s, index) => {
    grid.innerHTML += `
      <div class="card" onclick="openService(${index})">
        <img src="${s.image}">
        <div class="card-content">
          <h3>${s.name}</h3>
          <p>${s.desc}</p>
          <div class="price">${s.price} ريال</div>
        </div>
        <button class="choose-btn">تفاصيل</button>
      </div>
    `;
  });
}

function openService(index) {
  const s = services[index];

  document.getElementById("serviceTitle").innerText = s.name;
  document.getElementById("serviceDesc").innerText = s.desc;
  document.getElementById("servicePrice").innerText = "السعر: " + s.price + " ريال";

  const list = document.getElementById("contractorsList");
  list.innerHTML = "";

  s.contractors.forEach(c => {
    list.innerHTML += `<p>👤 ${c}</p>`;
  });

  document.getElementById("serviceModal").style.display = "flex";
}

function closeServiceModal() {
  document.getElementById("serviceModal").style.display = "none";
}

function selectService() {
  alert("تم اختيار الخدمة بنجاح ⭐");
  closeServiceModal();
}

loadServices();