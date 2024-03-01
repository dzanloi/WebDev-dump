document.querySelector('.navigations ul li:first-child a').addEventListener('click', function(event) {
    // event.preventDefault();
    window.location.href = this.getAttribute('href');
  });

  document.getElementById("logo").addEventListener("click", function() {
    window.location.href = "index.html";
  });

  document.getElementById()