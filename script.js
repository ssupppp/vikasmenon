// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Update active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

function updateActiveLink() {
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = '#8b7355';
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

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

