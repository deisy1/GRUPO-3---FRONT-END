var urlPokeApi = 'https://pokeapi.co/api/v2/';
var getPokemonMethod = "pokemon/"

function getallPokemons() {
    $.ajax({
        type: "GET",
        url: urlPokeApi + getPokemonMethod,
        dataType: 'json',
        success: function(data) {
            var obj = data;
            localStorage.setItem("totalpokemons", obj.count);
        }
    });
}

function GetPokemonById(idPokemon, returnfunction) {
    let obj = "";
    let uri = urlPokeApi + getPokemonMethod + idPokemon + "/";
    $.ajax({
        type: "GET",
        url: uri,
        async: true
    }).done(function(data) {
        if (returnfunction != "") {
            returnfunction(data);
        }
    });
}