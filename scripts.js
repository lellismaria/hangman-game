var palavrasDoJogo = [
    ["B", "A", "T", "A", "T", "A"],
      ["X", "U", "X", "A"],
      ["D","V","D"],
      ["C","R","E","S","P","O"],
    ["D","U","P","L","E","X"],
    ["S","I","N","O"],
    ["R","E","F","E","I","Ç","A","O"],
    ["C","A","F","U","N","E"],
    ["S","A","U","D","A","D","E"],
    ["A","V","I","A","O"],
    ["C","E","L","U","L","A","R"],
    ["G","I","R","A","F","A"],
    ["M","A","C","A","C","O"],
    ["M","E","I","A",],
    ["L","I","M","O","N","A","D","A"],
      
    ]

    //Escolhe uma palavra aleatoria do vetor de palavras
    var random = Math.floor((Math.random()*(palavrasDoJogo.length))); 
    
    var palavraEscolhida = palavrasDoJogo[random];
    var palavraExibida = new Array(palavraEscolhida.length);
    var erros = 0;
    
    // cada letra na palavra é simbolizada por um underline na palavra exibida
    for (var i = 0; i < palavraExibida.length; i++){
        palavraExibida[i] = "_ ";
    }
    
    // atualiza a palavra exibida
    function printPalavraExibida(){
        for (var i = 0; i < palavraExibida.length; i++){
            var palavraLabel = document.getElementById("palavraLabel");
            var letraAtual = document.createTextNode(palavraExibida[i]);
            palavraLabel.appendChild(letraAtual);
        }
    }
    
    //verifica se a letra que o jogador escolheu está na palavra!
    var tentarLetra = function(){
        var f = document.formularioForca; 
        var b = f.elements["inputLetra"]; 
        var palpite = b.value; // A letra escolhida pelo jogador
        palpite = palpite.toUpperCase();
        for (var i = 0; i < palavraEscolhida.length; i++){
            if(palavraEscolhida[i] === palpite){
                palavraExibida[i] = palpite + " ";
                var encontrouLetra = true;
            }
            b.value = "";
        }
        
        //atualiza a palavra a ser exibida!
        var palavraLabel = document.getElementById("palavraLabel");
        palavraLabel.innerHTML=""; 
        printPalavraExibida();
        
        // se a letra que o jogador tentou nao estiver na palavra, ela sera incluida na lista de letras erradas
        if(!encontrouLetra){
            var letrasErradas = document.getElementById("letrasErradas");
            var letraErrada = document.createTextNode(" " + palpite);
            letrasErradas.appendChild(letraErrada); 
            erros++;
        }
        
        //Verifica se todas as letras foram encontradas
        var ganhou = true;
        for (var i = 0; i < palavraExibida.length; i++){
            if(palavraExibida[i] === "_ "){
                ganhou = false;
            }
        }
        if(ganhou){
            window.alert("Você venceu!");
        }
        
        //Se a quantidade de erros chegar a 6, vc morre
        if(erros === 6){
            window.alert("Parece que você morreu!");
        }
    }
    
    function init(){
        printPalavraExibida();
    }
    
    window.onload = init;