function hideCookieConsent() {
    var cookieConsent = document.getElementById('cookie-consent');
    cookieConsent.style.display = 'none';
}

window.onload = function() {
    var cookieConsent = document.getElementById('cookie-consent');
    cookieConsent.style.display = 'block';}

document.getElementById('accept-cookies').addEventListener('click', function() {
    hideCookieConsent();
});
