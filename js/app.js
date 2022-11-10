const searchInput = document.querySelector('#ipsearch');

searchInput.addEventListener('input', (e) => {
  let value = e.target.value;

  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();
  } else {
  }
});

function search_ip() {
  let input = document.getElementById('ipsearch').value;
  input = input.toLowerCase();
  let result = document.getElementById('location');
  console.log('Results: ', input);
  result.innerHTML = input;
}
