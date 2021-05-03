var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
window.addEventListener('load', function() {
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [{
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }]
    });
});

$(document).ready(function() {
    $('#closesession').hide();
    $('#welcome').hide();
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
    $('.text').on('click', function() {
        $('.menus').toggle();
    });

    getallPokemons();

    createBannerPokemons();

});

$(document).on('click', '.js-login', function() {
    $('#myModal').modal();

});

$(document).on('click', '.js-btnlogin', function() {
    debugger
    var nom = document.getElementsByName("uname")[0].value;
    var pass = document.getElementsByName("psw")[0].value;

    if ((nom != undefined || nom != "") && (pass != undefined || pass != "")) {
        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem(nom, pass);

        $('.js-login').hide();
        $('#myModal').modal('toggle');
        $('#user')[0].innerText = nom;
        $('#closesession').show();
        $('#welcome').show();

    } else {
        $.alert("User or Password Invalid")
    }

});

$(document).on('click', '#closesession', function() {
    var user = $('#user')[0].innerText;
    localStorage.removeItem(user);

    $('.js-login').show();
    $('#user')[0].innerText = "";
    $('#closesession').hide();
    $('#welcome').hide();
});

function createBannerPokemons() {
    if (localStorage.getItem("totalpokemons") != undefined || localStorage.getItem("totalpokemons")) {
        let getTotalPOkemons = parseInt(localStorage.getItem("totalpokemons"));
        for (let index = 0; index < 10; index++) {
            let pokemon = GetPokemonById(Math.floor(Math.random() * getTotalPOkemons));
            let html = "";
            if (pokemon != undefined || pokemon != null) {
                html += '<div class="carousel__elemento">';

                html += '</div>';

            }

        }


    }
}