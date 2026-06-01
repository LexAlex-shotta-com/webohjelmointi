let lista = ["Tehtävä 1", "Tehtävä 2"];

function paivitaLista() {
    const ul = document.getElementById("tehtavalista");

    ul.innerHTML = "";

    for (let tehtava of lista) {
        const li = document.createElement("li");
        li.innerHTML = tehtava;
        ul.appendChild(li);
    }
}

function lisaa() {
    const input = document.getElementById("uusiTehtava");
    const arvo = input.value;

    lista.push(arvo);

    paivitaLista();

    input.value = "";
}
<nav>
<li><a href="tehtavalista.html">Tehtävälista</a></li>
</nav> 


paivitaLista();