/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  $(".tablesorter").tablesorter({
    cssAsc: 'tablesorter-header-asc',
    cssDesc: 'tablesorter-header-desc',
    cssNone: 'tablesorter-header-none'
  });
  window.GOVUKFrontend.initAll();

})
