// function changeContent(pageId) {
//     var pageTitleElement = document.getElementById('pageTitle');
//     var pageContent = document.getElementById('pageContent');

//     // Animazione dello slide del contenuto della pagina
//     document.getElementById('content').classList.add('slide');

//     setTimeout(function () {
//         // Mostra solo la pagina selezionata
//         var pages = pageContent.children;
//         for (var i = 0; i < pages.length; i++) {
//             if (pages[i].id === pageId) {
//                 pages[i].classList.remove('hidden');
//             } else {
//                 pages[i].classList.add('hidden');
//             }
//         }

//         // Imposta il titolo della pagina
//         pageTitleElement.textContent = document.getElementById(pageId).querySelector('h2').textContent;

//         // Reset dell'animazione dello slide del contenuto della pagina
//         document.getElementById('content').classList.remove('slide');
//     }, 500);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     window.addEventListener('wheel', function (event) {
//         event.preventDefault(); // Impedisce lo scroll di default
//         const delta = event.deltaY; // Direzione dello scroll
//         const pages = document.getElementsByClassName('page'); // Tutte le pagine
    
//         // Determina l'indice della pagina corrente
//         let currentIndex = 0;
//         for (let i = 0; i < pages.length; i++) {
//             if (pages[i].classList.contains('current')) {
//                 currentIndex = i;
//                 break;
//             }
//         }
    
//         // Passa alla pagina successiva o precedente in base alla direzione dello scroll
//         if (delta > 0 && currentIndex < pages.length - 1) {
//             pages[currentIndex].classList.remove('current');
//             pages[currentIndex + 1].classList.add('current');
//         } else if (delta < 0 && currentIndex > 0) {
//             pages[currentIndex].classList.remove('current');
//             pages[currentIndex - 1].classList.add('current');
//         }
//     });
    
//     // Imposta la prima pagina come pagina corrente
//     const firstPage = document.getElementsByClassName('page')[0];
//     firstPage.classList.add('current');
// });
// // Aggiungi l'evento di scroll


function changeContent(pageId) {
    var pageTitleElement = document.getElementById('pageTitle');
    var pageContent = document.getElementById('pageContent');
  
    // Animazione dello slide del contenuto della pagina
    document.getElementById('content').classList.add('slide');
  
    setTimeout(function () {
      // Mostra solo la pagina selezionata
      var pages = pageContent.children;
      for (var i = 0; i < pages.length; i++) {
        if (pages[i].id === pageId) {
          pages[i].classList.remove('hidden');
        } else {
          pages[i].classList.add('hidden');
        }
      }
  
      // Imposta il titolo della pagina
      pageTitleElement.textContent = document.getElementById(pageId).querySelector('h2').textContent;
  
      // Reset dell'animazione dello slide del contenuto della pagina
      document.getElementById('content').classList.remove('slide');
    }, 500);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    var pages = document.getElementsByClassName('page');
    var currentIndex = 0;
  
    function showPage(index) {
      if (index >= 0 && index < pages.length) {
        for (var i = 0; i < pages.length; i++) {
          if (i === index) {
            pages[i].classList.add('current');
          } else {
            pages[i].classList.remove('current');
          }
        }
      }
    }
  
    function handleScroll(event) {
      event.preventDefault(); // Impedisce lo scroll di default
      var delta = event.deltaY; // Direzione dello scroll
  
      // Passa alla pagina successiva o precedente in base alla direzione dello scroll
      if (delta > 0) {
        currentIndex++;
      } else if (delta < 0) {
        currentIndex--;
      }
  
      showPage(currentIndex);
    }
  
    // Aggiungi l'evento di scroll
    window.addEventListener('wheel', handleScroll);
  
    // Imposta la prima pagina come pagina corrente
    showPage(currentIndex);
  });
  