var i = 0

const up1 = document.querySelectorAll('.carousel-item')
titles = []
descs = []

up1.forEach(i => {
  titles.push(i.querySelector('h5').innerText)
  descs.push(i.querySelector('p').innerText)
});

console.log(titles)
console.log(descs)

var now = 0

$(".carousel-control-prev").on("click", () => {
  if (now == 0) now = 4
  else now = (now - 1)

  $('#mobiletitle h1, #mobiledesc p').fadeOut(300, () => {
    $('#mobiletitle h1').text(titles[now]).fadeIn(300)
    $('#mobiledesc p').text(descs[now]).fadeIn(300)
  })

})

$(".carousel-control-next").on("click", () => {
  now = (now + 1) % 5

  $('#mobiletitle h1, #mobiledesc p').fadeOut(300, () => {
    $('#mobiletitle h1').text(titles[now]).fadeIn(300)
    $('#mobiledesc p').text(descs[now]).fadeIn(300)
  })

})





