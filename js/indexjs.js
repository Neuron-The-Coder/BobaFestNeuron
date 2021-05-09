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

  console.log(news);

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

})


