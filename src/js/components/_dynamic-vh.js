// Dynamic VH (Fixes 100VH issue on mobile browsers)
export const setDynamicVH = () => {
  const root = document.documentElement;
  const vh = window.innerHeight;
  root.style.setProperty("--dynamic-vh", vh + "px");
};

window.addEventListener("load", setDynamicVH);
window.addEventListener("resize", setDynamicVH);
