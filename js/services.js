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

function GetPokemonById(idPokemon) {
    $.ajax({
        type: "GET",
        url: urlPokeApi + getPokemonMethod + idPokemon + "/",
        dataType: 'json',
        success: function(data) {
            if (data != undefined || data != null) {
                return data;
            }
        },
        error: function() {
            return null;
        }
    });
}