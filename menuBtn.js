    function toggleMenu() {
            var menuText = document.querySelector('.menu-text');
            var menuIcon = document.querySelector('.menu-icon');

            if (menuText.textContent === 'Menu') {
                menuText.textContent = 'Close';
                menuIcon.innerHTML = '&#x2716;'; // Use '✖' character for the 'x' icon
            } else {
                menuText.textContent = 'Menu';
                menuIcon.innerHTML = '&#x2630;'; // Use '☰' character for the menu icon
            }
        }

function showOpen() {
            var menuText = document.querySelector('.menu-text');
            var menuIcon = document.querySelector('.menu-icon');


            if (menuText.textContent === 'Menu') {
                setTimeout(function () {
                    menuText.textContent = 'Open';
                    menuIcon.innerHTML = '&#x2014;';

                }, 300); // Delay of 300ms (0.3 seconds) before changing to "Open"
            }
        }

        function hideOpen() {
            var menuText = document.querySelector('.menu-text');
            var menuIcon = document.querySelector('.menu-icon');

            if (menuText.textContent === 'Open') {
                setTimeout(function () {
                    menuText.textContent = 'Menu';
                    menuIcon.innerHTML = '&#x2630;';

                }, 300); // Delay of 300ms (0.3 seconds) before changing back to "Menu"
            }
        }
