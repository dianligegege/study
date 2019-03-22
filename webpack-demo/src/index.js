import printMe from './print.js';
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mide!')
}

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var pre = document.createElement('pre');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    
    element.appendChild(btn);

    pre.innerHTML = [
        'Hello Webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe moudle!');
        // printMe();
        document.body.removeChild(element);
        element = component;
        document.body.appendChild(element);
    })
}