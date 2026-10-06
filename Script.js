/* ============================================================
   CONFIGURACIÓN: pegá acá tus links de pago.
   Cada botón de comprar va DIRECTO a estos links
   (ya no pasa por la página intermedia de Tiendup).

   ARS -> link de pago de Mercado Pago (pesos)
   USD -> link de PayPal (dólares)
   ============================================================ */
const PAYMENT_LINKS = {
  ARS: "", // Ej: "https://mpago.la/XXXXXXX"
  USD: ""  // Ej: "https://www.paypal.com/ncp/payment/XXXXXXXX" o "https://paypal.me/tuusuario/13.55USD"
};

/* ---------- Botones de compra ---------- */
const toast = document.getElementById("toast");
let toastTimer;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

document.querySelectorAll("[data-pay]").forEach((btn) => {
  const link = PAYMENT_LINKS[btn.dataset.pay];
  if (link) btn.href = link; // si hay link, queda como un <a> normal

  btn.addEventListener("click", (e) => {
    const url = PAYMENT_LINKS[btn.dataset.pay];
    if (!url) {
      e.preventDefault();
      showToast("Falta configurar el link de pago en script.js");
      return;
    }
    e.preventDefault();
    btn.classList.add("loading");
    window.location.href = url; // redirección directa al pago
  });
});

/* ---------- Scroll suave a precios ---------- */
document.querySelectorAll("[data-scroll]").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
