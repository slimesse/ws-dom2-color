// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function()  {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // generate a random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add click event listener to the button
    changeColorBtn.addEventListener("click", function()  {
        colorBox.style.backgroundColor = getRandomColor();
    });
});
