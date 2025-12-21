// Tab switching for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);

        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // Show target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.color = '';
        });
        this.style.color = '#8b7355';

        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Show articles section by default on load
window.addEventListener('load', function() {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    const articlesSection = document.getElementById('articles');
    if (articlesSection) {
        articlesSection.style.display = 'block';
    }
    // Set articles link as active
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === '#articles') {
            link.style.color = '#8b7355';
        }
    });
});

// Article expand/collapse functionality
document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const articleId = this.getAttribute('data-article');
            const fullContent = document.getElementById(`article-${articleId}`);
            const articleCard = this.closest('.article-card');

            if (fullContent.style.display === 'none') {
                fullContent.style.display = 'block';
                this.textContent = 'Show less';
                articleCard.classList.add('expanded');
            } else {
                fullContent.style.display = 'none';
                this.textContent = 'Read more';
                articleCard.classList.remove('expanded');

                // Scroll to article top when collapsing
                const navHeight = document.querySelector('nav').offsetHeight;
                const articleTop = articleCard.offsetTop - navHeight - 20;
                window.scrollTo({
                    top: articleTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

