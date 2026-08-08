// Variables globales
let ouvrageActuel = null;

// Navigation entre modules
function showModule(moduleId) {
    // Masquer tous les modules
    document.querySelectorAll('.module').forEach(module => {
        module.classList.remove('active');
    });
    
    // Afficher le module demandé
    const module = document.getElementById(moduleId);
    if (module) {
        module.classList.add('active');
    }
    
    // Actions spécifiques selon le module
    if (moduleId === 'planning' && ouvrageActuel) {
        genererPlanning(ouvrageActuel);
    }
    if (moduleId === 'metre' && ouvrageActuel) {
        genererDevis(ouvrageActuel);
    }
    if (moduleId === 'rapports') {
        afficherRapports();
    }
    if (moduleId === 'normes' && ouvrageActuel) {
        afficherNormes(ouvrageActuel);
    }
}

// Chargement d'un ouvrage
function chargerOuvrage(id) {
    const ouvrage = BDD_OUVRAGES[id];
    if (!ouvrage) {
        alert('Ouvrage non trouvé dans la base de données');
        return;
    }
    
    ouvrageActuel = ouvrage;
    afficherOuvrage(ouvrage);
    showModule('ouvrages');
}

// Affichage détaillé d'un ouvrage
function afficherOuvrage(ouvrage) {
    let html = `
        <h2>${ouvrage.nom}</h2>
        <p class="type-ouvrage">${ouvrage.type}</p>
        <p class="description">${ouvrage.description}</p>
        
        <div class="actions-bar">
            <button class="btn btn-primary" onclick="showModule('planning')">📅 Planning</button>
            <button class="btn btn-success" onclick="showModule('metre')">📊 Métré/Devis</button>
            <button class="btn btn-warning" onclick="showModule('normes')">📚 Normes</button>
        </div>
        
        <h3>📋 Phases de réalisation</h3>
        <div class="phase-container">
    `;
    
    ouvrage.phases.forEach((phase, index) => {
        html += `
            <div class="phase">
                <div class="phase-header" onclick="togglePhase(${index})">
                    <span>${phase.titre}</span>
                    <span>⏱️ ${phase.duree}</span>
                </div>
                <div class="phase-content" id="phase-${index}">
                    <ul>
                        ${phase.taches.map(tache => `<li>${tache}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    
    document.getElementById('ouvrages').innerHTML = html;
}

// Toggle phase
function togglePhase(index) {
    const content = document.getElementById(`phase-${index}`);
    content.classList.toggle('show');
}

// Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('Service Worker enregistré'))
            .catch(err => console.log('Erreur SW:', err));
    });
}

// Installation PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
    const btnInstall = document.createElement('button');
    btnInstall.textContent = '📱 Installer l\'application';
    btnInstall.className = 'btn btn-primary';
    btnInstall.onclick = () => {
        deferredPrompt.prompt();
    };
    document.querySelector('header').appendChild(btnInstall);
});
