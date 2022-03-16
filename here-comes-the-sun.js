// 1. Get DOM reference
const bodyEl = document.getElementsByTagName('body')[0];

// 2. Set a number that will decrease, start at 255


// 3. Make a setInterval (assign to variable)
// 4. Set interval time to 100ms
// 5. On each interval code execution, check if number is greater than zero, if it is decrease by 1 and update rgb value on background-color style.


//    If it is less than zero, call clearInterval on the assigned variable.
let x = 0

const rgbColorBright = function () {
   x++
   if(x < 256) {
       bodyEl.style.backgroundColor = `rgb(${x}, ${x}, ${x})`
       requestAnimationFrame(rgbColorBright)
   }
   
}
rgbColorBright();
