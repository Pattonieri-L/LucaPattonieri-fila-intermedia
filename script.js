  let votoAttuale = 0;
        const displayVoto = document.getElementById('voto');

        function aggiornaVoto(cambio) {
            let nuovoVoto = votoAttuale + cambio;

            
            if (nuovoVoto > 10 || nuovoVoto < 0) {
                alert("TOP!");
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
             
           
            if (voto === 10) {
                container.innerHTML += 'TOP!';
            }
        

        }
        
