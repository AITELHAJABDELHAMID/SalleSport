//function appelle menu mobile

// Fonction pour gérer l'affichage du menu mobile
function menumobile() {
   // Sélectionne le bouton du menu mobile
   const menuToggle = document.querySelector('.menu-toggle');
   const menu = document.querySelector('.menu-mobile');
   
   // Ajoute l'événement au bouton pour ouvrir/fermer le menu
   menuToggle.addEventListener('click', function() {
       menu.classList.toggle('open');
   });

   // Sélectionner tous les éléments "ACTIVITÉS" dans le menu mobile
   document.querySelectorAll('.activite-toggle').forEach(function(toggle) {
       toggle.addEventListener('click', function(event) {
           // Empêche le lien de naviguer
           event.preventDefault();

           // Trouver le sous-menu associé
           const activiteSubMenu = this.nextElementSibling; // Le div .activite

           // Basculer la classe 'open' sur le sous-menu pour l'afficher/masquer
           activiteSubMenu.classList.toggle('open');
       });
   });
}

// Appel à la fonction au chargement de la page
window.onload = function() {
   menumobile();
}


function val()
{  
   var  n=document.getElementById('NOM').value;
   var exp = new RegExp("^[a-zA-Z]*$");
    
   if(!exp.test(n))
   {
      var er=document.getElementById("er1").innerHTML="les lettre seulement";
      c=c+1;
      return false;
   }
   var  pr=document.getElementById('PRENOM').value;
   var exp= new RegExp("^[a-zA-Z]*$");
    
   if(!exp.test(pr))
   {
      var er=document.getElementById("er2").innerHTML="les lettre seulement";
      c=c+1;
      return false;
     
   }
   
   var c=0;
   var mp=document.getElementById('mp').value;
   var cmp=document.getElementById('cmp').value;
   if(mp!=cmp)
   {
var er=document.getElementById('er3').innerHTML="Verifier votre mot de passe";
c=c+1;
return false;

   }
   var age=document.getElementById('age').value;
   if(age<18)
   {
      var er=document.getElementById('er4').innerHTML="l'age doit etre superieur a 18ans";
      c=c+1;
      return false;
   }
   
if(c==0)
{
   alert('BIEN ENVOYER')
}
}
e=true;
function Affichage1()
{

if(e)
{
    document.getElementById('mp').setAttribute("type","text");
    document.getElementById('img1').src="visible.JPG";
   
    e=false;
}
else
{
    document.getElementById('mp').setAttribute("type","password");
 
    document.getElementById('img1').src="notvisible.JPG";
   
    e=true;
}

}
k=true;
function Affichage2()
{
   
    if(k)
    {
        document.getElementById('cmp').setAttribute("type","text");
        document.getElementById('img2').src="visible.JPG";
        k=false;

    }
    else
    {
        document.getElementById('cmp').setAttribute("type","password");
        document.getElementById('img2').src="notvisible.JPG";
        k=true;


    }
   
}