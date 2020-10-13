

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallabs.org");
    //window.location.href("https://globallabs.org");
}

function trocar(elemento){
    elemento.innerHTML = "obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*função soma
function soma(n1, n2){
    return n1 + n2;
}
*/

/*função lógica
var validar = 0;

function validaIdade(){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
*/

/*chamando função e imprimindo
var idade = prompt("Digite a idade: ");
validaIdade(validar);
console.log(validar);
*/

//var d = new Date(); - declaração da variável receber função data
//alert(d.getDay); - imprimir data completa
//alert(d.getHours); - imprimir horas
//alert(d.getMonth); - imprimir mês

/*
var count;
for(count=0; count<=5; count++){
    alert(count);
};
*\

/*estrutura de repetição
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*\

/*
var idade = prompt("Qual a sua idade: ");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idasde");
};
estrutura de repetição*/

/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome:"uva", cor:"roxo"}] - lista de dicionário
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "maça", cor:"vermelha"} - dicionário
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça","pêra","laranja"];-array
//lista.push("uva");-inserir item na lista
//lista.pop();-tirar último item da lista

//console.log(lista.length());-imprime quantida de elementos de uma lista
//console.log(lista);
//console.log(lista.reverse());- imprima a lista em ordem inversa
//console.log(lista.ToString());-transforma em string
//console.log(lista.join());-transforma em string e substitui a vírgula


//var nome= "Rodrigo Fructuoso";-variável string
//var n1= 36;-variável inteiro
//var n2= 10;-variável inteiro
//var frase = ("Japão é o melhor time do mundo");
//alert(nome + " tem " + idade+ " anos ");-concatenar variável com string
//alert(idade+idade2);-imprime na tela
//console.log(nome);- executa na pag usuário, abre o console no navegador(botão direito/inspecionar)
//console.log(n1 + n2);-operações matemáticas, entendi como variável numérica
//console.log(frase.replace("Japão","Brasil"));-troca o nome da variável(1atual,2novo)
//console.log(frase.toUpperCase());-tudo maiúsculo
//console.log(frase.toLowerCase());-tudo minúsculo
//alert(frase.replace("Japão","Brasil"));

/*var d= new Date();
alert(d);
*/

/*transformando string para inteiro
var a= prompt("Qual a quantidade de pimentoes amarelos: ");
var b= prompt("Qual a quantidade de pimentões verdes: ");
var x = parseInt(a)+parseInt(b);
alert(x);
*/