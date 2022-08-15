const removeName = document.getElementById('main');

removeName.remove();


const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.className = 'h1#victory'

document.body.append(newHeader);

const headerVariable = () => {
  document.getElementById('victory')
  return newHeader.textContent = 'Teejay is the champion'
};

headerVariable;
