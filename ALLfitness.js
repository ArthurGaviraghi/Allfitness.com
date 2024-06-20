function iniciologin(){
    window.location.href="login.html"
}
function iniciocadastro(){
    window.location.href="cadastro.html"
}




function validalogin() {
    let nome = document.getElementById("nome").value 
    let senha = document.getElementById("senha").value 
    let senhas = localStorage.getItem("senha")
    let nomes =localStorage.getItem("nome")

    if( nome== nomes && senha==senhas){
        alert("seu nome é: " +nome+"\n sua senha é: " +senha+"\nInicializando login...")
        window.location.href='objetivo.html'
    }else{
        alert("Nome ou senha invalidos \nTente novamente!")
        window.location.href="login.html"
    }
}

  
function cadastro() {
    let nome, senha, email, idade
    nome = document.getElementById("nome").value 
    senha = document.getElementById("senha").value 
    email = document.getElementById("email").value 
    idade = document.getElementById("idade").value 
    localStorage.setItem("senha", senha)
    localStorage.setItem("nome", nome)
    localStorage.setItem("email", email)
    localStorage.setItem("idade", idade)
    
    
    if (nome != "" && senha != "" && email != "" && idade != "" ) {
         alert("seu nome é: " +nome)
         alert("sua senha é: " +senha) 
         alert("seu email é: " +email) 
         alert("seu idade é: " + idade)
         
         document.getElementById("resposta").innerHTML= "Cadastro realizado."+"\n Seja bem vindo "+nome+"!"
         document.getElementById("resposta1").innerHTML= "Agora clique no botão de login."
    } else {
        alert("ops, parece que esqueceu de informar alguns dados!")
    }
}

    function pagLogin(){
       window.location.href = "login.html"
    }
function Login(){
    let nome = document.getElementById("nome").value 
    let senha = document.getElementById("senha").value 
    let senhas = localStorage.getItem("senha")
    let nomes =localStorage.getItem("nome")

    if( nome== nomes && senha==senhas){
        alert("Iniciando login...")
        window.location.href='objetivo.html'
    }else{
        alert("Usuario ou senha não existente.")
        window.location.href="login.html"
    }
}

function alerta() { 
    let objetivo, disponibilidade

    objetivo = document.getElementById("objetivo").value
    disponibilidade = Number(document.getElementById("disponibilidade").value)
  
    switch (disponibilidade) {
            case 1:
                switch( objetivo  ){
                    case "emagrecimento":
                    document.getElementById("resposta").innerHTML= "Treinar  todos os musculos do corpo é o ideal, no entanto como o objetivo é emagrecimento seria necessario mais dias de treino na semana, minimo três dias, com cardio de minimo 30min."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "ganho-muscular":
                    document.getElementById("resposta").innerHTML= "Treinar todos os musculos do corpoé o ideal, no entanto como o objetivo é ganho de musculos seria necessario mais dias de treino na semana, minimo dois dias com intenside maxima e alto volume."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "condicionamento":
                    document.getElementById("resposta").innerHTML= "Treinar todos os musculos do corpo é o ideal, no entanto como o objetivo é condicionamento seria necessario mais dias de treino na semana, minimo dois dias com intenside maxima e alto volume."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "saude":
                    document.getElementById("resposta").innerHTML= "Treinar  todos os musculos do corpo é o ideal, no entanto como o objetivo é saude seria necessario mais dias de treino na semana, minimo três dias, com cardio de minimo 30 min."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                }
          
            break;
            case 2:
                switch( objetivo ){
                    case "emagrecimento":
                    document.getElementById("resposta").innerHTML= "Treinar todos os musculos do corpo é o ideal, no entanto como o objetivo é emagrecimento seria necessario mais dias de treino na semana, minimo três dias, com cardio de minimo 30min."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "ganho-muscular":
                    document.getElementById("resposta").innerHTML= "Treinar  todos os musculos do corpo é o ideal, com alta intensidade. No entanto como o objetivo é ganho de musculos seria necessario mais dias de treino na semana."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "condicionamento":
                    document.getElementById("resposta").innerHTML= "Treinar  todos os musculos do corpo é o ideal,  com intenside maxima e alto volume. No entanto como o objetivo é condicionamento seria necessario mais dias de treino na semana."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "saude":
                    document.getElementById("resposta").innerHTML= "Treinar todos os musculos do corpo é o ideal, no entanto como o objetivo é saude seria necessario mais dias de treino na semana, minimo três dias,  com cardio de minimo 30 min."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                }
            break;
            case 3:
                switch( objetivo ){
                    case "emagrecimento":
                    document.getElementById("resposta").innerHTML= "Separar o treino e dois dias superiores e um dia inferiores ou treinar todos os musculos nos três dias, com cardio de minimo 30min."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "ganho-muscular":
                    document.getElementById("resposta").innerHTML= "Separar o treino e dois dias superiores e um dia inferiores ou treinar todos os musculos nos três dias, com alta intensidade."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "condicionamento":
                    document.getElementById("resposta").innerHTML= "Separar o treino e dois dias superiores e um dia inferiores ou treinar todos os musculos nos três dias, com alta intensidade."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "saude":
                    document.getElementById("resposta").innerHTML= "Separar o treino e dois dias superiores e um dia inferiores ou treinar todos os musculos nos três dias, com alta intensidade,  com cardio de minimo 30 min."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                }
            break;
            case 4:
                switch( objetivo ){
                    case "emagrecimento":
                    document.getElementById("resposta").innerHTML= "Separar o treino em três dias superiores e um dia inferiores ou dois dias interiores e dois dias superiores, com cardio de minimo 30min."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "ganho-muscular":
                    document.getElementById("resposta").innerHTML= "Separar o treino em dois dias superiores e um dia inferiores ou dois dias interiores e dois dias superiores, com alta intensidade."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "condicionamento":
                    document.getElementById("resposta").innerHTML= "Separar o treino em dois dias superiores e um dia inferiores oudois dias interiores e dois dias superiores, com alta intensidade."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "saude":
                    document.getElementById("resposta").innerHTML= "Separar o treino em dois dias superiores e um dia inferiores ou dois dias interiores e dois dias superiores,  com cardio de minimo 30 min."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                }
            break;
            case 5:
                switch( objetivo ){
                    case "emagrecimento":
                    document.getElementById("resposta").innerHTML= "Separar o treino em quatro dias superiores e um dia inferiores ou dois dias interiores e três dias superiores, com cardio de minimo 30min."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "ganho-muscular":
                    document.getElementById("resposta").innerHTML= "Separar o treino em quatro dias superiores e um dia inferiores ou dois dias interiores e três dias superiores, com alta intensidade."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "condicionamento":
                    document.getElementById("resposta").innerHTML= "Separar o treino com alta intensidade e ajustar dieta."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "saude":
                    document.getElementById("resposta").innerHTML= "Separar o treino em quatro dias superiores e um dia inferiores ou dois dias interiores e três dias superiores,  com cardio de minimo 30 min."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                }
            break;
            case 6:
                switch( objetivo ){
                case "emagrecimento":
                    document.getElementById("resposta").innerHTML= "treino com foco em ganho de massa muscular, reduçao de gordura e aumento de definiçao. "
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "ganho-muscular":
                    document.getElementById("resposta").innerHTML= "treino regulado de forma que prioriza a hipertrofia e com descanso regulado"
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "condicionamento":
                    document.getElementById("resposta").innerHTML= "Separar o treino com alta intensidade e ajustar dieta."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "saude":
                    document.getElementById("resposta").innerHTML= "Separar o treino por grupamento muscular, com cardio de minimo 30 min."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                }
        
            break;
            case 7:
                switch( objetivo ){
                case "emagrecimento":
                    document.getElementById("resposta").innerHTML= "treino com foco em ganho de massa muscular, reduçao de gordura e aumento de definiçao. "
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "ganho-muscular":
                    document.getElementById("resposta").innerHTML= "treino regulado de forma que prioriza a hipertrofia e com descanso regulado"
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "condicionamento":
                    document.getElementById("resposta").innerHTML= "Separar o treino com alta intensidade e ajustar dieta."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                    case "saude":
                    document.getElementById("resposta").innerHTML= "Separar o treino por grupamento muscular, com cardio de minimo 30 min."
                    document.getElementById("resposta1").innerHTML= "Muito obrigado por escolher a ALLfitness"
                    break;
                }
           break
          
    }
    
}