function genererDevis(ouvrage) {
    let html = `
        <h2>📊 Devis Quantitatif et Estimatif</h2>
        <h3>${ouvrage.nom}</h3>
        
        <div class="form-group">
            <h4>Paramètres de l'ouvrage</h4>
            <div id="params-container">
                ${genererFormulaireParametres(ouvrage)}
            </div>
            <button class="btn btn-success" onclick="calculerMetre()">🔢 Calculer le métré</button>
        </div>
        
        <div id="resultats-metre"></div>
        
        <button class="btn btn-primary" onclick="window.print()">🖨️ Imprimer le devis</button>
    `;
    
    document.getElementById('metre').innerHTML = html;
}

function genererFormulaireParametres(ouvrage) {
    if (ouvrage.id === 'dalot') {
        return `
            <label>Longueur (m) : <input type="number" id="longueur" value="10" step="0.1"></label>
            <label>Largeur intérieure (m) : <input type="number" id="largeur" value="2" step="0.1"></label>
            <label>Hauteur (m) : <input type="number" id="hauteur" value="1.5" step="0.1"></label>
            <label>Épaisseur radier (m) : <input type="number" id="ep-radier" value="0.25" step="0.01"></label>
            <label>Épaisseur piédroits (m) : <input type="number" id="ep-piedroits" value="0.20" step="0.01"></label>
            <label>Épaisseur tablier (m) : <input type="number" id="ep-tablier" value="0.20" step="0.01"></label>
        `;
    } else if (ouvrage.id === 'batiment') {
        return `
            <label>Surface au sol (m²) : <input type="number" id="surface" value="100"></label>
            <label>Nombre de niveaux : <input type="number" id="niveaux" value="3"></label>
        `;
    }
    return '<p>Formulaire spécifique en développement</p>';
}

function calculerMetre() {
    let html = '<h4>Résultats du métré</h4><table><thead><tr><th>Désignation</th><th>Unité</th><th>Quantité</th><th>P.U. (FCFA)</th><th>Total (FCFA)</th></tr></thead><tbody>';
    let total = 0;
    
    if (ouvrageActuel.id === 'dalot') {
        const L = parseFloat(document.getElementById('longueur').value);
        const l = parseFloat(document.getElementById('largeur').value);
        const h = parseFloat(document.getElementById('hauteur').value);
        const er = parseFloat(document.getElementById('ep-radier').value);
        const ep = parseFloat(document.getElementById('ep-piedroits').value);
        const et = parseFloat(document.getElementById('ep-tablier').value);
        
        // Calculs
        const foulle = (L + 1) * (l + 2*ep + 1) * (h + er + et + 0.3);
        const proprete = (L + 0.4) * (l + 2*ep + 0.4) * 0.1;
        const radier = (L + 0.4) * (l + 2*ep + 0.4) * er;
        const piedroits
