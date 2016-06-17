var login = document.getElementById('login');
var userName = document.getElementById('username');
var passWord = document.getElementById('password');
var login_ok = document.getElementById('login_ok');
var logged=document.getElementById('logged');
var signin=document.getElementById('signin');
var info=document.getElementById('info');

var copyright=new Date().getFullYear();
document.getElementById( "copy" ).innerHTML = copyright;

login.onclick = function() {
	loginToapi();

}
function assuser() {
	if (localStorage.username1) {
		login_ok.innerHTML = localStorage.username1;
		logged.style.cssText='display:block';
		signin.style.cssText='display:none';
	}
}
assuser();
function loginToapi() {
	var username = userName.value;
	var passwd =  $.md5(passWord.value);
	var postStr = "username=" + username +"&passwd=" + passwd;
	ajax("http://blskye.com/index.php/Api/Index/login", postStr, function(result) {
		//alert(result);
		if (result=='ok'){
			localStorage.username1 = username;
			localStorage.password1 = passwd;
			login_ok.innerHTML = localStorage.username1;
			info.style.cssText='display:none';
			assuser();
		}else{
			info.innerHTML = result;
			return false;
		}
	});
}
var loginout = document.getElementById('loginout');
loginout.onclick = function() {
	localStorage.clear();
	history.go(0);
}