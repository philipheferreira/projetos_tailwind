        // Mobile Menu Toggle Logic
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // FAQ Accordion Logic
        const faqButtons = document.querySelectorAll('.faq-btn');

        faqButtons.forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                const icon = button.querySelector('svg');

                // Toggle max-height for smooth transition
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                    answer.classList.remove('active');
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    // Close other open answers (Optional behavior - "Accordion" style)
                    document.querySelectorAll('.faq-answer').forEach(item => {
                        item.style.maxHeight = null;
                        item.classList.remove('active');
                    });
                    document.querySelectorAll('.faq-btn svg').forEach(ic => {
                        ic.style.transform = 'rotate(0deg)';
                    });

                    answer.style.maxHeight = answer.scrollHeight + "px";
                    answer.classList.add('active');
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        });