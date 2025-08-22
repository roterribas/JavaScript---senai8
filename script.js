function mostrarnome() {
    // pegar o input 
    // value retorna o valor que esta dentro do input
    let nome = document.getElementById("inputNome").value
    // alterar o valor da div pelo valor do input
    document.getElementById("resultado1").innerHTML = '<p>NOME: ' + nome + '</p>'
}

function mostrarIdade() {
    let idade = document.getElementById("inputIdade").value
    
    if (idade == "") {
        document.getElementById("resultado1").innerHTML = '<p style="color: red"> POR FAVOR INFORME A IDADE</p>'
    } else {

    document.getElementById("resultado1").innerHTML = '<p>IDADE: ' + idade + '</p>'
    }
}

function mostrarEmail() {
    // pegar o input 
    // value retorna o valor que esta dentro do input
    let email = document.getElementById("inputEmail").value
    // alterar o valor da div pelo valor do input
    document.getElementById("resultado1").innerHTML = '<p>Email: ' + email + '</p>'
}

function mostrarData() {
    // pegar o input 
    // value retorna o valor que esta dentro do input
    let data = document.getElementById("inputData").value
    // alterar o valor da div pelo valor do input
    document.getElementById("resultado1").innerHTML = '<p>Data de nascimento: ' + data + '</p>'
}

function mostrarCor() {
    let cor = document.getElementById("inputCor").value
    let resultado = document.getElementById("resultado1")
    resultado.innerHTML = `<p> COR SELEIONADA: ${cor} </p>`
    resultado.style.color = cor
}

function verificarCheckbox() {
    let checkbox = document.getElementById("inputCheckbox")

    if(checkbox.checked) {
    document.getElementById("resultado1").innerHTML = '<p>ACEITO OS TERMOS</p>'
    } else {

    document.getElementById("resultado1").innerHTML = '<p>TERMOS NÃO ACEITO</p>'
    }
}

function pegarGenero() {
    // retorna uma lista de tags que tem um name
    let opcoes = document.getElementsByName("genero")
    let selecionado = ""

    for(let i = 0; i < opcoes.length; i++){

        if(opcoes[i].checked){
           selecionado = opcoes[i].value
        }
    }

    document.getElementById("resultado1").innerHTML = '<p>GENERO: ' + selecionado + '</p>'
}