
// let h1 = React.createElement("h1",{id:'H1'},"Hello form kritan")
// let h2 = React.createElement("h2",{id:'kirtan'},"hello from h2")

// let div = React.createElement("div",{id:"parent"},[h1,h2])
// let container = document.querySelector('#container')

// let root = ReactDOM.createRoot(container)
// root.render(div)

import parent from "./parent.js"

let root = ReactDOM.createRoot(document.querySelector('#container'))

root.render(parent())