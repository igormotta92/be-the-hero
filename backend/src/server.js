const app = require('./app');

app.listen(3333);

/* 
  Hospedagem
    back-end: {
      Heroku: {
        url: https://www.heroku.com/
        deploying (implantação): https://www.youtube.com/watch?v=-j7vLmBMsEU
        description: Pequenas aplicações, plano gratuido, muito bom porém bastante caro
      },
      DigitalOcean: {
        utl: https://www.digitalocean.com/
        deploying (implantação): https://www.youtube.com/watch?v=ICIz5dE3Xfg (configuração https, dominio ...)
        description: Planos baratos e suporta aplicações moderadas
      }
    },
    font-end: {
      NetLify: {
        url: https://www.netlify.com/
        description: Específico para front-end (não da prar por node.js por exmplo)
          integra muito facil com Vue, React, Angulas ...
      }
    }
    mobile: {
      Expo: {
        url: https://expo.io/ (emulador mobile, Android e IOS)
        deploying (implantação): https://www.youtube.com/watch?v=wYMvzbfBdYI
        description: Gera o apk da aplicação com React-Native & Expo.
      }
    }

    


*/