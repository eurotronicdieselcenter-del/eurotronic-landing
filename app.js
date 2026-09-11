const WHATSAPP = '5491135962790';

function openWhatsApp({ name, surname, email, country, province, interest }) {
  const fullName = `${name.trim()} ${surname.trim()}`.trim();
  const location = `${province.trim()}, ${country.trim()}`;
  const text = `Hola Eurotronic, quiero inscribirme a tu capacitación de Reparación de inyectores Common Rail.\n\n*${interest.trim()}.*\n\nMi nombre es ${fullName}, soy de ${location}.\nMail: ${email.trim()}`;
  window.location.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

const registrationForm = document.querySelector('#registration-form');
if (registrationForm) {
  registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(registrationForm).entries());
    openWhatsApp(data);
  });
}
