Array.from( document.querySelectorAll('div.rtcl-listing-description') )
  .filter( node => /\b(Cytotec|cytotec)\b/i.test(node.textContent) )
  .forEach( node => node.style.display = 'none' );

Array.from( document.querySelectorAll('trail-item trail-end') )
  .filter( node => /\b(Cytotec|cytotec)\b/i.test(node.textContent) )
  .forEach( node => node.style.display = 'none' );
