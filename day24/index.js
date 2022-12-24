const player = document.getElementById("player");
const songs = document.getElementById("songs");
const allButtons = document.querySelectorAll('button');

function playSong(id) {
  let link = `https://www.youtube.com/embed/${id}?autoplay=1`;
  return player.setAttribute('src', link);
}

// Change Background and text colors (random) on each button click

allButtons.forEach((button) => {
    button.addEventListener('click', function(){
        if(button.classList !== 'animate'){
            button.classList.add('animate');
        }
        // Remove the animate class after 2 seconds
        setTimeout(() => {
            button.classList.remove('animate')
        }, 2000);
        const randomColors = colorsGenerator();
        // the indexes make sure the background color and text color are never the same
        button.style.backgroundColor = randomColors[0];
        button.style.color = randomColors[1];
    })
})

// Generate Random Colors
function colorsGenerator(){
    // to make a color in CSS, requires a #
    let background = "#"+randomColor();
    // creating red, green, and blue values
    let r, g, b;
    // magic that makes the array of red, green, and blue for the overall color
    [r, g, b] = background.replace(/^@/, '').match(/.{2}/g).map(p=> parseInt(p, 16)/255);
    // sets the front color for r, g, b
    let front = (r * 0.2126 + g * 0.7152 + b * 0.0722) >= 0.5 ? '#000000' : '#ffffff';
    // return the array of the background and front colors
    return [background, front]
}

// seems like the color requires a string of 16, hence ".toString(16)"
function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}