class Sorteio{
    constructor(valor){
        this.valor = valor;
    }
    mostrar(){
        if (this.valor <= 15) {
            return 'B' + this.valor;
        } else if (this.valor > 15 && this.valor <= 30) {
            return 'I' + this.valor;
        } else if (this.valor > 30 && this.valor <= 45) {
            return 'N' + this.valor;
        } else if (this.valor > 45 && this.valor <= 60) {
            return 'G' + this.valor;
        } else if (this.valor > 60 && this.valor <= 75) {
            return 'O' + this.valor;
        }
    }
}
let rodadas = [[], [], []];
let rodada_selecionada = 0;

let Sortear = () =>{
    let numero_sorteado;
    if (rodadas[rodada_selecionada].length < 74) {
        numero_sorteado = (new Sorteio(Math.floor(Math.random()*75) + 1).mostrar());
        while (rodadas[rodada_selecionada].indexOf(numero_sorteado) != -1) {
            numero_sorteado = (new Sorteio(Math.floor(Math.random()*75) + 1).mostrar());
        };
        rodadas[rodada_selecionada].push(numero_sorteado);
        return numero_sorteado;
    } else{
        $('#sorteio').attr('disabled','');
        numero_sorteado = (new Sorteio(Math.floor(Math.random()*75) + 1).mostrar());
        while (rodadas[rodada_selecionada].indexOf(numero_sorteado) != -1) {
            numero_sorteado = (new Sorteio(Math.floor(Math.random()*75) + 1).mostrar());  
        };
        rodadas[rodada_selecionada].push(numero_sorteado);
        return numero_sorteado;
    };
};

let SelecionarRodada = () => rodada_selecionada++;

$('#sorteio').on('click', (e) => {
    switch (rodada_selecionada) {
        case 0:
            $('#area1 p').text(Sortear());
            $('#numbers1').val(rodadas[rodada_selecionada]);
            break;
        case 1:
            $('#area2 p').text(Sortear());
            $('#numbers2').val(rodadas[rodada_selecionada]);
            break;
        case 2:
            $('#area3 p').text(Sortear());
            $('#numbers3').val(rodadas[rodada_selecionada]);
            break;    
        default:
            break;
    };
});

$('#prox').on('click', (e) => {
    SelecionarRodada();
    $('#sorteio').removeAttr('disabled');
    if (rodada_selecionada == 1){
        $('#area1').attr('hidden', '');
        $('#area2').removeAttr('hidden');
        $('#area2 p').text('');
        $('#label2').removeAttr('hidden');
        $('#numbers2').removeAttr('hidden').val('');
    } else{
        $('#area2').attr('hidden', '');
        $('#area3').removeAttr('hidden');
        $('#area3 p').text("");
        $('#label3').removeAttr('hidden');
        $('#numbers3').removeAttr('hidden').val('');
        $('#prox').attr('disabled','');
    };
    if (rodada_selecionada > 0) {
        $('#ant').removeAttr('disabled', '');
    };
});
$('#sim_limpa').on('click', (e) =>{
    $('#sorteio').removeAttr('disabled');
    $('#area1 p').text(" ");
    $('#area1').removeAttr('hidden', '');
    $('#label1').removeAttr('hidden', '');
    $('#numbers1').val(" ");
    $('#area2 p').text(" ");
    $('#area2').attr('hidden', '');
    $('#label2').attr('hidden', '');
    $('#numbers2').attr('hidden', '');
    $('#numbers2').val(" ");
    $('#area3 p').text(" ");
    $('#area3').attr('hidden', '');
    $('#label3').attr('hidden', '');
    $('#numbers3').attr('hidden', '');
    $('#numbers3').val(" ");
    rodada_selecionada = 0;
    rodadas = [[], [], []];
    $('#prox').removeAttr('disabled','');
    $('#ant').attr('disabled', '');
});

$('#sim').on('click', ()=> {
    $('#area2 p').text('');
    $('#area3 p').text('');
    $('#area1 p').text('');
    rodada_selecionada--;
    if (rodada_selecionada == 0) {
        $('#area2').attr('hidden', '');
        $('#label2').attr('hidden', '');
        $('#numbers2').attr('hidden', '');
        $('#area1').removeAttr('hidden');
        rodadas[1] = [];
        $('#numbers2').val('');
    } else{
        $('#area3').attr('hidden', '');
        $('#label3').attr('hidden', '');
        $('#numbers3').attr('hidden', '');
        $('#area2').removeAttr('hidden');
        $('#label2').removeAttr('hidden');
        $('#prox').removeAttr('disabled');
        rodadas[2] = [];
        $('#numbers3').val('');
    }
});