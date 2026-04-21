AOS.init({ duration: 1000 });

function sendWhatsApp(e){
  e.preventDefault();
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let msg = document.getElementById('msg').value;

  let url = `https://wa.me/218947085050?text=الاسم:${name}%0Aالهاتف:${phone}%0Aالطلب:${msg}`;
  window.open(url, '_blank');
}
