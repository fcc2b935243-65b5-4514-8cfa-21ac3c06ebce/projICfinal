

const replaceOne = document.getElementById('replaceOne');
let todasFotos = getSession('todasFotos');
const editarAlbumBtn = document.getElementById('editarAlbumBtn');

if (todasFotos === null) {
    editarAlbumBtn.classList.add('disabled');
}

let firstArray = todasFotos.slice(0, 7);
let secondArray = todasFotos.slice(7, 14);
let thirdArray = todasFotos.slice(14, 21);
function createElement(divID, importedPicArray) {
    const divElement = document.getElementById(divID);
    let HTML = '';
    importedPicArray.forEach(importedPicture => {
        HTML +=`<div class="picContainer">
        <img alt="checkIcon" class="whitecheck hidden whitecheck-${importedPicture.ID}" src="imagens/whitecheck.png">
        <img alt="picture" class="${importedPicture.ID}" id="${importedPicture.ID}" src="imagens/${importedPicture.URL}"></div></div>`;
    });
    divElement.innerHTML = HTML; 
}
createElement('replaceOne', todasFotos);

/*info de cada foto*/
function giveInfo(importedPicture) {
    if (runInfo) {
    Swal.fire({
        title: "Informação",
        html: `<div id="infoFotos">
        <b>Autor:</b>
        <br>
        <b>Câmera:</b>
        <br>
        <b>Data:</b>
        <br>
        <b>Emoções:</b>
        <br>
        <b>Entidades:</b>
        <br>
        <b>Local:</b>
        <br>
        <b>Ocasião:</b>
        <br>
        <b>Resolução:</b> 
        <br>
        <b>Tipo de foto:</b>
        </div>
        <div id="infoFoto">
        ${importedPicture.autor} <br>
        ${importedPicture.camera} <br>
        ${importedPicture.data} <br>
        ${importedPicture.emocoes} <br>
        ${importedPicture.entidades} <br>
        ${importedPicture.local} <br>
        ${importedPicture.ocasiao} <br>
        ${importedPicture.resolucao} <br>
        ${importedPicture.tipofoto}
        </div>`,
        imageUrl: `imagens/${importedPicture.URL}`,
        imageWidth: 300,
        imageHeight: 300,
        showCloseButton: true,
        confirmButtonColor: "#424242",
    });} else {
    return;
    }
}

let runInfo = true;
document.addEventListener('DOMContentLoaded', function() {
ALLPICSARRAY.forEach(importedPicture => {
    let importedPictureElement = document.getElementById(importedPicture.ID);
    if (importedPictureElement) {
        importedPictureElement.onclick = function() {
            if (runInfo) {
            giveInfo(importedPicture);
        };
        }
    }
});
})

/*entrar e sair modo edicao */
const apagarFtsBtn = document.getElementById('apagarFtsBtn');
const moverFtBtn = document.getElementById('moverFtBtn');

function editAlbum() {
    document.addEventListener("DOMContentLoaded", function() {
        const trashIcons = document.querySelectorAll('.trashIcon');
        const parentDiv = document.querySelectorAll('.albumPicsTheContainer');
        parentDiv.forEach(div => {
            div.addEventListener("click", function(event) {
                if (event.target.classList.contains("trashIcon")) {
                    Swal.fire("Funcionalidade indisponível :(");
                }
            });
        });
        editarAlbumBtn.addEventListener("click", function () { 
            trashIcons.forEach(icon => {
                icon.classList.toggle('show');
            });
            runInfo = !runInfo; //não deixar ver info pois interefere com selec manual
            moverFtBtn.classList.toggle('hide');
            apagarFtsBtn.classList.toggle('hide');
            selecaoManual(todasFotos);
        });
    });
}
editAlbum();

function selecaoManual(importedPicArray) {
    let hasSelectedImgArray = []
    let hasSelectedImg = getSession('hasSelectedImg') || [];
    importedPicArray.forEach(importedPicture => {
        const img = document.getElementById(importedPicture.ID);
        img.addEventListener("click", function() {
            const selectIcon = document.querySelector(`.whitecheck-${importedPicture.ID}`);
            if (selectIcon.classList.contains('hidden')) { //select
                selectIcon.classList.remove('hidden'); 
                moverFtBtn.classList.remove('disabled');
                apagarFtsBtn.classList.remove('disabled');
                hasSelectedImgArray.push(true);
                saveSession('hasSelectedImg', hasSelectedImgArray);
            } else { //deselect
                selectIcon.classList.add('hidden'); 
                hasSelectedImgArray.pop();
                saveSession('hasSelectedImg', hasSelectedImgArray);
                if (hasSelectedImgArray.length === 0) {
                    moverFtBtn.classList.add('disabled');
                    apagarFtsBtn.classList.add('disabled');
                }
            }
        });
    });
}

moverFtBtn.addEventListener("click", function () {
  Swal.fire("Funcionalidade indisponível :(");
});

apagarFtsBtn.addEventListener("click", function () {
  Swal.fire("Funcionalidade indisponível :(");
});

const inputPesquisa = document.getElementById('input-pesquisa');
const botaoPesquisa = document.getElementById('botao-pesquisa');
inputPesquisa.addEventListener("click", function () {
  Swal.fire("Funcionalidade indisponível :(");
});
botaoPesquisa.addEventListener("click", function () {
  Swal.fire("Funcionalidade indisponível :(");
});
