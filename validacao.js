Array.from( document.querySelectorAll('div.rtcl-listing-description') )
  .filter( node => /\b(Cytotec|Guarapari)\b/i.test(node.textContent) )
  .forEach( node => node.style.display = 'none' );
