function getElement(element){
      return document.getElementById(element)
}

const toogleSwitch = document.querySelector('input[type="checkbox"]')
const nav = getElement('nav')
const toggleIcon= getElement('toggle-icon')
const image1 = getElement('image1')
const image2 = getElement('image2')
const image3 = getElement('image3')
const textBox = getElement('text-box')


function mode(mode){
      image1.src = `img/undraw_proud_coder_${mode}.svg`
      image2.src = `img/undraw_feeling_proud_${mode}.svg`
      image3.src = `img/undraw_conceptual_idea_${mode}.svg`
}

function toggleMode(isDark){
      nav.style.backgroundColor = isDark ? 'rgb(0 0 0 /50%' : 'rgb(255 255 255 /50%';
      textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 /50%' : 'rgb(0 0 0 /50%';
      toggleIcon.children[0].textContent = isDark ?'Dark Mode' : 'Light Mode'
      isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
}

// dark mode styles
function darkMode(){
      toggleMode(true)
      mode('dark')
}

function lightMode(){
      toggleMode(false)
      mode('light')
}

// switch theme dynamcally
function switchTheme(event){
      if(event.target.checked){
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
            darkMode()
      }else{
            document.documentElement.setAttribute('data-theme', 'light')
            localStorage.setItem('theme', 'light')
            lightMode()
      }
}

// eventlistener
toogleSwitch.addEventListener('change', switchTheme)

// check localStorage for theme
const currentTheme = localStorage.getItem('theme')
if(currentTheme){
      document.documentElement.setAttribute('data-theme', currentTheme)
      if(currentTheme === 'dark'){
            toogleSwitch.checked = true
            darkMode()
      }
}