window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    const clientHeight = document.documentElement.clientHeight;
    const scrollValue = document.documentElement.scrollTop;

    if (scrollValue > clientHeight) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
}