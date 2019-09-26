document.addEventListener('click', function (e) {
  if (e.target.classList.contains('edit-me')) {
    const userInput = prompt('Enter your desired new text')
    axios.post('/update-item', { text: userInput, id: e.target.getAttribute('data-id') }).then(function () {
      // do something here
    }).catch(function () {
      console.log('Please try again later.')
    })
  }
})
