// --- Lógica do Easter Egg ---
let clickCount = 0;
let clickTimer;
const trigger = document.getElementById('secret-trigger');
const secretName = document.getElementById('easter-egg-name');

if (trigger) {
    trigger.addEventListener('click', () => {
        clickCount++;

        // Reinicia a contagem se o usuário demorar muito entre os cliques
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 1000); // 1 segundo para fazer a sequência

        // Se clicar 5 vezes
        if (clickCount === 5) {
            showSecret();
            clickCount = 0;
        }
    });
}

function showSecret() {
    secretName.style.display = 'block';
    
    // Adiciona uma animação simples de escala
    secretName.animate([
        { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 0 },
        { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 1 },
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 }
    ], { duration: 300 });

    // Esconde após 1 segundo
    setTimeout(() => {
        secretName.style.display = 'none';
    }, 1000);
}
