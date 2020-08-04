const inEl = document.querySelector("input")
let c = 0

// event handler for the input element.
function getData() {
  console.log("fetched", c++)
}

// debounce function
function debounce(fn, delay) {
  let timer

  return function (...args) {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn(args)
    }, delay)
  }
}

//event listener
inEl.addEventListener("keyup", debounce(getData, 300))
