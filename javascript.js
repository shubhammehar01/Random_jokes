function function1() {
    var result = ""

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://dad-jokes.p.rapidapi.com/random/joke/png",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
            "x-rapidapi-key": "e2c54e2d97mshff11c22d7039acep1340d7jsn599acedb1a93"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response)


        result += '<div class="c1">' + response.body.setup + '</div>'
        result += '<div class="c2">' + response.body.punchline + '</div>'
            ;


        $("#result").html(result)

    });
}

function about() {
    alert("This website is created by Shubham mehra");
}
function shubham() {
    alert("The website owner Shubham mehra");
}