var url = window.location.href;

var gets = new URL(url);
var serial = gets.searchParams.get("serial");
var id = gets.searchParams.get("id");
var email = gets.searchParams.get("email");
var phone = gets.searchParams.get("phone");

if (serial == null || id == null || email == null || phone == null){
  window.location.replace("index.html?id=1");
}
else if (serial == '' || id == '' || email == '' || phone == ''){
  window.location.replace("index.html?id=1");
}

$(".receipt .receipt-header h3").text(serial);
$("#rd-id .contents h4").text(id);
$("#rd-email .contents h4").text(email);
$("#rd-phone .contents h4").text(phone);

var qrcode = new QRCode(document.getElementById("qrcode"), url)


particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});