(function () {
  document.querySelectorAll(".song").forEach((song, i) => {
    const btn = song.querySelector(".song__summary");
    const panel = song.querySelector(".song__panel-wrap");
    if (!btn || !panel) return;

    const panelId = `song-panel-${i}`;
    const btnId = `song-btn-${i}`;
    btn.id = btnId;
    panel.id = panelId;
    btn.setAttribute("aria-controls", panelId);
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", btnId);

    btn.addEventListener("click", () => {
      const open = song.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });
})();
