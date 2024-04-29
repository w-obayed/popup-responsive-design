document.getElementById("click").addEventListener("click", function () {
  document.getElementById("show").style.cssText = "transform: scale(1);";
});
document.getElementById("close-popup1").addEventListener("click", function () {
  document.getElementById("show").style.cssText = "transform: scale(0);";
});
document.getElementById("close-popup2").addEventListener("click", function () {
  document.getElementById("show").style.cssText = "transform: scale(0);";
});
