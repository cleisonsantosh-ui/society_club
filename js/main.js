document.addEventListener('DOMContentLoaded', () => {

  // 1. Menu Mobile Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      navToggle.innerHTML = isOpen ? '✕' : '☰';
    });
  }

  // 2. Copy Prompt Button
  const copyButtons = document.querySelectorAll('.cpy-btn');
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const container = button.closest('.prompt-container');
      const bodyText = container.querySelector('.prompt-body');

      if (bodyText) {
        navigator.clipboard.writeText(bodyText.innerText.trim()).then(() => {
          const originalText = button.innerHTML;
          button.style.backgroundColor = '#27FF9B';
          button.style.color = '#020403';
          button.innerHTML = '✓ Copiado!';

          setTimeout(() => {
            button.style.backgroundColor = '';
            button.style.color = '';
            button.innerHTML = originalText;
          }, 2000);
        }).catch(err => {
          console.error('Erro ao copiar prompt: ', err);
        });
      }
    });
  });

  // 3. FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const isCurrentlyActive = question.classList.contains('active');

      faqQuestions.forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.style.maxHeight = null;
      });

      if (!isCurrentlyActive) {
        question.classList.add('active');
        const answer = question.nextElementSibling;
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // 4. Contact Form Dummy Success
  const contactForm = document.getElementById('evilContactForm');
  const feedbackMsg = document.getElementById('evilFeedbackMsg');
  if (contactForm && feedbackMsg) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.reset();
      feedbackMsg.style.display = 'block';
      setTimeout(() => {
        feedbackMsg.style.display = 'none';
      }, 5000);
    });
  }

  // 5. Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // 6. Particles Canvas (Hero)
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
        pulse: Math.random() * Math.PI * 2
      };
    }

    function initParticles() {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.02;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const glow = Math.sin(p.pulse) * 0.2 + 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(39, 255, 155, ${p.opacity * glow})`;
        ctx.fill();
      });

      // Draw connections between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(39, 255, 155, ${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(drawParticles);
    }

    resizeCanvas();
    initParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
  }

});
