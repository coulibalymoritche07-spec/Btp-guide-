function genererPlanning(ouvrage) {
    let html = `
        <h2>📅 Planning d'exécution - ${ouvrage.nom}</h2>
        <div class="planning-controls">
            <div class="form-group">
                <label>Date de démarrage :</label>
                <input type="date" id="date-debut" onchange="actualiserPlanning()">
            </div>
            <button class="btn btn-primary" onclick="window.print()">🖨️ Imprimer</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Phase</th>
                    <th>Début</th>
                    <th>Fin</th>
                    <th>Durée</th>
                    <th>Progression</th>
                </tr>
            </thead>
            <tbody id="planning-body">
            </tbody>
        </table>
        
        <h3>Planning hebdomadaire détaillé</h3>
        <div id="planning-hebdo"></div>
    `;
    
    document.getElementById('planning').innerHTML = html;
    actualiserPlanning();
}

function actualiserPlanning() {
    const dateDebut = new Date(document.getElementById('date-debut').value || new Date());
    let dateCourante = new Date(dateDebut);
    let html = '';
    
    ouvrageActuel.phases.forEach((phase, index) => {
        const dureeJours = estimerDuree(phase.duree);
        const dateFin = new Date(dateCourante);
        dateFin.setDate(dateFin.getDate() + dureeJours);
        
        html += `
            <tr>
                <td><strong>${phase.titre}</strong></td>
                <td>${dateCourante.toLocaleDateString('fr-FR')}</td>
                <td>${dateFin.toLocaleDateString('fr-FR')}</td>
                <td>${dureeJours} jours</td>
                <td><input type="range" min="0" max="100" value="0" class="progression-slider"></td>
            </tr>
        `;
        
        dateCourante = new Date(dateFin);
    });
    
    document.getElementById('planning-body').innerHTML = html;
    genererPlanningHebdo(dateDebut);
}

function estimerDuree(dureeStr) {
    const nombres = dureeStr.match(/\d+/g);
    if (nombres && nombres.length >= 2) {
        return (parseInt(nombres[0]) + parseInt(nombres[1])) / 2 * 7;
    }
    return parseInt(nombres[0]) * 7 || 7;
}

function genererPlanningHebdo(dateDebut) {
    const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    let html = '<div class="semainier">';
    
    jours.forEach(jour => {
        html += `
            <div class="jour-card">
                <h4>${jour}</h4>
                <textarea placeholder="Tâches du jour..." rows="4"></textarea>
            </div>
        `;
    });
    
    html += '</div>';
    document.getElementById('planning-hebdo').innerHTML = html;
}
