// Fade-in and slide-in animation
const fadeElements = document.querySelectorAll('.fade-in');
const slideInElements = document.querySelectorAll('.slide-in');

const fadeIn = (element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
        element.classList.add('visible');
    }
};

// Skill bar animation
const skillBars = document.querySelectorAll('.skill-bar');

const animateSkillBars = () => {
  skillBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    bar.style.width = `${percentage}%`;
  });
};

// Use Intersection Observer to trigger animation when in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkillBars();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => observer.observe(bar));


// Scroll event listener
window.addEventListener('scroll', () => {
    fadeElements.forEach(fadeIn);
    slideInElements.forEach(fadeIn);
    animateSkillBars();
});

// Magnetic button effect
const magneticButtons = document.querySelectorAll('.magnetic-button');
magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const position = button.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;
        
        button.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'translate(0px, 0px)';
    });
});

// Contact form functionality
const contactForm = document.getElementById('contact-form');
const formInputs = document.querySelectorAll('.input-group input, .input-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('focused');
        }
    });
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We\'ll get back to you soon.');
    contactForm.reset();
    formInputs.forEach(input => {
        input.parentElement.classList.remove('focused');
    });
});

// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact form submission logic
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
      const mailtoLink = `mailto:shubham.ind7106@gmail.com?subject=Contact Form Submission from ${encodeURIComponent(name)}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;
      window.location.href = mailtoLink;

      alert("Opening your email client...");
      document.getElementById("contact-form").reset();
  } else {
	  alert("Please fill out all the fields before submitting.");
  }
});


// Set initial state to light mode
body.classList.remove('dark-mode');
icon.className = 'fas fa-moon';
text.textContent = 'Dark Mode';

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        text.textContent = 'Light Mode';
    } else {
        icon.className = 'fas fa-moon';
        text.textContent = 'Dark Mode';
    }
});





// Initial animations
fadeElements.forEach(fadeIn);
slideInElements.forEach(fadeIn);
animateSkillBars();
