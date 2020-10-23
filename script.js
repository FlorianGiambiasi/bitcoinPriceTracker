const url = 'https://blockchain.info/ticker';

let requete = new XMLHttpRequest();
requete.open('GET','url');

requete.responseType = 'json';

requete.send();

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
            let response = requete.response;
            console.log(response);
        }
    }
}