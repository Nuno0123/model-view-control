const btn = document.getElementById('submit')

const title = document.getElementById('title')
const body = document.getElementById('body')

function Submit(){
    fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            title: title.ariaValueMax,
            body: body.value
        }),
        headers: {'Content-Type': 'application/jsom'}
    })
}

btn.addEventListener('click', Submit)