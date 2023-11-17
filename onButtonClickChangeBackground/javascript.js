const button = document.getElementById('onButtonClick');

let index = 0;
function onButtonClick() {
   let colors = ['red', 'blue', 'purple', 'green', 'yellow', 'gray'];
   document.getElementsByTagName('body')[0].style.background = colors[index++];

   if(index > colors.length - 1) {
        index = 0;
   }
}


button.addEventListener('click', onButtonClick);