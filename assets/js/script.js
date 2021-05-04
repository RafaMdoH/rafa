
const puntero = () => {
  const pun = document.getElementById('puntero');
  setInterval(() => {
    if(pun.hidden){
      pun.hidden = false;
    } else{
      pun.hidden = true
    }
  },400);
} 

const template = (str,cls) => {
  return `<span ${cls}>${str}</span>`;
}


const text = document.getElementById('text');


let writing = str => {
  let arrFromStr = str.split('');
  let i = 0;
  let printStr = setInterval( function () {
    if( arrFromStr[i] === ' ' ) {
      text.innerHTML += template(arrFromStr[i], '');
      text.innerHTML += template(arrFromStr[i + 1], '');
      i += 2;
    } else {
      if(arrFromStr[i] === '│') {
        text.innerHTML += template(arrFromStr[i], "id='puntero'");
      }else {
        if( arrFromStr[i] === ','){
          text.innerHTML += template(arrFromStr[i] + '\n', '');
        }else {
          text.innerHTML += template(arrFromStr[i], '');
        }
      }
      i++;
    }
    if (i === arrFromStr.length) {
      clearInterval(printStr);
      // text.innerHTML += '<span id="puntero">|</span>';
      text.innerHTML += '<br>';
      text.className += 'h1'
      puntero();

    }
  }, 150);
};

puntero();
writing(' Hola, Soy Rafa, Desarrollador Web│');