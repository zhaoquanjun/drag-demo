const container = document.querySelector('.drag-wrapper')

let source = null
let aparentNode = null
let mparentNode = null
container.addEventListener('dragstart', e => {
  source = e.target.cloneNode(true)
  source.dataset.action = 'move'
  const action = e.target.dataset.action
  e.dataTransfer.dropEffect = action
  if (action == 'move') {
    mparentNode = e.target.parentNode
  }
})

container.addEventListener('dragenter', e => {
  e.preventDefault()
  const target = e.target
  if (source.dataset.action == 'move') {
    document.querySelectorAll('.hoverbg').forEach(td => td.classList.remove('hoverbg'))
    target.classList.add('hoverbg')
  }
})

container.addEventListener('dragover', e => {
  e.preventDefault()
})

container.addEventListener('drop', e => {
  const target = e.target
  if (mparentNode) {
    mparentNode.innerHTML = ''
  }
  if (target.dataset.action == 'copy') return
  target.innerHTML = ''
  target.appendChild(source)
  target.classList.remove('hoverbg')
})
