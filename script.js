// Variabile globale
let clickCount = 0;
const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
];

// Elemente DOM
const changeColorBtn = document.getElementById('changeColorBtn');
const animateBtn = document.getElementById('animateBtn');
const clickCountElement = document.getElementById('clickCount');
const title = document.querySelector('.title');
const hero = document.querySelector('.hero');

// Funcții
function updateClickCount() {
    clickCount++;
    clickCountElement.textContent = clickCount;
    clickCountElement.parentElement.classList.add('bounce');
    setTimeout(() => {
        clickCountElement.parentElement.classList.remove('bounce');
    }, 600);
}

function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
    updateClickCount();
    
    // Efect de feedback vizual pentru buton
    changeColorBtn.classList.add('bounce');
    setTimeout(() => {
        changeColorBtn.classList.remove('bounce');
    }, 600);
}

function animateTitle() {
    title.classList.add('shake');
    updateClickCount();
    
    // Schimbă temporar textul
    const originalText = title.textContent;
    title.textContent = 'Salut Lume! 🎉';
    
    setTimeout(() => {
        title.textContent = originalText;
        title.classList.remove('shake');
    }, 1000);
    
    // Efect pentru buton
    animateBtn.classList.add('bounce');
    setTimeout(() => {
        animateBtn.classList.remove('bounce');
    }, 600);
}

function addFloatingElements() {
    // Creează elemente floating pentru background
    for (let i = 0; i < 6; i++) {
        const floatingElement = document.createElement('div');
        floatingElement.className = 'floating-element';
        floatingElement.style.cssText = `
            position: fixed;
            width: ${Math.random() * 20 + 10}px;
            height: ${Math.random() * 20 + 10}px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            z-index: -1;
        `;
        document.body.appendChild(floatingElement);
        
        // Șterge elementul după animație
        setTimeout(() => {
            if (floatingElement.parentNode) {
                floatingElement.parentNode.removeChild(floatingElement);
            }
        }, 20000);
    }
}

// CSS pentru elementele floating
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        from {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Event listeners
changeColorBtn.addEventListener('click', changeBackgroundColor);
animateBtn.addEventListener('click', animateTitle);

// Adaugă elemente floating la fiecare 3 secunde
setInterval(addFloatingElements, 3000);

// Mesaj de bun venit în consolă
console.log('🎉 Bine ai venit în aplicația Hello World!');
console.log('💡 Încearcă să apeși butoanele pentru efecte cool!');

// Animație inițială
setTimeout(() => {
    hero.style.transform = 'scale(1)';
    hero.style.opacity = '1';
}, 100); 