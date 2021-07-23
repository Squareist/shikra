const themeSwitcher = document.querySelector('#theme')
const htmlClasses = document.querySelector('html').classList
const menu_1 = document.querySelector('#menu-1')
const menu_2 = document.querySelector('#menu-2')
const menuButton = document.querySelector('#burger')
const nav = document.querySelector('#nav-main')



if(localStorage.theme === 'dark') {
    htmlClasses.add('dark')
} else {
    htmlClasses.remove('dark')
}

themeSwitcher.addEventListener('click', () => {
    if(localStorage.theme === 'dark') {
        htmlClasses.remove('dark')
        localStorage.removeItem('theme')
    } else {
        htmlClasses.add('dark')
        localStorage.theme = 'dark'
    }
})

menuButton.addEventListener('click', (e) => {
    menu_1.classList.toggle('show')
    menu_2.classList.toggle('show-bottom')
    nav.classList.toggle('absolute')
})
// menuButton.addEventListener('click', (e) => {
//     menu_1.classList.remove('show')
//     menu_2.classList.remove('show-bottom')
//     nav.classList.remove('absolute')

// })
// if(localStorage.theme === 'right-1') {
//     themeSwitcher.add('right-1')
//     themeSwitcher.remove('left-1')
// } else {
//     themeSwitcher.remove('right-1')
//     themeSwitcher.add('left-1')
// }

// themeSwitcher.addEventListener('click', () => {
//     if(themeSwitcher.classList.contains('right-1')) {
//         theme.classList.add('left-1');
//         theme.classList.remove('right-1');
//     }
//     else {
//         theme.classList.add('right-1');
//         theme.classList.remove('left-1');
//     }
// })
