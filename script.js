// Gestion de la navigation mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Fermer le menu mobile lors du clic sur un lien
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Gestion du sélecteur de langue
    const langButtons = document.querySelectorAll('.lang-dropdown button');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            document.querySelector('.lang-btn').textContent = this.textContent.charAt(0);
            // Ici, vous ajouteriez la logique pour changer la langue du site
            console.log(`Changement de langue vers: ${lang}`);
        });
    });
    
    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    const elementsToAnimate = document.querySelectorAll('.about-content, .values, .product-card, .contact-form, .contact-info');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // Filtrage des produits
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            productCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Ici, vous ajouteriez la logique pour envoyer le formulaire
            console.log('Formulaire soumis:', { name, email, message });
            
            // Message de confirmation
            alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
            this.reset();
        });
    }
    
    // Données des produits (à remplacer par des données réelles)
    const productsData = [
        {
            id: 1,
            name: "Entrecôte de bœuf",
            category: "boeuf",
            price: "24,90 €/kg",
            description: "Entrecôte de bœuf français, tendre et savoureuse, idéale pour les grillades.",
            image: "https://images.unsplash.com/photo-1588347818122-c6c8e5825c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 2,
            name: "Filet mignon de porc",
            category: "porc",
            price: "18,50 €/kg",
            description: "Filet mignon de porc fermier, tendre et juteux, parfait pour les rôtis.",
            image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 3,
            name: "Poulet fermier",
            category: "volaille",
            price: "12,90 €/kg",
            description: "Poulet fermier élevé en plein air, chair ferme et goûteuse.",
            image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 4,
            name: "Saucisson artisanal",
            category: "charcuterie",
            price: "22,00 €/kg",
            description: "Saucisson sec artisanal, affiné pendant 6 mois, saveur intense.",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
        },
        {
            id: 5,
            name: "Côte de bœuf",
            category: "boeuf",
            price: "32,50 €/kg",
            description: "Côte de bœuf persillée, idéale pour les grandes occasions.",
            image: "https://images.unsplash.com/photo-1588347818122-c6c8e5825c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 6,
            name: "Jambon blanc",
            category: "charcuterie",
            price: "16,90 €/kg",
            description: "Jambon blanc de qualité supérieure, tranché à la demande.",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
        }
    ];
    
    // Génération des produits
    const productsGrid = document.querySelector('.products-grid');
    
    if (productsGrid) {
        productsData.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.setAttribute('data-category', product.category);
            
            productCard.innerHTML = `
                <div class="product-image" style="background-image: url('${product.image}')"></div>
                <div class="product-info">
                    <span class="product-category">${getCategoryName(product.category)}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">${product.price}</div>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
        });
    }
    
    function getCategoryName(category) {
        const categories = {
            'boeuf': 'Bœuf',
            'porc': 'Porc',
            'volaille': 'Volaille',
            'charcuterie': 'Charcuterie'
        };
        
        return categories[category] || category;
    }
});