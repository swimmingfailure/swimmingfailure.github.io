$(function() {
    console.log("!!!!!!!!!!!!!!!!");
    console.log("SWIMMING FAILURE");
    console.log("!!!!!!!!!!!!!!!!");
    loadBars();
});


function loadBars() {
    $("#nav").load("/template/nav.html");
    $("#footer").load("/template/footer.html");
    $("head").load("/template/head.html");
}