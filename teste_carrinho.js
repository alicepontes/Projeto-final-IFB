var prod1=document.getElementById('45') //o id do botão "Adicionar" em cada produto poderia ser o proprio valor do produto. 
var prod2=document.getElementById('50')
var fechar=document.getElementById ('fechar_compra') //ID do botão na tela do carrinho no fechamento da compra. Fará a soma.

fechar.addEventListener('click', somar)

Funtion somar() {
    var compra1= Number(prod1.value) // converte o id do botão "Adicionar" do produto em número.
    var compra2=Number(prod2.value)
    var=total
    total= compra1+compra2

     document.getElementById('final').innerHTML=total //imprime na célula do total final o valor.


     
    
}