

$(document).ready(function () {

    $.getJSON("../resources/json/labpage.json", labOutput);
    function labOutput(labData) {

        var output = "";

        $.each(labData.Labs, function () {
            output += '<u><p><a href="../Labs/' + this.name + '/index.html">' + this.name + '</a></p></u><br>';
        });

        $('#labFiller').html(output);

    }

});
