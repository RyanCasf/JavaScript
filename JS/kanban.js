var p = document.getElementsByClassName('tarefa');
var choice = document.getElementsByClassName('choice');
var dragItem = null;

for (var i of p) {
    i.addEventListener('dragstart', dragStart);
    i.addEventListener('dragend', dragEnd);
}

function dragStart() {
    dragItem = this;
    setTimeout(() => this.style.display = "none", 0);
}

function dragEnd() {
    setTimeout(() => this.style.display = "none", 0);
    dragItem = this;
}