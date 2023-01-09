let meteo = document.getElementById("villes");

meteo.addEventListener("change", consulterMeteo);

function consulterMeteo() {
    if (villes.value !== "") {
        let apiLien = "https://www.prevision-meteo.ch/services/json/" + villes.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        let mainElt = document.querySelector("main.wrapper");
        let divMeteoElt = document.querySelector("div.meteo");
        //Blocs à créer
        let divTitreElt = document.getElementById("divTitre");
        let divTempElt = document.getElementById("divTemp");
        let divLeverElt = document.getElementById("divLever");
        let divCoucherElt = document.getElementById("divCoucher");
        let divConditionElt = document.getElementById("divCondition");
        let divMiniElt = document.getElementById("divMini");
        let divMaxElt = document.getElementById("divMax");
        let divVentElt = document.getElementById("divVent");
        let sectionPrev1Elt = document.getElementById("sectionPrev1");
        let sectionPrev2Elt = document.getElementById("sectionPrev2");

        if (!document.body.contains(divTitreElt)) {
            //Créé le premier div et l'insère dans son parent div
            let divTitreElt = document.createElement("div");
            divTitreElt.classList.add("info-meteo", "damier-bleu1", "center-element");
            divTitreElt.setAttribute("id", "divTitre");
            divMeteoElt.appendChild(divTitreElt);
            //Créé le titre du premier div et l'insère dedans
            let titreElt = document.createElement("h2");
            titreElt.classList.add("titre");
            titreElt.setAttribute("id", "nom");
            divTitreElt.appendChild(titreElt);
        }

        if (!document.body.contains(divTempElt)) {
            //Créé le second div et l'insère dans son parent div
            let divTempElt = document.createElement("div");
            divTempElt.classList.add("info-meteo", "damier-bleu2", "center-element");
            divTempElt.setAttribute("id", "divTemp");
            divMeteoElt.appendChild(divTempElt);
            //Créé le paragraphe du second div et l'insère dedans
            let pTempElt = document.createElement("p");
            pTempElt.classList.add("info");
            pTempElt.setAttribute("id", "temperature");
            divTempElt.appendChild(pTempElt);
        }

        if (!document.body.contains(divLeverElt)) {
            //Créé le troisième div et l'insère dans son parent div
            let divLeverElt = document.createElement("div");
            divLeverElt.classList.add("info-meteo", "damier-bleu3", "center-element");
            divLeverElt.setAttribute("id", "divLever");
            divMeteoElt.appendChild(divLeverElt);
            //Créé le paragraphe du troisième div et l'insère dedans
            let pLeverElt = document.createElement("p");
            pLeverElt.classList.add("info");
            pLeverElt.setAttribute("id", "lever-soleil");
            divLeverElt.appendChild(pLeverElt);
        }

        if (!document.body.contains(divCoucherElt)) {
            //Créé le quatrième div et l'insère dans son parent div
            let divCoucherElt = document.createElement("div");
            divCoucherElt.classList.add("info-meteo", "damier-bleu4", "center-element");
            divCoucherElt.setAttribute("id", "divCoucher");
            divMeteoElt.appendChild(divCoucherElt);
            //Créé le paragraphe du quatrième div et l'insère dedans
            let pCoucherElt = document.createElement("p");
            pCoucherElt.classList.add("info");
            pCoucherElt.setAttribute("id", "coucher-soleil");
            divCoucherElt.appendChild(pCoucherElt);
        }

        if (!document.body.contains(divConditionElt)) {
            //Créé le cinquième div et l'insère dans son parent div
            let divConditionElt = document.createElement("div");
            divConditionElt.classList.add("info-meteo", "damier-bleu1", "colonne-center");
            divConditionElt.setAttribute("id", "divCondition");
            divMeteoElt.appendChild(divConditionElt);
            //Créé l'image du cinquième div et l'insère dedans
            let imgConditionElt = document.createElement("img");
            imgConditionElt.setAttribute("id", "icone");
            imgConditionElt.setAttribute("alt", "Icone météo");
            divConditionElt.appendChild(imgConditionElt);
            //Créé le paragraphe du cinquième div et l'insère dedans
            let pConditionElt = document.createElement("p");
            pConditionElt.classList.add("info");
            pConditionElt.setAttribute("id", "condition");
            divConditionElt.appendChild(pConditionElt);
        }

        if (!document.body.contains(divMiniElt)) {
            //Créé le sixième div et l'insère dans son parent div
            let divMiniElt = document.createElement("div");
            divMiniElt.classList.add("info-meteo", "damier-bleu2", "center-element");
            divMiniElt.setAttribute("id", "divMini");
            divMeteoElt.appendChild(divMiniElt);
            //Créé le paragraphe du sixième div et l'insère dedans
            let pMiniElt = document.createElement("p");
            pMiniElt.classList.add("info");
            pMiniElt.setAttribute("id", "temp-min");
            divMiniElt.appendChild(pMiniElt);
        }

        if (!document.body.contains(divMaxElt)) {
            //Créé le septième div et l'insère dans son parent div
            let divMaxElt = document.createElement("div");
            divMaxElt.classList.add("info-meteo", "damier-bleu3", "center-element");
            divMaxElt.setAttribute("id", "divMax");
            divMeteoElt.appendChild(divMaxElt);
            //Créé le paragraphe du septième div et l'insère dedans
            let pMaxElt = document.createElement("p");
            pMaxElt.classList.add("info");
            pMaxElt.setAttribute("id", "temp-max");
            divMaxElt.appendChild(pMaxElt);
        }

        if (!document.body.contains(divVentElt)) {
            //Créé le huitième div et l'insère dans son parent div
            let divVentElt = document.createElement("div");
            divVentElt.classList.add("info-meteo", "damier-bleu4", "center-element");
            divVentElt.setAttribute("id", "divVent");
            divMeteoElt.appendChild(divVentElt);
            //Créé le paragraphe du huitième div et l'insère dedans
            let pVentElt = document.createElement("p");
            pVentElt.classList.add("info");
            pVentElt.setAttribute("id", "vent");
            divVentElt.appendChild(pVentElt);
        }

        if (!document.body.contains(sectionPrev1Elt)) {
            //Créé la section du jour suivant et l'insère dans le main
            let sectionPrev1Elt = document.createElement("section");
            sectionPrev1Elt.classList.add("colonne-center");
            sectionPrev1Elt.setAttribute("id", "sectionPrev1");
            mainElt.appendChild(sectionPrev1Elt);
            //Créé le titre et l'insère dedans
            let titreSuivantElt = document.createElement("h3");
            titreSuivantElt.classList.add("previsions");
            titreSuivantElt.setAttribute("id", "previsions-suivant");
            sectionPrev1Elt.appendChild(titreSuivantElt);
            //Créé son premier div et l'insère dedans
            let divSuivantElt = document.createElement("div");
            divSuivantElt.classList.add("info-meteo", "damier-bleu1", "colonne-center");
            sectionPrev1Elt.appendChild(divSuivantElt);
            //Créé le paragraphe du premier div et l'insère dedans
            let pSuivantElt = document.createElement("p");
            pSuivantElt.classList.add("info");
            pSuivantElt.setAttribute("id", "condition-suivant");
            divSuivantElt.appendChild(pSuivantElt);
            //Créé l'image du premier div et l'insère dedans
            let imgSuivantElt = document.createElement("img");
            imgSuivantElt.classList.add("pdt-1");
            imgSuivantElt.setAttribute("id", "icone-suivant");
            imgSuivantElt.setAttribute("alt", "Icone météo jour suivant");
            divSuivantElt.appendChild(imgSuivantElt);
            //Créé son second div et l'insère dedans
            let divTempSuivantElt = document.createElement("div");
            divTempSuivantElt.classList.add("info-meteo", "damier-bleu2", "colonne-center");
            sectionPrev1Elt.appendChild(divTempSuivantElt);
            //Créé le premier paragraphe du premier div et l'insère dedans
            let pTempMinElt = document.createElement("p");
            pTempMinElt.classList.add("info");
            pTempMinElt.setAttribute("id", "tempmin-suivant");
            divTempSuivantElt.appendChild(pTempMinElt);
            //Créé le second paragraphe du premier div et l'insère dedans
            let pTempMaxElt = document.createElement("p");
            pTempMaxElt.classList.add("info");
            pTempMaxElt.setAttribute("id", "tempmax-suivant");
            divTempSuivantElt.appendChild(pTempMaxElt);
        }

        if (!document.body.contains(sectionPrev2Elt)) {
            //Créé la section du jour d'après et l'insère dans le main
            let sectionPrev2Elt = document.createElement("section");
            sectionPrev2Elt.classList.add("colonne-center");
            sectionPrev2Elt.setAttribute("id", "sectionPrev2");
            mainElt.appendChild(sectionPrev2Elt);
            //Créé le titre et l'insère dedans
            let titreApresElt = document.createElement("h3");
            titreApresElt.classList.add("previsions");
            titreApresElt.setAttribute("id", "previsions-apres");
            sectionPrev2Elt.appendChild(titreApresElt);
            //Créé son premier div et l'insère dedans
            let divApresElt = document.createElement("div");
            divApresElt.classList.add("info-meteo", "damier-bleu3", "colonne-center");
            sectionPrev2Elt.appendChild(divApresElt);
            //Créé le paragraphe du second div et l'insère dedans
            let pApresElt = document.createElement("p");
            pApresElt.classList.add("info");
            pApresElt.setAttribute("id", "condition-apres");
            divApresElt.appendChild(pApresElt);
            //Créé l'image du second div et l'insère dedans
            let imgApresElt = document.createElement("img");
            imgApresElt.classList.add("pdt-1");
            imgApresElt.setAttribute("id", "icone-apres");
            imgApresElt.setAttribute("alt", "Icone météo second jour");
            divApresElt.appendChild(imgApresElt);
            //Créé son second div et l'insère dedans
            let divTempApresElt = document.createElement("div");
            divTempApresElt.classList.add("info-meteo", "damier-bleu2", "colonne-center");
            sectionPrev2Elt.appendChild(divTempApresElt);
            //Créé le premier paragraphe du second div et l'insère dedans
            let pTempMinAprElt = document.createElement("p");
            pTempMinAprElt.classList.add("info");
            pTempMinAprElt.setAttribute("id", "tempmin-apres");
            divTempApresElt.appendChild(pTempMinAprElt);
            //Créé le second paragraphe du second div et l'insère dedans
            let pTempMaxAprElt = document.createElement("p");
            pTempMaxAprElt.classList.add("info", "pdt-1");
            pTempMaxAprElt.setAttribute("id", "tempmax-apres");
            divTempApresElt.appendChild(pTempMaxAprElt);
        }


        fetch(apiLien).then((reponse) => {
            if (reponse.ok) return reponse.json()
        })
            .then((donnees) => {
                document.getElementById('nom').textContent = "à " + donnees.city_info.name + " il fait...";
                document.getElementById('temperature').textContent = donnees.current_condition.tmp + " °C";
                document.getElementById('lever-soleil').textContent = "le soleil se lève à " + donnees.city_info.sunrise;
                document.getElementById('coucher-soleil').textContent = "le soleil se couche à " + donnees.city_info.sunset;
                document.getElementById('condition').textContent = donnees.current_condition.condition;
                document.getElementById('icone').src = donnees.current_condition.icon_big;
                document.getElementById('temp-min').textContent = "minimale " + donnees.fcst_day_0.tmin + " °C";
                document.getElementById('temp-max').textContent = "maximale " + donnees.fcst_day_0.tmax + " °C";
                document.getElementById('vent').textContent = "vitesse du vent : " + donnees.current_condition.wnd_spd + " km/h";
                document.getElementById('previsions-suivant').textContent = donnees.fcst_day_1.day_long;
                document.getElementById('condition-suivant').textContent = donnees.fcst_day_1.condition;
                document.getElementById('icone-suivant').src = donnees.current_condition.icon;
                document.getElementById('tempmin-suivant').textContent = "minimale " + donnees.fcst_day_1.tmin + " °C";
                document.getElementById('tempmax-suivant').textContent = "maximale " + donnees.fcst_day_1.tmax + " °C";
                document.getElementById('previsions-apres').textContent = donnees.fcst_day_2.day_long;
                document.getElementById('condition-apres').textContent = donnees.fcst_day_2.condition;
                document.getElementById('icone-apres').src = donnees.current_condition.icon;
                document.getElementById('tempmin-apres').textContent = "minimale " + donnees.fcst_day_2.tmin + " °C";
                document.getElementById('tempmax-apres').textContent = "maximale " + donnees.fcst_day_2.tmax + " °C";
            });
    }

}