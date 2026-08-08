// methodes.js
console.log('Module méthodes chargé');// normes.js
function afficherNormes(ouvrage) {
    let html = `<h2>📚 Normes applicables - ${ouvrage.nom}</h2><ul>`;
    ouvrage.normes.forEach(norme => {
        html += `<li>${norme}</li>`;
    });
    html += '</ul>';
    document.getElementById('normes').innerHTML = html;
}
