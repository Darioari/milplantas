/* ==========================================================================
   MIL PLANTAS - PRODUCT BUILDERS VORU ENGINE (WITH HERO LEAD FORM)
   ========================================================================== */

// --- 1. PRODUCTS DATA (USANDO AS IMAGENS REAIS DA PASTA IMAGENS/) ---
const PRODUCTS = [
  {
    id: 'orquidea-vanda',
    title: 'Orquídea Vanda Imperial',
    titleTag: 'Orquídea Exótica • Raízes Aéreas',
    subtitle: 'Cultivada no Espaço MilPlantas',
    category: 'flores-plantas',
    targetInterest: 'Flores e Plantas',
    image: 'imagens/mil plantas - 1.png',
    tag: 'FLOR DESTAQUE 💜',
    description: 'Espécie nobre de orquídea com floração roxa intensa e raízes completas expostas. Ideal para ambientes sofisticados.'
  },
  {
    id: 'caixa-buque-premium',
    title: 'Caixa Buquê MilPlantas Premium',
    titleTag: 'Flores de Corte Mistas em Caixa de Presente',
    subtitle: 'Seleção Diária de Holambra',
    category: 'flores-plantas',
    targetInterest: 'Flores e Plantas',
    image: 'imagens/mil plantas - 2.png',
    tag: 'PRESENTES EXCLUSIVOS 🌸',
    description: 'Arranjo floral exuberante montado artesanalmente em caixa verde exclusiva da MilPlantas com laço acetinado.'
  },
  {
    id: 'caixa-rosas-pink',
    title: 'Caixa Floral Edição Rosas & Alstroemérias',
    titleTag: 'Arranjo Delicado em Caixa Verde Oficial',
    subtitle: 'Presente Elegante e Inesquecível',
    category: 'flores-plantas',
    targetInterest: 'Flores e Plantas',
    image: 'imagens/mil plantas - 3.png',
    tag: 'EDIÇÃO ESPECIAL 🎁',
    description: 'Composição romântica com tons de rosa, branco e folhagens finas acomodada em caixa rígida personalizada da MilPlantas.'
  },
  {
    id: 'colecao-bonsai',
    title: 'Coleção Bonsai & Mudas Ornamentais',
    titleTag: 'Arte Botânica • Cultivo Minucioso',
    subtitle: 'Variedade para Amantes da Jardinagem',
    category: 'flores-plantas',
    targetInterest: 'Flores e Plantas',
    image: 'imagens/mil plantas - 5.png',
    tag: 'JARDINAGEM TÉCNICA 🌳',
    description: 'Exemplares cultivados com técnicas milenares de poda e modelagem. Acompanha vaso de cerâmica de alta densidade.'
  },
  {
    id: 'mesa-posta-eventos',
    title: 'Projeto Floral & Mesa Posta para Eventos',
    titleTag: 'Noivados, Mini Weddings & Recepções',
    subtitle: 'Ambientação Completa Sob Medida',
    category: 'projetos-personalizados',
    targetInterest: 'Projetos personalizados',
    image: 'imagens/mil plantas - 12.png',
    tag: 'PROJETO SOB MEDIDA 🕯️',
    description: 'Arranjos florais de centro de mesa, castiçais finos, suporte para velas e folhagens nobres para eventos inesquecíveis.'
  },
  {
    id: 'vaso-decoracao',
    title: 'Vaso Cerâmica & Elementos de Decoração',
    titleTag: 'Artigos de Decoração Finos',
    subtitle: 'Design de Interiores & Paisagismo',
    category: 'decoracao',
    targetInterest: 'Acessórios e elementos de decoração',
    image: 'imagens/mil plantas - 4.png',
    tag: 'DECORAÇÃO 🪴',
    description: 'Peças selecionadas para harmonizar com folhagens e plantas em vaso em varandas, salas e recepções.'
  },
  {
    id: 'monstera-deliciosa',
    title: 'Monstera Deliciosa & Folhagens',
    titleTag: 'Costela de Adão • Folhagem Escultural',
    subtitle: 'Decoração e Purificação do Ar',
    category: 'flores-plantas',
    targetInterest: 'Flores e Plantas',
    image: 'imagens/mil plantas - 6.png',
    tag: 'MAIS POPULAR 🌿',
    description: 'Folhas fenestradas e brilhantes que trazem a imponência da natureza tropical diretamente para o ambiente.'
  },
  {
    id: 'arranjos-especiais',
    title: 'Arranjos Especiais em Cerâmica',
    titleTag: 'Peças Exclusivas MilPlantas',
    subtitle: 'Design Autoral Botânico',
    category: 'decoracao',
    targetInterest: 'Acessórios e elementos de decoração',
    image: 'imagens/mil plantas - 7.png',
    tag: 'ARTESANAL ✨',
    description: 'Composições exclusivas preparadas por floristas sêniores com folhagens desidratadas e flores vivas.'
  }
];

// --- 2. STATE ---
let quizAnswers = {};

// --- 3. DOM LOADED INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog('todos');
  checkStoreStatus();
  setupScrollReveal();
  setupSpotlightEffect();
  setupHeroForm();
  setupEventListeners();
  initLucide();
});

function initLucide() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

// --- 4. HERO WHATSAPP FORM SUBMISSION ---
function setupHeroForm() {
  const form = document.getElementById('heroWhatsappForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('leadName').value.trim();
    const phone = document.getElementById('leadPhone').value.trim();
    const email = document.getElementById('leadEmail').value.trim();
    const interestRadio = document.querySelector('input[name="leadInterest"]:checked');
    const interest = interestRadio ? interestRadio.value : 'Flores e Plantas';

    let message = `Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20pelo%20site%20da%20MilPlantas:%0A%0A`;
    message += `%E2%80%A2%20*Nome:*%20${encodeURIComponent(name)}%0A`;
    message += `%E2%80%A2%20*Telefone:*%20${encodeURIComponent(phone)}%0A`;
    message += `%E2%80%A2%20*E-mail:*%20${encodeURIComponent(email)}%0A`;
    message += `%E2%80%A2%20*Interesse:*%20${encodeURIComponent(interest)}`;

    window.open(`https://wa.me/5511940158039?text=${message}`, '_blank');
  });
}

// --- 5. FUNCTION TO SCROLL TO HERO FORM & SELECT INTEREST ---
function scrollToForm(targetInterest = 'Flores e Plantas') {
  const formCard = document.getElementById('formCard') || document.getElementById('heroWhatsappForm');
  if (formCard) {
    formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

    if (targetInterest) {
      const radio = document.querySelector(`input[name="leadInterest"][value="${targetInterest}"]`);
      if (radio) radio.checked = true;
    }

    setTimeout(() => {
      const nameInput = document.getElementById('leadName');
      if (nameInput) nameInput.focus();
    }, 600);
  }
}

// --- 6. SCROLL REVEAL OBSERVER ---
function setupScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
}

// --- 7. SPOTLIGHT MOUSE TRACKER ---
function setupSpotlightEffect() {
  document.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// --- 8. RENDER CATALOG GRID ---
function renderCatalog(filter = 'todos') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = filter === 'todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card spotlight-card glass-card">
      <div class="product-media">
        <span class="product-badge-tag font-mono">${p.tag}</span>
        <img src="${p.image}" alt="${p.title}" loading="lazy">
      </div>
      <div class="product-content">
        <h3 class="product-title">${p.title}</h3>
        <p class="product-subtitle font-mono">${p.subtitle}</p>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem; line-height: 1.5;">${p.description}</p>
        
        <div class="product-footer" style="padding-top: 0; border: none;">
          <button onclick="scrollToForm('${p.targetInterest}')" class="btn btn-emerald font-mono w-100">
            <span>Solicitar orçamento</span>
            <i data-lucide="arrow-up-right"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  initLucide();
}

// --- 9. EVENT LISTENERS ---
function setupEventListeners() {
  // Filter Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderCatalog(e.target.dataset.filter);
    });
  });

  // Dark/Light Theme Toggle
  const themeToggleBtn = document.getElementById('themeToggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light');
    });
  }
}

// --- 10. STORE STATUS CHECKER ---
function checkStoreStatus() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  let isOpen = false;
  if (day >= 1 && day <= 6 && hour >= 8 && hour < 18) {
    isOpen = true;
  } else if (day === 0 && hour >= 9 && hour < 14) {
    isOpen = true;
  }

  const badgeDot = document.querySelector('.badge-dot');
  if (badgeDot) {
    badgeDot.style.background = isOpen ? '#10b981' : '#ef4444';
    badgeDot.style.boxShadow = isOpen ? '0 0 10px #10b981' : '0 0 10px #ef4444';
  }
}
