const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

linkForm.addEventListener('submit', formSubmit)

function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
}

function formSubmit(e){
    e.preventDefault();
    if (input.value === ''){
        errMsg.innerHTML = 'Enter Something';
        input.classList.add("border-red");
    } else if(!validURL(input.value)){
        errMsg.innerHTML = 'Enter a valid URL';
        input.classList.add("border-red");
    } else{
        errMsg.innerHTML = '';
        input.classList.remove("border-red");
    }
}