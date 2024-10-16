// Initialize Lucide icons
lucide.createIcons();

// Project data
const projects = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution built with HTML, CSS, JavaScript, Node.js, and MongoDB.',
        link: 'https://github.com/johndoe/ecommerce-platform',
    },
    {
        title: 'Weather App',
        description: 'A responsive weather application using HTML, CSS, JavaScript, and OpenWeatherMap API.',
        link: 'https://github.com/johndoe/weather-app',
    },
    {
        title: 'Task Manager',
        description: 'A simple task management tool built with HTML, CSS, JavaScript, and localStorage.',
        link: 'https://github.com/johndoe/task-manager',
    },
];

// Populate projects
const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">
            View Project <i data-lucide="external-link"></i>
        </a>
    `;
    projectsContainer.appendChild(projectCard);
});

// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize Lucide icons after adding dynamic content
lucide.createIcons();