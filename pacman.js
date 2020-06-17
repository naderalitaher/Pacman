// Je cree mon tableau

let maGrille = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 0],
    [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

let pacman = {


    y: 2,
    x: 5,
    direction: 1
}





function afficheGrille() {

    document.getElementById('grille').innerHTML = " "


    //  parcours le tableau 2d (double boucle pour imbriquée)

    for (let i in maGrille) {

        for (let j in maGrille[i]) {

            //  ajoute un élément HTML de type div avec une classe dépendant de la valeur de la case sur le conteneur grid CSS
            // creer un element puis mettre classlist       
            let monElem = document.createElement('div')
            if (maGrille[i][j] == 0) {
                monElem.classList.add("mur")

            }

            else if (maGrille[i][j] == 1) {

                monElem.classList.add("sol")

            }


            else if (maGrille[i][j] == 2) {

                monElem.classList.add("bonbon")

            }
            monElem.style.gridColumn = parseInt(j) + 1;
            monElem.style.gridRow = parseInt(i) + 1;
            document.getElementById('grille').appendChild(monElem)
        }
    }

}
function affichePacman() {
    let monPacman = document.createElement('div');// creation de la div 
    monPacman.classList.add('pacman');//nom de la class div
    monPacman.style.gridRow = pacman.x; // écrire en css
    monPacman.style.gridColumn = pacman.y;
    document.getElementById('grille').appendChild(monPacman)// ajout du pacman
}


function refresh() {
    // là on mets le code a afficher toutes les secondes
    afficheGrille();
    affichePacman();
    setTimeout(refresh, 1000)
}
refresh()

/* Pacman phase 3
pacman ne doit plus passer à travers les mur
si position pacman = mur -> retour arrière
pacman doit manger les bonbons (sponsorisé par la Fédération des Dentistes) si pacman = bonbon -> bonbon = sol
si pacman mange un bonbon, on monte le score !
si pacman sort de la grille à gauche on le replace à droite (la terre est ronde !)
si pacman sort de la grille en haut, on le replace en bas (la terre est une bouée ronde ???  :face_with_monocle: )
quand l'utilisateur frappe (une touche sur) le clavier pacman change de direction (François, lache le clavier ! :bomb: )
*/

