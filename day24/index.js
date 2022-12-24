const player = document.getElementById("player");
const songs = document.getElementById("songs");

function playSong(id) {
  let link = `https://www.youtube.com/embed/${id}?autoplay=1`;
  return player.setAttribute('src', link);
}