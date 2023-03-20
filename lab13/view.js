$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });
function getPicture() {
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        data: {
            api_key: "G0XhLWGlqcrQYd8KeTJFbvPSNa4TOVqqFCMyqhHe",
            date: $("#date").val()
        },
        dataType: "json",
        "success": showPicture,
        "error": noPicture
    });
};
function showPicture(data) {

    $("#title").text(data.title);
    $("#pic").attr("src", data.url);
    $("#description").text(data.explanation);
};
function noPicture(error) {
    alert(error.responseText);
};
