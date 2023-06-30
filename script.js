/* My own reproduction of the code without following the tutorial */

/* const slideshowDiv = () => {
    for (let i = 1; i <= 5; i++) {

        const div = document.createElement('div');

        div.style.backgroundImage = `url('images/slideshow/section-1-bg-${i}.jpg')`;

        i === 1 && div.classList.add('change');

        document.querySelector('.slideshow').appendChild(div);

    }
}

slideshowDiv();

const slideshowDivs = document.querySelectorAll('.slideshow div');

let a = 1;

const slideshow = () => {
    setInterval(() => {
        a++;

        const div = document.querySelector('.slideshow .change');

        div.classList.remove('change');

        if (a <= slideshowDivs.length) {
            div.nextElementSibling.classList.add('change');
        } else {
            slideshowDivs[0].classList.add('change');
            a = 1;
        }

    }, 20000)
}

slideshow(); */

/* End My own reproduction of the code without following the tutorial */

/* Cube Controls*/

const cube = document.querySelector('.cube');

let y = 0;

const playPause = () => {
    setInterval(() => {
        cube.style.transform = `rotateY(${y++}deg)`
    }, 100);
}

playPause();


/* End of Cube Controls */

/* Slideshow */

const slideshowDivs = () => {
    for (let i = 1; i <= 5; i++) {

        const div = document.createElement('div');

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

        /*   if (i === 1) {
              div.classList.add('change');
          } */

        i === 1 && div.classList.add('change');

        document.querySelector('.slideshow').appendChild(div);
    }
}

slideshowDivs();

const divs = document.querySelectorAll('.slideshow div');

let a = 1;

const slideshow = () => {
    setInterval(() => {
        a++;

        const div = document.querySelector('.slideshow .change');

        div.classList.remove('change');

        if (a <= divs.length) {
            div.nextElementSibling.classList.add('change')
        } else {
            divs[0].classList.add('change')
            a = 1;
        }
    }, 20000)
}

slideshow();

/* End of Slideshow */

