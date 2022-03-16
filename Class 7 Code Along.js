// const imgEL = document.getElementsByClassName('alf')[0]

// let x = 0

// const animate = function () {

//     x++

//     if (x < window.innerWidth) {
//         const transfrm = 'translateX(${x}px)'
//         imgEL.style.transform = transfrm
//         requestAnimationFrame(animate)
//     }
// }

// requestAnimationFrame(animate)
const movieDiv = document.getElementById('movie-div');

let movieTimesPromise = new Promise(function(resolve, reject){
setTimeout(function () {
    const movieTime = {
        name:  'Captain Marvel',
        time: '19:20',
        location:  'Meridian 16',
    }
}, 1500)
});

movieTimesPromise.then(function(movieTime) {
    movieDiv.innerHTML = `
    <h1>${movieTime.name}</h1>
    <p>
    ${movieTime.location}:
    <b>${movieTime.time}<b>
    </p>`
})