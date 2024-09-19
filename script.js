document.addEventListener("DOMContentLoaded", function () {
    const popupWindow = document.getElementById("popupWindow");
    const closeButton = document.querySelector(".close");
    const okButton = document.getElementById("okButton");

    // Function to show the popup
    function showPopup() {
        popupWindow.style.display = 'block';
    }

    // Show the popup for the first time after 5 seconds
    setTimeout(showPopup, 5000); // Delay of 5000ms (5 seconds)

    // Set an interval to show the popup every 5 seconds after the initial display
    const intervalId = setInterval(showPopup, 5000);

    // Event listener for the close button
    closeButton.addEventListener('click', function () {
        popupWindow.style.display = 'none'; // Hide the popup
    });

    // Event listener for the OK button
    okButton.addEventListener('click', function () {
        popupWindow.style.display = 'none'; // Hide the popup
    });
});
