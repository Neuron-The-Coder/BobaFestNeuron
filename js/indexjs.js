// Post

// Buat Data

var urls = new URL(window.location.href);
var errorcode = urls.searchParams.get("id");

function toRegister(){
  window.scroll({
    top : document.getElementById("registerhere").offsetTop,
    behavior: "smooth"
  })
}

if (errorcode != null){
  if (errorcode == 1){
    $("div.notif").html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Something went wrong</strong> Please contact the administrator via <a href="contactus.html">here</a>.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`);
  }
}


$(".iSubmit #submitted").on('click', function(){

  let email = $(".iEmail #email").val()
  let name = $(".iName #name").val();
  let number = $(".iNumber #number").val();
  let event =  $(".iEvent #event").val();

  var news = {
    "id" : 0,
    "email" : email,
    "name" : name,
    "number" : number,
    "event" : event
  }

  var isok = 1

  if (/[\w]+@[\w]+\.[\w]+/.test(email) == false){
    $("div.notif").html(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Wrong Email</strong> Email must be like this example <div style="font-style: italic;">helloW0rlD@gmail.com</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`);
    return;
  }
  if (/[\w]+/.test(name) == false){
    $("div.notif").html(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Name Error</strong> Name cannot be empty
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`);
    return;
  }
  if (/[\D]+/.test(number) || number.length > 14 || number.length == 0){
    $("div.notif").html(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Phone Number Error</strong>
    <p>Make sure it is no more than 14 digits and starts with 08</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`);
    return;
  }

  // Validation

  if (isok == 1){
    $.ajax({
      url : "https://jsonplaceholder.typicode.com/posts",
      method : "POST",
      data: news,
      success : (result) => {
        let r = result.id;
  
        news.id = r;
        console.log(news);
  
        let serial = ""
        let aaa = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        for (var i=0; i<20; i++){
          serial += aaa[Math.floor(Math.random() * aaa.length) - 1];
        }
  
  
        window.location.replace(`thankyou.html?id=${r}&serial=${serial}&email=${email}&phone=${number}`);
      }
    })
  }


})


