var foto = new Vue({
  el: '#foto',
  data: {
    seen: true
  }
})
var tabler = new Vue({
  el: '#tabler',
  data: { activetab: 1 },
});
new Vue({
  el: '#urunDetay',
  data: {
    object: {
      kitapAdi: 'Issız Kadınlar Sokağı',
      kitapYazar: 'Canan Tan',
      kitapYayinEvi: 'Doğan Kitap',
      kitapYuzde:"28",
      kitapFiyat:"27,00",
      kitapIndirimliFiyat:"19,44"
    }
  }
});
new Vue({
  el: '#app',
  data: { 
    counter: 0 // Initial Value 
  },
  methods: {
    increaseCounter(increaseLimit) { // Increase
      if (this.counter < increaseLimit) this.counter++;
    },
    decreaseCounter(decreaseLimit) { // Decrease
      if (this.counter > decreaseLimit) this.counter--;
    }, 
    resetCounter() { // Reset
      this.counter = 0;
    }
  },
  computed: {
    output() { // Output for computed property!
      return this.counter >= 10 ? '10 or more' : 'Less than 10';
    }
  }
});


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
//---------------------------------
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function currentDiv2(n) {
  showDivs2(slideIndex2 = n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " w3-white";
}

(function(){
    var imgLen = document.getElementById('sütun1');
    var images = imgLen.getElementsByTagName('img');
    var counter = 1;

    if(counter <= images.length){
        setInterval(function(){
            images[0].src = images[counter].src;
            //console.log(images[counter].src);
            counter++;

            if(counter === images.length){
                counter = 1;
            }
        },1000);
    }
})();

new Vue({
  el: '#kitap1',
  data: {
    object: {
      kitapAdi: 'Issız Kadınlar Sokağı',
      kitapYazar: 'Canan Tan',
      kitapYayinEvi: 'Doğan Kitap',
      kitapYuzde:"28",
      kitapFiyat:"27,00",
      kitapIndirimliFiyat:"19,44"
    }
  }
});
new Vue({
  el: '#kitap2',
  data: {
    object: {
      kitapAdi: 'Başka Bir Şey',
      kitapYazar: 'Ahmet Batman',
      kitapYayinEvi: 'Destek Yayınları',
      kitapYuzde:"35",
      kitapFiyat:"22,00",
      kitapIndirimliFiyat:"15,40"
    }
  }
});
new Vue({
  el: '#kitap3',
  data: {
    object: {
      kitapAdi: 'Aklımda Hep Sen',
      kitapYazar: 'Kürşat Başar',
      kitapYayinEvi: 'Everest Yayınları',
      kitapYuzde:"35",
      kitapFiyat:"29,00",
      kitapIndirimliFiyat:"18,85"
    }
  }
});

new Vue({
  el: '#kitap4',
  data: {
    object: {
      kitapAdi: 'Sıradan Bir Gün',
      kitapYazar: 'Yekta Kopan',
      kitapYayinEvi: 'Can Yayınları',
      kitapYuzde:"30",
      kitapFiyat:"24,50",
      kitapIndirimliFiyat:"17,15"
    }
  }
});
new Vue({
  el: '#kitap5',
  data: {
    object: {
      kitapAdi: 'Platon Bir Gün Bir Karikatür Çizer',
      kitapYazar: 'Thomas Cathcart , Daniel Klein',
      kitapYayinEvi: 'Aylak Kitap',
      kitapYuzde:"20",
      kitapFiyat:"29,50",
      kitapIndirimliFiyat:"23,60"
    }
  }
})
new Vue({
  el: '#kitap6',
  data: {
    object: {
      kitapAdi: 'Bitkilerin Bildikleri',
      kitapYazar: 'Daniel Chamovitz',
      kitapYayinEvi: 'Metis Yayınları',
      kitapYuzde:"23",
      kitapFiyat:"21,50",
      kitapIndirimliFiyat:"16,56"
    }
  }
})
new Vue({
  el: '#kitap7',
  data: {
    object: {
      kitapAdi: 'Her Şey Seninle Başlar',
      kitapYazar: 'Mümin Sekman',
      kitapYayinEvi: 'Alfa Yayınları',
      kitapYuzde:"35",
      kitapFiyat:"20,00",
      kitapIndirimliFiyat:"13,00"
    }
  }
})