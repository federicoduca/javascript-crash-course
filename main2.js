const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target.className)
})