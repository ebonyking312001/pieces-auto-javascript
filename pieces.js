// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
//
//const article = pieces[0];
//const imageElement = document.createElement("img");
//imageElement.src = article.image;
//const nomElement = document.createElement("h2");
//nomElement.textContent = article.nom;
//const prixElement = document.createElement("p");
//prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
//const categorieElement = document.createElement("p");
//categorieElement.textContent = article.categorie ?? "(aucune catégorie)"
//
//const sectionFiches = document.querySelector(".fiches");
//sectionFiches.appendChild(imageElement);
//sectionFiches.appendChild(nomElement);
//sectionFiches.appendChild(prixElement);
//sectionFiches.appendChild(categorieElement);

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