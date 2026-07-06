document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".post-body img");

    console.log("Nombre d'images trouvées :", images.length);

    images.forEach(function(img, index){

        if(index < 4){

            img.style.width = "100%";
            img.style.height = "auto";
            img.style.maxWidth = "100%";

            img.src = img.src.replace("/s320/","/s1200/");

        }

    });

});
