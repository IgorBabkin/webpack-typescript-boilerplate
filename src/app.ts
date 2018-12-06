import cats from "./cats";
import './app.scss';

console.log(cats);

const htmlElement = document.createElement('div');
htmlElement.className = 'app';
document.body.appendChild(htmlElement);

if (module.hot) {
    module.hot.accept();
}
