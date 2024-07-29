document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
});

// document.getElementById('menu-icon').addEventListener('click', function() {
//     var menu = document.getElementById('menu');
//     menu.classList.toggle('active');
// });