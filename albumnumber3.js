const importPicsContainer = document.getElementById('importPicsContainerContainer');
let number = "3";  
let albumNumber = getSession(`allAlbumPicsNum${number}`);
      
function insertPic(divID, albumNumber) {
    const divElement = document.getElementById(divID);
    let HTML = '';
    albumNumber.forEach(importedPicture => {
        HTML +=`<div class="picContainer">
        <img alt="checkIcon" class="whitecheck hidden whitecheck-${importedPicture.ID}" src="imagens/whitecheck.png">
        <img alt="picture" class="${importedPicture.ID}" id="${importedPicture.ID}" src="imagens/${importedPicture.URL}"></div></div>`;
    });
    divElement.innerHTML = HTML;    
}
insertPic('importPicsContainerContainer', albumNumber);

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

const apagarAlbumBtn = document.getElementById('apagarAlbumBtn');
apagarAlbumBtn.addEventListener("click", function () {
  Swal.fire("Funcionalidade indisponível :(");
});

/*entrar e sair modo edicao */
const nomeAlbum = document.getElementById('nomeAlbum');
const descricaoAlbum = document.getElementById('descricaoAlbum');
const editName = document.getElementById('editName');
const editDescription = document.getElementById('editDescription');
const editarAlbumBtn = document.getElementById('editarAlbumBtn');
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
            descricaoAlbum.classList.toggle('hide');
            editName.classList.toggle('showBlock');
            editDescription.classList.toggle('showBlock');
            nomeAlbum.classList.toggle('hide'); 
            moverFtBtn.classList.toggle('hide');
            apagarFtsBtn.classList.toggle('hide');
            apagarAlbumBtn.classList.toggle('hide');
            selecaoManual(albumNumber);
        });
    });
}
editAlbum();

editName.addEventListener("click", function () {
  Swal.fire("Funcionalidade indisponível :(");
});

editDescription.addEventListener("click", function () {
  Swal.fire("Funcionalidade indisponível :(");
});

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

const partilharBtn = document.getElementById('partilharBtn');
partilharBtn.addEventListener("click", function () {
  Swal.fire("Funcionalidade indisponível :(");
});