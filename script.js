let body = document.getElementById('body')
VANTA.BIRDS({
    el: "#body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 300.00,
    minWidth: 1920.00,
    scale: 1.00,
    scaleMobile: 1.00
})

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

// 0

let audio = document.getElementById('my-audio-id');
let myAudio = new Audio('./MiyaGi & Эндшпиль - Солнечные блики, рассветы и туманы.mp3')
let img = document.querySelector('.img')
let img_pause = document.querySelector('.img_pause')
let Play = document.querySelector('.Play')
let Pause = document.querySelector('.Pause')
let active = document.querySelector('.active')
let pause_img = document.querySelector('.pause_img')


Play.onclick = () => {
    active.style.display = "block"
    img.style.display = "none"
    Play.style.background = "#E04F5F"
    Pause.style.background = "#3077EC"
    pause_img.style.display = "block"
    img_pause.style.display = "none"
    myAudio.play()
}

Pause.onclick = () => {
    img.style.display = "block"
    active.style.display = "none"
    Play.style.background = "#3077EC"
    Pause.style.background = "#E04F5F"
    img_pause.style.display = "block"
    pause_img.style.display = "none"
    myAudio.pause()
}

console.log(myAudio.currentTime);

// 1

let audio_1 = document.getElementById('my-audio-id_1');
let myAudio_1 = new Audio('./Miyagi - Колибри.mp3')
let img_1 = document.querySelector('.img_1')
let img_pause_1 = document.querySelector('.img_pause_1')
let Play_1 = document.querySelector('.Play_1')
let Pause_1 = document.querySelector('.Pause_1')
let active_1 = document.querySelector('.active_1')
let pause_img_1 = document.querySelector('.pause_img_1')


Play_1.onclick = () => {
    active_1.style.display = "block"
    img_1.style.display = "none"
    Play_1.style.background = "#E04F5F"
    Pause_1.style.background = "#3077EC"
    pause_img_1.style.display = "block"
    img_pause_1.style.display = "none"
    myAudio_1.play()
}

Pause_1.onclick = () => {
    img_1.style.display = "block"
    active_1.style.display = "none"
    Play_1.style.background = "#3077EC"
    Pause_1.style.background = "#E04F5F"
    img_pause_1.style.display = "block"
    pause_img_1.style.display = "none"
    myAudio_1.pause()
}

// 2

let audio_2 = document.getElementById('my-audio-id_2');
let myAudio_2 = new Audio('./Юрий Шатунов - Белые розы.mp3')
let img_2 = document.querySelector('.img_2')
let img_pause_2 = document.querySelector('.img_pause_2')
let Play_2 = document.querySelector('.Play_2')
let Pause_2 = document.querySelector('.Pause_2')
let active_2 = document.querySelector('.active_2')
let pause_img_2 = document.querySelector('.pause_img_2')


Play_2.onclick = () => {
    active_2.style.display = "block"
    img_2.style.display = "none"
    Play_2.style.background = "#E04F5F"
    Pause_2.style.background = "#3077EC"
    pause_img_2.style.display = "block"
    img_pause_2.style.display = "none"
    myAudio_2.play()
}

Pause_2.onclick = () => {
    img_2.style.display = "block"
    active_2.style.display = "none"
    Play_2.style.background = "#3077EC"
    Pause_2.style.background = "#E04F5F"
    img_pause_2.style.display = "block"
    pause_img_2.style.display = "none"
    myAudio_2.pause()
}

// 3

let audio_3 = document.getElementById('my-audio-id_3');
let myAudio_3 = new Audio('./Trevor_daniel_-_Falling.mp3')
let img_3 = document.querySelector('.img_3')
let img_pause_3 = document.querySelector('.img_pause_3')
let Play_3 = document.querySelector('.Play_3')
let Pause_3 = document.querySelector('.Pause_3')
let active_3 = document.querySelector('.active_3')
let pause_img_3 = document.querySelector('.pause_img_3')


Play_3.onclick = () => {
    active_3.style.display = "block"
    img_3.style.display = "none"
    Play_3.style.background = "#E04F5F"
    Pause_3.style.background = "#3077EC"
    pause_img_3.style.display = "block"
    img_pause_3.style.display = "none"
    myAudio_3.play()
}

Pause_3.onclick = () => {
    img_3.style.display = "block"
    active_3.style.display = "none"
    Play_3.style.background = "#3077EC"
    Pause_3.style.background = "#E04F5F"
    img_pause_3.style.display = "block"
    pause_img_3.style.display = "none"
    myAudio_3.pause()
}

let swiper_prev = document.querySelector('.swiper-button-prev')
let swiper_next = document.querySelector('.swiper-button-next')

swiper_prev.onclick = () => {
    myAudio.pause()
    myAudio_1.pause()
    myAudio_2.pause()
    myAudio_3.pause()
}

swiper_next.onclick = () => {
    myAudio.pause()
    myAudio_1.pause()
    myAudio_2.pause()
    myAudio_3.pause()
}

