function trans()
 {
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
    
     // Traductions pour le menu
       const translations = {
        Francais: {
            ACCUEIL: "ACCUEIL",
            ACTIVITÉS: "ACTIVITÉS",
            FOOTBALL: "FOOTBALL",
            NATATION: "NATATION",
            FITNESS: "FITNESS",
            ABONNEMENTS: "ABONNEMENTS",
            CONTACT: "CONTACT",
            CONNECTER: "CONNECTER-VOUS",
            INSCRIT: "INSCRIT-VOUS",
            ccc:"VOTRE FORME PHYSIQUE EST ESSENTIELLE",
            C1:` Plusieurs activités sont indispensables pour améliorer votre forme : ,
               ✔️ FOOTBALL
        Permet d'Améliore le tonus musculaire et renforcer les os 
        permet d’améliorer le cardio vasculaire, 
        l'endurance et la respiration
        permet de développer la vitesse, la coordination et l’adresse
        apporte tonus musculaire et résistance osseuse
         permet d'éveiller la personnalité et de forger l’esprit d’équipe 
        ✔️  FITNESS 
Améliore la souplesse de la corps et réduit le risque de déchirures musculaires et de douleur du dos.
Booste le métabolisme, c’est-à-dire que votre corps continue de brûler de la graisse même au repos.
Renforce les muscles, les tendons et les ligaments, ce qui réduit les risques de blessure.
        ✔️  NATATION 
Complète, la natation est idéale pour la perte de poids. 
La résistance de l’eau permet de brûler plus de calories et l’effet drainant de l’eau permet de lisser la peau.
Les mouvements amples de la natation permettent de se muscler en allongeant le muscle plutôt que par une prise de masse
De meilleures capacités cardiovasculaires et respiratoires
Des bénéfices pour la santé mentale`,

           CLUBS:"CLUBS",RABAT:"RABAT",CASABLANCA:"CASABLANCA",TANGER:"TANGER",
RS:"RESEAU SOCIAUX",
msg:"Retrouvez tout l'actualité sur Salle AIT EL HAJ",
ad:"ADRESSE : CYM",
tele:"TÉL : 0666666666",
fax:"FAX : 0699999999",
mail:"Email : sallesport@AH.com",
cr:"© Copyright 2025 Tous les droits réservés | SalleSport",

        },
        Arabe: {
            ACCUEIL: "الرئيسية",
            ACTIVITÉS: "الأنشطة",
            FOOTBALL: "كرة القدم",
            NATATION: "السباحة",
            FITNESS: "اللياقة البدنية",
            ABONNEMENTS: "الاشتراكات",
            CONTACT: "اتصل بنا",
            CONNECTER: "تسجيل الدخول",
            INSCRIT: "إنشاء حساب",
            ccc:"لياقتك البدنية ضرورية",
            C1:`هناك العديد من الأنشطة الضرورية لتحسين لياقتك البدنية:,
            ✔️ كرة القدم
 يساعد على تحسين قوة العضلات وتقوية العظام
 يساعد على تحسين صحة القلب والأوعية الدموية،
 التحمل والتنفس
 يساعد على تطوير السرعة والتنسيق والمهارة
 يوفر قوة العضلات وقوة العظام
 يساعد على إيقاظ الشخصية وبناء روح الفريق
 ✔️ اللياقة البدنية
يحسن مرونة الجسم ويقلل من خطر تمزق العضلات وآلام الظهر.
يعزز عملية التمثيل الغذائي، مما يعني أن جسمك يستمر في حرق الدهون حتى في حالة الراحة.
يقوي العضلات والأوتار والأربطة، مما يقلل من خطر الإصابة.
 ✔️ السباحة
بشكل عام، السباحة مثالية لإنقاص الوزن.
تساعد مقاومة الماء على حرق المزيد من السعرات الحرارية، كما يساعد تأثير تصريف الماء على تنعيم البشرة.
تسمح لك الحركات الواسعة للسباحة ببناء العضلات عن طريق إطالة العضلات بدلاً من اكتساب الكتلة.
تحسين القدرات القلبية والتنفسية
فوائد الصحة العقلية`,
       CLUBS:"النوادي",
       RABAT:"الرباط",CASABLANCA:"الدار البيضاء",TANGER:"طنجة",
       RS:"الشبكات الاجتماعية",
       msg:"تعرف على آخر الأخبار عن قاعة آيت الحاج",
       ad:"العنوان :مجمع يعقوب المنصور",
       tele:"الهاتف :  0666666666",
       fax:"فاكس: 0699999999",
       mail:"البريد الالكتروني : sallesport@AH.com  ",
       cr:"© جميع الحقوق محفوظة 2025 | صالة الرياضة",

        }
    };

    // Fonction pour changer la langue et la direction
    function changeLanguage(language) {
        const menuItems = document.querySelectorAll('[data-key]');
        menuItems.forEach(item => {
            const key = item.getAttribute('data-key');
            if (translations[language] && translations[language][key]) {
                item.innerText = translations[language][key];
            }
        });

        // Modifier la direction du texte en fonction de la langue
        const menuToggleButton = document.querySelector('.menu-mobile .menu-toggle');
        const menu_ul=document.querySelector('.menu-mobile ul ')
        if (language === 'Arabe') {
            document.body.style.direction = 'rtl';
            document.body.style.textAlign = 'right';
// Vérifier si l'élément existe avant d'appliquer les styles
         if (menuToggleButton) {
    // Appliquer les styles via JavaScript
          menuToggleButton.style.right='380px';
          menu_ul.style.right='280px';
        }
      
   
 }
    else {
            document.body.style.direction = 'ltr';
            document.body.style.textAlign = 'left';
            // Vérifier si l'élément existe avant d'appliquer les styles
         if (menuToggleButton) {
            // Appliquer les styles via JavaScript
                  menuToggleButton.style.right='10px';
                  menu_ul.style.right='10px';
            }
   
        
   
        }
 }

    // Gestionnaire d'événement pour le sélecteur de langue
    document.getElementById("language-select").addEventListener("change", function () {
        const selectedLanguage = this.value;
        changeLanguage(selectedLanguage);
    });

    // Initialisation (langue par défaut)
    changeLanguage("Francais");
 
}
window.onload=function(){
    trans();
 }
