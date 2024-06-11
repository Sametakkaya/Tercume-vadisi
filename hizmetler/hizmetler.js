    // XMLHttpRequest kullanarak üst navbar dosyasını yükleme
    var xhrTopNavbar = new XMLHttpRequest();
    xhrTopNavbar.open('GET', '../navbar/top-navbar.html', true);
    xhrTopNavbar.onreadystatechange = function () {
      if (xhrTopNavbar.readyState === 4 && xhrTopNavbar.status === 200) {
        document.getElementById('top-navbar-container').innerHTML = xhrTopNavbar.responseText;
      }
    };
    xhrTopNavbar.send();

        // XMLHttpRequest kullanarak alt navbar dosyasını yükleme
    var xhrNavbar = new XMLHttpRequest();
    xhrNavbar.open('GET', '../navbar/navbar.html', true);
    xhrNavbar.onreadystatechange = function () {
      if (xhrNavbar.readyState === 4 && xhrNavbar.status === 200) {
        document.getElementById('navbar-container').innerHTML = xhrNavbar.responseText;
      }
    };
    xhrNavbar.send();