$(document).ready(function() {
    $("#telefone").mask("(00) 00000-0000");
    $("#CPF").mask("000.000.000-00");
    $("#CEP").mask("00000-000");

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereçoCompleto: {
                required: true
            },
            CPF: {
                required: true
            }
        }
    });
});
