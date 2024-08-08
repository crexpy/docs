document.addEventListener("DOMContentLoaded", function() {
    // Handle collapsible sections
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        var content = coll[i].nextElementSibling;
        // Initially set the content to be visible
        content.style.display = "block";
        // Add the 'active' class to show the content by default
        coll[i].classList.add("block");

        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            // Toggle content visibility
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    }

    // Handle mobile sidebar toggle button
    document.querySelector('.toggle-btn').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });
});
