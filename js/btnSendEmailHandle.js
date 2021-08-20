const sendEmailBtn = document.querySelector(".footer__btn-send-email");
const emailInput = document.querySelector(".footer__input");

emailInput.addEventListener("click", () => {
  sendEmailBtn.classList.add('footer__btn-send-email_visibility_true')
 
});

emailInput.addEventListener("blur", function( event ) {
  sendEmailBtn.classList.remove('footer__btn-send-email_visibility_true')
})