$(document).ready(function() {
    $(".hamburger").on("click", () => {
        $(".nav-items").toggleClass("open");
        $(".hamburger").toggleClass("open");
    });
});


