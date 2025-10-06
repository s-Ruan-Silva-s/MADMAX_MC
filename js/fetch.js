document.querySelectorAll("button[data-page]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const page = btn.dataset.page;
    fetch(page)
      .then((e) => e.text())
      .then((resp) => {
        document.getElementById("content").innerHTML = resp;
      });
  });
});
