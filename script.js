function mostrarnome() {
    // pegar o input 
    // value retorna o valor que esta dentro do input
    let nome = document.getElementById("inputNome").value
    // alterar o valor da div pelo valor do input
    document.getElementById("resultado1").innerHTML = '<p>NOME: ' + nome + '</p>'
}