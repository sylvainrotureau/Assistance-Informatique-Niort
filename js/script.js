// GESTION DES MODALES
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Fermer au clic extérieur
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}

// GESTION DES COOKIES
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}

// INITIALISATION AU CHARGEMENT
document.addEventListener('DOMContentLoaded', () => {
    // Affichage bannière cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            document.getElementById('cookie-banner').style.display = 'flex';
        }, 2000);
    }

    // Animation défilement fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
