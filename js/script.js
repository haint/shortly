const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

linkForm.addEventListener('submit', formSubmit);

function validURL(src) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])?)\\.)+([a-z]{2,}|[a-z\\d-]{2,}))' + // domain name
      '|\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.d{1,3}' + // OR ipv4
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(src);
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === '') {
    errMsg.innerHTML = 'Please enter a link.';
    input.classList.add('border-red');
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = 'Please enter a valid link.';
    input.classList.add('border-red');
  } else {
    errMsg.innerHTML = '';
    input.classList.remove('border-red');
    alert('Success')
  }
}