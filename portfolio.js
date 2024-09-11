var button = document.getElementById("submitButton");


var messageElement = document.getElementById("message");

button.onclick = function(event) {
    event.preventDefault(); 

    button.textContent = "Processing..."; 
    console.log("Button clicked: Processing..."); 

    setTimeout(function() {
        
        button.textContent = "Submitted";
        console.log("Processing complete, button text reset to Submit");

     
        messageElement.textContent = ""; 
    }, 3000);
};


document.addEventListener('DOMContentLoaded', function() {
    var containers = document.querySelectorAll('[id]');
    var navLinks = document.querySelectorAll('.nav-link');
    var skillsSection = document.getElementById('skills');
    var skillBars = document.querySelectorAll('.insidebar1, .insidebar2, .insidebar3, .insidebar4, .insidebar5, .insidebar6, .insidebar7, .insidebar8');

    function removeActiveClasses() {
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
        }
    }

    function setActiveLink(id) {
        var activeLink = document.querySelector('.nav-link[href="#' + id + '"]');
        if (activeLink) {
            removeActiveClasses();
            activeLink.classList.add('active');
        }
    }

    function updateActiveLinkOnScroll() {
        var currentContainer = '';

        for (var i = 0; i < containers.length; i++) {
            var container = containers[i];
            var containerTop = container.getBoundingClientRect().top + window.scrollY;
            var containerHeight = container.offsetHeight;
            var containerBottom = containerTop + containerHeight;
            var scrollPosition = window.scrollY + (window.innerHeight / 2);

            if (scrollPosition >= containerTop && scrollPosition <= containerBottom) {
                currentContainer = container.getAttribute('id');
            }
        }

        if (currentContainer) {
            setActiveLink(currentContainer);
            if (currentContainer === 'skills') {
                resetSkillAnimations();
            }
        }
    }

    function resetSkillAnimations() {
        // Remove animation classes
        skillBars.forEach(function(bar) {
            bar.style.animation = 'none';
        });

   
        void skillsSection.offsetWidth; 

       
        skillBars.forEach(function(bar) {
            bar.style.animation = ''; 
        });
    }

    window.addEventListener('scroll', updateActiveLinkOnScroll);

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            var targetContainer = document.querySelector(this.getAttribute('href'));

            if (targetContainer) {
                removeActiveClasses();
                this.classList.add('active');

                window.scrollTo({
                    top: targetContainer.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    updateActiveLinkOnScroll();
});



  
