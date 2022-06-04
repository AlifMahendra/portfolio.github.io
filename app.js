const niga = document.querySelector('.select');
const about = document.getElementById('about');
const home = document.getElementById('home');
const info = document.getElementById('info');
const project = document.getElementById('project');
const cr = document.getElementById('cr');

const board = document.querySelector('.landasan')

function darkMode() {
    niga.classList.toggle('dark');
    about.classList.toggle('dark');
    home.classList.toggle('dark');
    info.classList.toggle('dark');
    project.classList.toggle('dark');
    cr.classList.toggle('dark');

    board.classList.toggle('board');
}