 function showCity() {
    let cities = document.getElementsByClassName("city");
    let ville = document.getElementById("ville-select");
    let codeVille = document.getElementById("ville-select").value;
    let longueur = cities.length;
    document.querySelectorAll(".city").forEach(a=>a.style.display="none");
    for (let i=0 ; i<longueur ; i++)
    {
        if(i==codeVille)
            cities[i].style.display="";
    }
}
