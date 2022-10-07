//creer sa clef Youtube API : https://www.sebastiencoenon.fr/blog/nouveautes/52-creation-d-une-cle-api-youtube


// les variables

//variable de la clefs API valable pour les deux playlist 
let key = "AIzaSyBAF3cyz92XoIeSXQdwSA-bKLv_cRUG23M"; 



//PARTIE ACTU
//variable de l'ID de la playlis youtube pour les actus
let idPlaylistYoutubeActu = "PLWn_5mai5uuU9rd7kHFWhRLkeOsoHjSTa"
//variable du nombres de resultat que tu veux 
let resultatsYoutubeActu = 6

//PARTIE MAGASINE
//variable de l'ID de la playlis youtube pour le Magasine
let idPlaylistYoutubeMagasine = "PLWn_5mai5uuXO2MwEJVY6Ek-49wfr401A"
//variable du nombres de resultat que tu veux 
let resultatsYoutubeMagasine = 6


//Api partie actu

        //on cible la div dans laquelle on va faire apparaitre les elements que l'on va creer
        const sliderActu = document.querySelector("#sliderActu")
        //appel de l'API
        const getYoutubeVideosActu = async () => {
            const res = await fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=${resultatsYoutubeActu}&playlistId=${idPlaylistYoutubeActu}&key=${key}`
            );
            
            const data = await res.json();
            // on boucle le tableau que l'on a recuperer 
            data.items.map((item) => {
                
                // on va creer l'element iframe pour chaques elements recupérés
                const itemIframe = document.createElement("iframe");

                
                // on lui met l'attribu swiper-slide car c'est cette classe qui est comprise par la librairie pour le slider
                itemIframe.setAttribute("class", "col swiper-slide")
                itemIframe.style.padding = '30px'
                
                // on lui donne la source 
                itemIframe.src = `https://www.youtube.com/embed/${item.contentDetails.videoId};`

                // on choisit l'endoit ou il doit apparaitre .
               
                sliderActu.appendChild(itemIframe)
                
            });
        };

        getYoutubeVideosActu();
       
       //Api partie Magasine

        //on cible la div dans laquelle on va faire apparaitre les elements que l'on va creer
        const sliderMagasine = document.querySelector("#sliderMagasine")
        //appel de l'API
        const getYoutubeVideosmagasine = async () => {
            const res = await fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=${resultatsYoutubeMagasine}&playlistId=${idPlaylistYoutubeMagasine}&key=${key}`
            );
            
            const data = await res.json();
            // on boucle le tableau que l'on a recuperer 
            data.items.map((item) => {
                
                // on va creer l'element iframe pour chaques elements recupérés
                const itemIframe = document.createElement("iframe");

               
                // on lui met l'attribu swiper-slide car c'est cette classe qui est comprise par la librairie pour le slider
                itemIframe.setAttribute("class", "col swiper-slide")

                //injection du style par le js pourqu'il prenne en compte le padding
                itemIframe.style.padding = '30px'
                
                // on lui donne la source 
                itemIframe.src = `https://www.youtube.com/embed/${item.contentDetails.videoId};`

                // on choisit l'endoit ou il doit apparaitre .
               
                sliderMagasine.appendChild(itemIframe)
               
            });
           
        };

        getYoutubeVideosmagasine();
       
        // partie slider gerer par l'api, on peut modier des parametres a la demande 
       
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        breakpoints: {
            700: {
              slidesPerView: 3,
              spaceBetween: 0,
              slidesPerGroup: 3,
            },
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        loop: true,
        //parametre si dessous mettre en place quand on a 6 videos ou plus, ce qui enleverra la loop infini
    //    loopFillGroupWithBlank: true,
       
    });


        // partie fleche du "voir plus de videos", cette petite annimation au survol 

        //fleche Magasine
        let flecheMagasine = document.getElementById("flecheMagasine")
        let annimationFlecheMagasine = document.getElementById("annimationFlecheMagasine")

        annimationFlecheMagasine.addEventListener("mouseover", () => {
            flecheMagasine.classList.add("fleche")
        })
        annimationFlecheMagasine.addEventListener("mouseout", () => {
            flecheMagasine.classList.remove("fleche")
        })

        //fleche Actu
        let flecheActu = document.getElementById("flecheActu")
        let annimationFlecheActu = document.getElementById("annimationFlecheActu")

        annimationFlecheActu.addEventListener("mouseover", () => {
            flecheActu.classList.add("fleche")
        })
        annimationFlecheActu.addEventListener("mouseout", () => {
            flecheActu.classList.remove("fleche")
        })