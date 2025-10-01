document.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({ reset: false, distance: "50px", duration: 1200 });

  sr.reveal(".area-1", { origin: "bottom" });
  sr.reveal(".skills", { origin: "bottom", interval: 200 });
  sr.reveal(".area-jobs .card", { origin: "bottom", interval: 200 });
  sr.reveal("footer", { origin: "top" });
});


