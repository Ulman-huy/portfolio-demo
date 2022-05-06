const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const $$$ = document.documentElement.style
const tableColors = ['#ff4235', '#e45c0f', '#249583', '#0b51c1', '#ff56b8']
const style = getComputedStyle(document.body)

const navbar = $$('.navbar-item')
const contents = $$('.content-item')

navbar.forEach((li, index) => {
    const content = contents[index]

    li.onclick = () => {
        $('.navbar-item.active').classList.remove('active')
        $('.content-item.active').classList.remove('active')

        li.classList.add('active')
        content.classList.add('active')
    }
})

const theme = $('.theme-color')
const tableColor = $('.table-color')

theme.onclick = () => {
    if($('.table-color.hidden')) {
        tableColor.classList.remove('hidden')
    } else {
        tableColor.classList.add('hidden')
    }
}

const sun = $('.sun-icon')
const moon = $('.moon-icon')
const light = ['']
sun.onclick = () => {
    moon.classList.remove('hidden')
    sun.classList.add('hidden')

    $$$.setProperty('--background-content', '#cdcdd5')
    $$$.setProperty('--background-nav', '#fefaff')
    $$$.setProperty('--text-color', '#35324d')
    $$$.setProperty('--border-color', '#e7e7e7')
}

moon.onclick = () => {
    sun.classList.remove('hidden')
    moon.classList.add('hidden')

    $$$.setProperty('--background-content', '#161516')
    $$$.setProperty('--background-nav', '#232123')
    $$$.setProperty('--text-color', '#fefaff')
    $$$.setProperty('--border-color', '#696969')
}

const colors = $$('.color-item')

colors.forEach((color, index) => {
    color.onclick = () => {
        $$$.setProperty('--primary-color', tableColors[index])
    }
})

