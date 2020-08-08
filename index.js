const inEl = document.querySelector("input")
let c = 0

// event handler for the input element.
function getData(e) {
  console.log("fetched", c++, e.target.value)
}

// debounce function
function debounce(fn, delay) {
  let timer

  return function (args) {
    console.log(args)
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn(args)
    }, delay)
  }
}

//event listener
inEl.addEventListener("input", debounce(getData, 300))
