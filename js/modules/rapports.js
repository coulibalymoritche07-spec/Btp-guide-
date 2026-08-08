function afficherRapports() {
    const aujourdhui = new Date().toISOString().split('T')[0];
    
    let html = `
        <h2>📋 Rapports de chantier</h2>
        
        <div class="rapport-tabs">
            <button class="btn btn-primary" onclick="genererRapportJournalier()">Journalier</button>
            <button class="btn btn-primary" onclick="genererRapportHebdo()">Hebdomadaire</button>
            <button class="btn btn-primary" onclick="genererDemandeReception()">Demande réception</button>
        </div>
        
        <div id="rapport-content">
            ${genererRapportJournalier()}
        </div>
    `;
    
    document.getElementById('rapports').innerHTML = html;
}

function genererRapportJournalier() {
    return `
        <h3>Rapport Journalier</h3>
        <div class="form-group">
            <label>Date : <input type="date" value="${new Date().toISOString().split('T')[0]}"></label>
            <label>Projet : <input type="text" value="${ouvrageActuel ? ouvrageActuel.nom : ''}"></label>
            <label>Météo : 
                <select><option>Beau temps</option><option>Nuageux</option><option>Pluie</option></select>
            </label>
        </div>
        
        <h4>Personnel présent</h4>
        <table>
            <tr><td>Main d'œuvre</td><td><input type="number" value="0"></td></tr>
            <tr><td>Chef chantier</td><td><input type="text"></td></tr>
            <tr><td>Conducteur travaux</td><td><input type="text"></td></tr>
        </table>
        
        <h4>Travaux réalisés</h4>
        <textarea rows="5" placeholder="Décrire les travaux du jour..."></textarea>
        
        <h4>Matériel utilisé</h4>
        <textarea rows="3" placeholder="Liste des engins et matériels..."></textarea>
        
        <h4>Observations</h4>
        <textarea rows="3" placeholder="Incidents, retards, problèmes..."></textarea>
        
        <button class="btn btn-success" onclick="window.print()">🖨️ Imprimer le rapport</button>
    `;
}

function genererRapportHebdo() {
    return `
        <h3>Rapport Hebdomadaire</h3>
        <p>Période du <input type="date"> au <input type="date"></p>
        <textarea rows="10" placeholder="Synthèse de la semaine..."></textarea>
        <button class="btn btn-success" onclick="window.print()">🖨️ Imprimer</button>
    `;
}

function genererDemandeReception() {
    return `
        <h3>📝 Demande de réception</h3>
        <div class="form-group">
            <label>À : <input type="text" placeholder="Mission de Contrôle"></label>
            <label>Objet : <input type="text" placeholder="Réception bétonnage radier"></label>
            <label>Date : <input type="date"></label>
            <label>Heure : <input type="time"></label>
        </div>
        
        <h4>Documents joints :</h4>
        <ul>
            <li>☐ Plans d'exécution</li>
            <li>☐ Fiche de contrôle interne</li>
            <li>☐ Résultats d'essais béton</li>
            <li>☐ Rapport de compactage</li>
        </ul>
        
        <button class="btn btn-warning" onclick="window.print()">📨 Imprimer la demande</button>
    `;
      }
