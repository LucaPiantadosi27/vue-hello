// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus
// Aggiungere alla pagina un’immagine, con l'url preso anch’esso da un data.


// destrutturazione
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
        helloWord: "Hello Word!",
        itachi:
        "https://img1.etsystatic.com/060/0/8822612/il_fullxfull.712994687_god8.jpg",
    };
  },
}).mount("#app");