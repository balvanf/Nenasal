const thumbnail = document.getElementById("thumb-lg")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const counter = document.getElementById("counter")
let count = 1

// Odabir velike slike proizvoda

document.querySelectorAll(".thumb").forEach(item => {
  item.addEventListener('click', function(e) {
    let thumbSrc = e.currentTarget.getAttribute('src')
    thumbnail.setAttribute('src', thumbSrc)
  })
})

// Brojac proizvoda prije dodavanja u korpu

plus.addEventListener('click', function() {
  count++
  counter.innerText = count
})

minus.addEventListener('click', function() {
  if (count > 1) count--
  counter.innerText = count
})

// Mijenjanje tabova na sekciji 2 (Opis, specifikacije, ostalo)

document.querySelectorAll(".nav-tab").forEach(item => {
  item.addEventListener('click', function() {
    [...item.parentElement.children].forEach(sib => {
      sib.classList.remove('selected')
    })
    document.querySelectorAll(".info").forEach(el => {
      el.classList.add('display-n')
    })
    item.classList.add('selected')
    document.getElementById(`${item.innerText}`).classList.remove('display-n')
    })
})
