document.getElementById('addItemBtn').addEventListener('click', function() {
    const info = prompt('Enter your information:');
    if (info === null || info.trim() === '') {
        alert('You must enter some information!');
    } else {
        addListItem(info);
    }
});

function addListItem(info) {
    const ul = document.getElementById('infoList');
    const li = document.createElement('li');
    li.textContent = info;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        ul.removeChild(li);
    });

    li.appendChild(deleteBtn);
    ul.appendChild(li);
}
