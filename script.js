   // XMLHttpRequest kullanarak üst navbar dosyasını yükleme
    var xhrTopNavbar = new XMLHttpRequest();
    xhrTopNavbar.open('GET', './top-navbar.html', true);
    xhrTopNavbar.onreadystatechange = function () {
      if (xhrTopNavbar.readyState === 4 && xhrTopNavbar.status === 200) {
        document.getElementById('top-navbar-container').innerHTML = xhrTopNavbar.responseText;
      }
    };
    xhrTopNavbar.send();

 // XMLHttpRequest kullanarak alt navbar dosyasını yükleme
    var xhrNavbar = new XMLHttpRequest();
    xhrNavbar.open('GET', './navbar.html', true);
    xhrNavbar.onreadystatechange = function () {
      if (xhrNavbar.readyState === 4 && xhrNavbar.status === 200) {
        document.getElementById('navbar-container').innerHTML = xhrNavbar.responseText;
      }
    };
    xhrNavbar.send();

    // XMLHttpRequest kullanarak country(tercüme dilleri) dosyasını yükleme
    var xhrCountry = new XMLHttpRequest();
    xhrCountry.open('GET', './tercume-dilleri.html', true);
    xhrCountry.onreadystatechange = function () {
      if (xhrCountry.readyState === 4 && xhrCountry.status === 200) {
        document.getElementById('country-container').innerHTML = xhrCountry.responseText;
      }
    };
    xhrCountry.send();


    // Footer Script //
  // XMLHttpRequest kullanarak üst navbar dosyasını yükleme
  var xhrFooter = new XMLHttpRequest();
  xhrFooter.open('GET', './footer.html', true);
  xhrFooter.onreadystatechange = function () {
   if (xhrFooter.readyState === 4 && xhrFooter.status === 200) {
    document.getElementById('footer-container').innerHTML = xhrFooter.responseText;
   }
  };
  xhrFooter.send();

function writeText(text) {
  document.getElementById("text").innerHTML = "";
  document.getElementById("text").innerHTML += text + "<br>";
}
  // Buton seçildiğinde diğer butonların stilini kaldırır ve seçili butona stil uygular
  function selectButton(button) {
    var buttons = document.querySelectorAll('.btn'); // Tüm butonları seç
    buttons.forEach(function(btn) {
      btn.classList.remove('active-button'); // Tüm butonların aktif sınıfını kaldır
      btn.style.boxShadow = 'none'; // Tüm butonların gölgelerini kaldır
    });
    button.classList.add('active-button'); // Seçili butona aktif sınıfı ekle

    // Butona tıklandığında gölgelendirme ekleyin
    button.style.boxShadow = '-8px 7px 15px rgba(0, 0, 0, 0.5)';
  }

  // Sayfa yüklendiğinde ilk butonu seçili yap
window.onload = function() {
    var firstButton = document.getElementById("button1");
    selectButton(firstButton);
    writeText('<p>Tercüme Vadisi olarak size en uygun çeviri hizmetini verebilmek için alanında uzman tercüman ekibimiz ile çalışıyor, en uygun tercüme hizmetini sunuyoruz.</p> <p>Ayrıca almak istediğiniz çeviri hizmetinin sektörün en kaliteli tercümanlık bürosu tarafından yapılması bir çok avantajı da beraberinde getirmektedir. Hızlı ve güvenilir hizmet kapasitesine sahip çevirmen ekibiyle Portakal Tercüme süresiz arşiv ve hızlı kargo özellikleri ile Türkiyenin lider tercüme ajansıdır.</p> <p>En ucuz çeviri hizmetlerini sağlayan firmalardan biri olan Portakal Tercüme Ofisi, yeminli, noter tasdikli, apostil tasdikli uygun tercümanlık hizmetleri de vermektedir.');
  };

// Navbarın Herhangi bir yere dokunulduğunda kapanması //
document.addEventListener('click', function (event) {
    var navbar = document.querySelector('.navbar-collapse');
    var isClickInside = navbar.contains(event.target) || event.target.classList.contains('navbar-toggler');

    if (!isClickInside) {
        var bsCollapse = new bootstrap.Collapse(navbar, {
            toggle: false
        });
        bsCollapse.hide();
    }
});
