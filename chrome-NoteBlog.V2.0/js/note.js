chrome.tabs.getSelected(function (tabs) {
    console.log("url:", tabs.url);
    console.log("url:", tabs.favIconUrl);
    var lusername = localStorage.username1;
    if (lusername == "") {

    } else {
        saveMyUrl(tabs.title, tabs.url);

    }
});


function saveMyUrl(url_title, my_url) {
    var username = localStorage.username1;
    var passwd = localStorage.password1;
    var postStr = "username=" + username + "&passwd=" + passwd + "&url_title=" + url_title + "&my_url=" + my_url;
    ajax("http://blskye.com/index.php/Api/", postStr, function (result) {
        document.getElementById("info").innerHTML = result;
    });
}
if (localStorage.username1) {
    document.write(localStorage.username1);
}
//saveMyUrl("s","s");