document.addEventListener("DOMContentLoaded", function() {
    // Get all footer columns
    var footerColumns = document.querySelectorAll('#footer-column');
  
    // Loop through each footer column
    footerColumns.forEach(function(column) {
        // Find the h3 element
        var h3 = column.querySelector('#footer-head');
  
        // Find the ul element
        var menu = column.querySelector('#footer-menu');
  
        // Add click event listener to the icon
        h3.addEventListener('click', function() {
            // Toggle the active class on the menu when the icon is clicked
            menu.classList.toggle('active');
  
            // Toggle the icon between chevron-down and chevron-up
            h3.querySelector('i').classList.toggle('bi-chevron-down');
            h3.querySelector('i').classList.toggle('bi-chevron-up');
        });
    });
  });