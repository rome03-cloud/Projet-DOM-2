// 1. Attendre que le contenu du DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. Sélectionner les éléments HTML par leur ID
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // 3. Fonction pour générer une couleur hexadécimale aléatoire
    function getRandomColor() {
        // Liste des caractères possibles pour un code hexadécimal
        const letters = '0123456789ABCDEF';
        let color = '#';
        
        // On boucle 6 fois pour obtenir les 6 caractères du code (ex: #34A853)
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color;
    }

    // 4. Ajouter l'écouteur d'événement sur le bouton
    changeColorBtn.addEventListener('click', function() {
        // Appeler la fonction de génération de couleur
        const newColor = getRandomColor();
        
        // Appliquer la nouvelle couleur à la boîte
        colorBox.style.backgroundColor = newColor;
    });
});