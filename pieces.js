// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for (let i=0; i < pieces.length; i++){
    const article = pieces[i];
    const sectionFiches = document.querySelector(".fiches");
    const pieceElement = document.createElement("article");

    const imageElement = document.createElement("img");
    imageElement.src = article.image;

    const nomElement = document.createElement("h2");
    nomElement.textContent = article.nom;

    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

    const categorieElement = document.createElement("p");
    categorieElement.textContent = article.categorie ?? "(aucune catégorie)";

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = article.description ?? "(Pas de description pour le moment)";

    const stockElement = document.createElement("p");
    stockElement.textContent = article.disponibilite ? "En stock" : "Rupture de stock";

    sectionFiches.appendChild(pieceElement);
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
}

const boutonTrier = document.querySelector(".btn-trier")
;
boutonTrier.addEventListener("click", function (){
    const piecesOrdonnes = Array.from(pieces);
    piecesOrdonnes.sort(function(a, b){
        return a.prix - b.prix;
    });
    console.log(piecesOrdonnes);
});

const boutonFilter = document.querySelector(".btn-filtrer");

boutonFilter.addEventListener("click", function (){
    const piecesFltrees = pieces.filter(function(piece){
        return piece.prix<=35;
    });
    console.log(piecesFltrees);
});

const boutonDescription = document.querySelector(".btn-description");

boutonDescription.addEventListener("click", function (){
    const piecesDescription = pieces.filter(function(piece){
        return piece.description;
    });
    console.log(piecesDescription);
});

const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function (){
    const piecesDecroissant = Array.from(pieces);
    piecesDecroissant.sort(function(a, b){
        return b.prix - a.prix;
    });
    console.log(piecesDecroissant);
});