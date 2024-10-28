let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    
    // Esconde todas as imagens
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Incrementa o índice do slide
    slideIndex++;

    // Reinicia o índice ao final do conjunto de slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Mostra a imagem atual
    slides[slideIndex - 1].style.display = "block";

    // Muda a imagem a cada 3 segundos
    setTimeout(showSlides, 3000);
}

// caixa de busca
const suggestions = [
    "Camiseta do Corinthians",
    "Camiseta do Flamengo",
    "Camiseta do Real Madrid",
    "Camiseta da Seleção Brasileira",
    "Camiseta do Manchester United",
    "Camiseta do PSG",
    "Camiseta do São Paulo",
    "Camiseta do Palmeiras",
    "Camiseta do Santos",
    "Camiseta do All Naser",
    "Camiseta da Seleção Argentina"
];

function showSuggestions(value) {
    const suggestionBox = document.getElementById('suggestions');
    suggestionBox.innerHTML = '';
    if (value.length === 0) {
        suggestionBox.style.display = 'none';
        return;
    }

    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredSuggestions.length === 0) {
        suggestionBox.style.display = 'none';
        return;
    }

    filteredSuggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.textContent = suggestion;
        suggestionItem.onclick = function() {
            document.getElementById('search').value = suggestion;
            suggestionBox.style.display = 'none';
        };
        suggestionBox.appendChild(suggestionItem);
    });

    suggestionBox.style.display = 'block';
}

// JS de ofertas do meio
document.addEventListener('DOMContentLoaded', () => {
    const ofertas = document.querySelectorAll('.oferta-item');
    let currentIndex = 0;

    function showNextOffer() {
        // Remove a classe active do parágrafo atual
        ofertas[currentIndex].classList.remove('active');

        // Atualiza o índice para o próximo parágrafo
        currentIndex = (currentIndex + 1) % ofertas.length;

        // Adiciona a classe active ao próximo parágrafo
        ofertas[currentIndex].classList.add('active');
    }

    // Troca de parágrafo a cada 3 segundos (3000ms)
    setInterval(showNextOffer, 3000);
});

