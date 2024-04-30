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