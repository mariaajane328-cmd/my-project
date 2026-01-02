document.addEventListener("DOMContentLoaded", function () {

    console.log("JS Loaded");

    const watchBtn = document.getElementById("watchTrailerBtn");
    const trailerModal = document.getElementById("trailerModal");
    const closeBtn = document.getElementById("closeTrailer");
    const trailerFrame = document.getElementById("trailerFrame");

    if (!watchBtn) {
        alert("Button not found");
        return;
    }

    watchBtn.addEventListener("click", function () {
        trailerModal.style.display = "block";
        trailerFrame.src = "https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1";
    });

    closeBtn.addEventListener("click", function () {
        trailerModal.style.display = "none";
        trailerFrame.src = "";
    });

});