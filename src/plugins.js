window.scrollIntoView = function (event, selector) {
  event.preventDefault()
  let element = document.querySelector(selector)

  if(element !== null) {
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
