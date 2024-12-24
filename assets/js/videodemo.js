document.addEventListener('DOMContentLoaded', function() {
    const demoSelector = document.getElementById('demo-selector');
    const videoViewer = document.getElementById('video-viewer');
    const gifViewer = document.getElementById('gif-viewer');
    const description = document.getElementById('description');
    const projects = document.querySelectorAll('.project'); // Assuming all project items have this class

    // Hide all project class items
    projects.forEach(function(project) {
        project.style.display = 'none';
    });

    demoSelector.value = "";

    demoSelector.addEventListener('change', function() {
        const selectedOption = demoSelector.options[demoSelector.selectedIndex];
        const videoUrl = selectedOption.value;
        const projectDescription = selectedOption.getAttribute('data-description');
        const projectId = selectedOption.getAttribute('project-id');

        // Pause the video if it's currently playing
        if (!videoViewer.paused) {
            videoViewer.pause(); // Pause the video
        }

        // Hide all project class items
        projects.forEach(function(project) {
            project.style.display = 'none';
        });

        // Hide video and gif by default
        videoViewer.hidden = true;
        gifViewer.hidden = true;
        videoViewer.style.display = 'none'; // Hide the video player
        description.textContent = '';

        // Show selected project
        const selectedProject = document.getElementById(projectId);
        if (selectedProject) {
            selectedProject.style.display = 'block'; // Show the corresponding project class item
        }

        if (videoUrl) {
            // If it's a video, show the video element
            if (videoUrl.endsWith('.mp4')) {
                videoViewer.src = videoUrl;
                videoViewer.hidden = false;
                videoViewer.style.display = 'block'; // Show the video player
            } else if (videoUrl.endsWith('.gif')) {
                // If it's a gif, show the gif element
                gifViewer.src = videoUrl;
                gifViewer.hidden = false;
            }

            // Display the description
            description.textContent = projectDescription;
        }
    });
});
