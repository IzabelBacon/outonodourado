// Carrinho de compras simples
const cartButtons = document.querySelectorAll('[class*="fa-cart-plus"]');
let cartCount = 0;
const cartBadge = document.querySelector('.fa-shopping-cart').nextElementSibling;

cartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        cartCount++;
        cartBadge.textContent = cartCount;

        // Efeito visual
        const cartIcon = this;
        cartIcon.classList.add('animate-bounce');
        setTimeout(() => {
            cartIcon.classList.remove('animate-bounce');
        }, 1000);
    });
});

// Menu mobile (simplificado)
const mobileMenuButton = document.querySelector('.fa-bars').parentElement;
const mobileMenu = document.querySelector('.md\\:hidden');

mobileMenuButton.addEventListener('click', function() {
    // Implementação simplificada - em um caso real, seria mais complexo
    alert('Menu mobile seria aberto aqui em uma implementação completa');
});

