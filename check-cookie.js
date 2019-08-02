/*! @preserve Set and Get Cookies in JavaScript ( https://github.com/arulprasadj/set-and-get-cookies-in-javascript ) -- Version: 1.1.0 -- Author: Arul Prasad J ('https://github.com/arulprasadj') */

window.onload = checkCookie();

function setCookie(cookieName, cookieValue, cookieExpdays) {
 var date = new Date();
 date.setTime(date.getTime() + (cookieExpdays*24*60*60*1000));
 var expires = "expires="+ date.toUTCString();
 document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}
function accessCookie(cookieName) {
 var name = cookieName + "=";
 var ca = document.cookie.split(';');
 for(var i = 0; i < ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0)==' ') {
   c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
   return c.substring(name.length,c.length);
  }
 }
 return "";
}
function checkCookie() {
  var user=accessCookie("popupvideo");
  if (user!="") {
  //will not load model box
  } else {
  //Will load model box
        setTimeout(function() {
        jQuery("#popupVideo").modal("show")
        }, 15000);
   user = "popupuser";
   if (user != "" && user != null) {
   //setCookie(CookieName, CookieValue, ExpiryDay);
   setCookie("popupvideo", user, 1);
  }
 }
}
