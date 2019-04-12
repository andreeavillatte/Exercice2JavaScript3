// Recuperer/declarer la variable
var affichage=document.getElementsByTagName('a');
// Quand on va sur la premiere balise <a> ça va appeller la premiere fonction showText
    affichage[0].addEventListener('click',showText);
// Quand on va sur la deuxieme balise <a> ça va appeller la deuxieme fonction showText
    affichage[1].addEventListener('click',hideText);

function showText() {
    document.getElementById('text').style.display = 'block';
}
function hideText() {
    document.getElementById('text').style.display = 'none';
}