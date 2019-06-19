let rodada = [[], [], []];
let rodada_selecionada = 0;

function SortearNumero(e){
    let numero_sorteado = Math.floor(Math.random()*75) + 1;
    if (numero_sorteado <= 15) {
        return 'B' + numero_sorteado;
    } else if (numero_sorteado > 15 && numero_sorteado <= 30) {
        return 'I' + numero_sorteado;
    } else if (numero_sorteado > 30 && numero_sorteado <= 45) {
        return 'N' + numero_sorteado;
    } else if (numero_sorteado > 45 && numero_sorteado <= 60) {
        return 'G' + numero_sorteado;
    } else if (numero_sorteado > 60 && numero_sorteado <= 75) {
        return 'O' + numero_sorteado;
    }
};

function SelecionarRodada(e) {
    rodada_selecionada++;
}

$('#prox').on('click', function(e){
    SelecionarRodada();
    if ($('#rodada2').attr('hidden')){
        $('#area1 p').text(" ");
        $('#rodada2').removeAttr('hidden', '');
    } else{
        $('#area2 p').text(" ");
        $('#rodada3').removeAttr('hidden', '');
    };
});

$('#sorteio').on('click', function(e){
    let num_sort = SortearNumero();
    
    while (rodada[rodada_selecionada].indexOf(num_sort) != -1){
        num_sort = SortearNumero();
    };

    rodada[rodada_selecionada].push(num_sort);

    switch (rodada_selecionada) {
        case 0:
            $('#area1 p').text(num_sort);
            $('#numbers1').val($('#numbers1').val() + ', ' + num_sort);
            break;
        case 1:
            $('#area2 p').text(num_sort);
            $('#numbers2').val($('#numbers2').val() + ', ' + num_sort);
            break;
        case 2:
            $('#area3 p').text(num_sort);
            $('#numbers3').val($('#numbers3').val() + ', ' + num_sort);
            break;    
        default:
            break;
    };
});

$('#limpa').on('click', function (e){
    $('#area1 p').text(" ");
    $('#numbers1').val(" ");

    $('#area2 p').text(" ");
    $('#numbers2').val(" ");
    $('#rodada2').attr('hidden', '');

    $('#area3 p').text(" ");
    $('#numbers3').val(" ");
    $('#rodada3').attr('hidden', '');

    rodada_selecionada = 0;
    rodada = [[], [], []];
});