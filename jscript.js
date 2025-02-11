function goToPage(pageId) {
            document.querySelectorAll('.container').forEach(page => page.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
}
