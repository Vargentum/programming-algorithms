// https://jsfiddle.net/1vzw3dnt/1/

import reqwest from 'reqwest'

const API_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'

const state = {
  table: document.createElement('table')
}
function insertRow(row, i) {
  const tr = state.table.insertRow()
  Object.keys(row).forEach(insertCell(row, tr))
}
function insertCell(rowData, rowNode) {
  return function(prop) {
    const cell = rowNode.insertCell()
    cell.innerHTML = rowData[prop]
  }
}
function insertHeading() {
  const head = state.table.createTHead()
  const th = state.table.insertRow()
  return function(val) {
    const cell = th.insertCell()
    cell.innerHTML = val
  }
}
function createTable(data) {
  state.table.classList.add('table', 'table-bordered')
  Object.keys(data[0]).forEach(insertHeading())
  data.forEach(insertRow)
  return state.table
}

export default function init(node) {
  reqwest(API_URL).then(createTable)
  node.appendChild(state.table)
}

