  let votoAttuale = 0;
        const displayVoto = document.getElementById('voto');

        function aggiornaVoto(cambio) {
            let nuovoVoto = votoAttuale + cambio;

            
            if (nuovoVoto > 10)  {
                alert("SEI ARRIVATO AL TOP!");
                return;}

            if(nuovoVoto < 0){
                alert("LIMITE RAGGIUNTO")
                return;
            }

            votoAttuale = nuovoVoto;
            displayVoto.innerText = votoAttuale;

                  if (votoAttuale >= 6) {
                displayVoto.className = 'verde';
            } else {
                displayVoto.className = 'rosso';

            }
          
            }
             
             const numeroVoto = document.getElementById('numero-voto');
        const container = document.getElementById('stelle');
        const bottoni = document.getElementById('bottoni');

        for (let i = 1; i <= 10; i++) {
            button.innerText = i;
            } 
            function aggiornaStelle(voto) {

              }
            
            if (voto === 10) {
                container.innerHTML += 'TOP!';
            }
        

        
        
