let imgsEric = document.querySelectorAll('.imgs-eric');
let bg;

document.querySelector('body').style.background = '#635958';

window.onload = function () {
    // toggle on:
    
    document.querySelector('#show-description').onclick = function () {
        document.querySelector('.description').classList.toggle('hide');

        for (let i = 0; i < imgsEric.length; i++) {
            document.querySelectorAll('.imgs-eric')[i].classList.toggle('hide');
        }

        document.querySelector('#img-1').classList.toggle('img-hide');
        document.querySelector('#img-2').classList.toggle('img-hide');
    };
}

// main image selection
document.onclick = function selectImg() {
    for (let i = 0; i < imgsEric.length; i++) {
        imgsEric[i].onclick = () => {
            thisImgSelected(imgsEric[i]);
        }
    }
}

function thisImgSelected(selected) {
    document.querySelector('#main-eric').setAttribute('src', selected.getAttribute('src'));

    // background change
    bg = selected.getAttribute('data1');
    document.querySelector('body').style.background = bg;
}