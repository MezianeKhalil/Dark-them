document.getElementById('toggle').addEventListener('click',()=>{
    localStorage.setItem("darkMode", true)
    dark()
})
if(localStorage.getItem('darkMode')){
    dark()
}
function dark(){
    document.body.classList.toggle('bg-black')
    document.querySelectorAll('p').forEach(p=>{
        p.classList.remove('text-gray-900')
        p.classList.toggle('text-gray-200')
    })
    document.querySelectorAll('h1').forEach(h=>{
        h.classList.remove('text-gray-900')
        h.classList.toggle('text-gray-200')
    })
}