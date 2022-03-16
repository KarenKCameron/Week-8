// 1. Get DOM reference
const bodyEl = document.getElementsByTagName('body')[0];

// 2. Set a number that will decrease, start at 255
let colorVal = 255;
const interval = 100;

// 3. Make a setInterval (assign to variable)
// 4. Set interval time to 100ms
// 5. On each interval code execution, check if number is greater than zero, if it is decrease by 1 and update rgb value on background-color style.


//    If it is less than zero, call clearInterval on the assigned variable.
const rgbColorDim = setInterval(() => {
   if(colorVal > 0) {
       bodyEl.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`
       colorVal --
   } else (
       clearInterval(rgbColorDim)
   )
}, interval);

