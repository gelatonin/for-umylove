<script>
    document.addEventListener("DOMContentLoaded", function () {
        goToPage('mainPage'); // Ensure the first page is visible on load
    });

    function goToPage(pageId) {
        document.querySelectorAll('.container').forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    }
</script>
