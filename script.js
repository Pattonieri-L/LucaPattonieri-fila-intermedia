  let votoAttuale = 0;
        const Voto = document.getElementById('voto');

        function aggiornaVoto(cambio) {
            let nuovoVoto = votoAttuale + cambio;

            
            if (nuovoVoto > 10 || nuovoVoto < 0) {
                alert("Limite raggiunto");
                return;
            }

            votoAttuale = nuovoVoto;
            displayVoto.innerText = votoAttuale;

                  if (votoAttuale >= 6) {
                Voto.className = 'verde';
            } else {
                Voto.className = 'rosso';

            }
          
            }
        
