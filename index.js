document.querySelector("#CTA").addEventListener("click", () => {
  setTimeout(() => {
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
  }, 5);
});