document.querySelectorAll(".gbtn").forEach((btn) => {
  // Light spot follows the cursor
  btn.addEventListener("pointermove", (e) => {
    const r = btn.getBoundingClientRect();
    btn.style.setProperty("--mx", e.clientX - r.left + "px");
    btn.style.setProperty("--my", e.clientY - r.top + "px");
  });

  // Click: ripple + paper plane flies away and returns
  btn.addEventListener("click", (e) => {
    const r = btn.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.className = "ripple";
    dot.style.left = e.clientX - r.left + "px";
    dot.style.top = e.clientY - r.top + "px";
    btn.appendChild(dot);
    dot.addEventListener("animationend", () => dot.remove());

    btn.classList.remove("sent");
    void btn.offsetWidth; // restart the animation
    btn.classList.add("sent");
  });
});
