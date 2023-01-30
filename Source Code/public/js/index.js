// Login Page

$(".login-checkbox_label").click(function () {
    if ($(this).hasClass("label-dev") === true) {
        $(".checkbox-manager").attr("checked", false);
        $(".checkbox-dev").attr("checked", true);
        $(".checkbox-img_manager").removeClass("login-checkbox_selected");
        $(".checkbox-img_dev").addClass("login-checkbox_selected");
    } else {
        $(".checkbox-dev").attr("checked", false);
        $(".checkbox-manager").attr("checked", true);
        $(".checkbox-img_dev").removeClass("login-checkbox_selected");
        $(".checkbox-img_manager").addClass("login-checkbox_selected");

    }

});










// Navbar

// to get current html file name
var path = window.location.pathname;
console.log(path);
var page = path.split("/").pop();
var page = page.split(".").shift();
console.log(page);

const selectedNavItem = page;
$(".nav-item_selected").removeClass("nav-item_selected");
$(".nav-item-" + selectedNavItem).addClass("nav-item_selected");

// to move the line at the right of selected nav item
switch(page){
    case "landing":
        $(".nav_selected").css("top", "289px");
        break;
    case "profile":
        $(".nav_selected").css("top", "413px");
        break;
    case "projects":
        $(".nav_selected").css("top", "289px");
        break;
    case "search":
        $(".nav_selected").css("top", "660px");
        break;
    case "add":
        $(".nav_selected").css("top", "782px");
        break;
}






// Loading Screen


$(".nav-item-search").click(function(){
    $("#landing").html("Loading");
})



$(".nav-link").click(function(){
    $(".loader").css("display", "block");

    setTimeout(() => {
        $(".loader").css("display", "none");

    }, 1500);
})










