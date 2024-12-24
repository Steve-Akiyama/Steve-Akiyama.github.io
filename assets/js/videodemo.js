// assets/js/videodemo.js

document.addEventListener("DOMContentLoaded", function () {
    const demoSelector = document.getElementById("demo-selector");
    const videoViewer = document.getElementById("video-viewer");
    const gifViewer = document.getElementById("gif-viewer");
    const demoDescription = document.getElementById("demo-description");

    demoSelector.addEventListener("change", function () {
        const selectedOption = demoSelector.options[demoSelector.selectedIndex];
        const selectedValue = demoSelector.value;
        const description = selectedOption.getAttribute("data-description");

        // If an MP4 video is selected
        if (selectedValue.endsWith(".mp4")) {
            gifViewer.style.display = "none";
            videoViewer.src = selectedValue;
            videoViewer.style.display = "block";
            videoViewer.play();
        } 
        // If a GIF is selected
        else if (selectedValue.endsWith(".gif")) {
            videoViewer.style.display = "none";
            gifViewer.src = selectedValue;
            gifViewer.style.display = "block";
        } 
        // If no valid demo is selected
        else {
            videoViewer.style.display = "none";
            gifViewer.style.display = "none";
        }

        // Update the description
        demoDescription.textContent = description || "Select a project demo to view.";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const demoSelector = document.getElementById("demo-selector");
    const videoViewer = document.getElementById("video-viewer");
    const gifViewer = document.getElementById("gif-viewer");
    const demoDescription = document.getElementById("demo-description");

    // Check localStorage for a saved demo
    const savedDemo = localStorage.getItem("selectedDemo");
    if (savedDemo) {
        demoSelector.value = savedDemo;
        updateDemoDisplay(savedDemo);
    }

    demoSelector.addEventListener("change", function () {
        const selectedValue = demoSelector.value;
        localStorage.setItem("selectedDemo", selectedValue); // Save the selected demo
        updateDemoDisplay(selectedValue);
    });

    function updateDemoDisplay(selectedValue) {
        const selectedOption = demoSelector.options[demoSelector.selectedIndex];
        const description = selectedOption.getAttribute("data-description");
    
        // Pause and reset the previous video before switching
        if (videoViewer.src && videoViewer.paused === false) {
            videoViewer.pause(); // Stop the current video
            videoViewer.currentTime = 0; // Reset the video to the start
        }
    
        if (selectedValue === "") {
            // Hide both video and gif players if no demo is selected
            videoViewer.style.display = "none";
            gifViewer.style.display = "none";
            return;
        }
    
        // If an MP4 video is selected
        if (selectedValue.endsWith(".mp4")) {
            gifViewer.style.display = "none";
            videoViewer.src = selectedValue;
            videoViewer.style.display = "block";
            videoViewer.play();
        } 
        // If a GIF is selected
        else if (selectedValue.endsWith(".gif")) {
            videoViewer.style.display = "none";
            gifViewer.src = selectedValue;
            gifViewer.style.display = "block";
        }
    
        // Update the description
        demoDescription.textContent = description || "Select a project demo to view.";
    }
    
});
