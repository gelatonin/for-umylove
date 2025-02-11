
    document.addEventListener("DOMContentLoaded", function () {
        goToPage('mainPage'); // Show the first page when the website loads
    });

    function goToPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.container').forEach(page => {
            page.classList.remove('active');
        });

        // Show the selected page
        document.getElementById(pageId).classList.add('active');
    }

