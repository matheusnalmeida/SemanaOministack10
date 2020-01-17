//A importacao do react é necessaria sempre que formos usar html dentro de arquivos javascript(JSX(Javascript + HTML))
import React from 'react';
//O react-dom iremos utilizar para conseguirmos acessar os elementos da dom do html atraves do arquivo JavaScript
import ReactDOM from 'react-dom';

import App from './App';

//Colocando o conteudo App dentro da div com id root
ReactDOM.render(<App />, document.getElementById('root'));

