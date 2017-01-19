import React from 'react'
import { browserHistory } from 'react-router'
import { namedExportModuleA } from './moduleA'

console.log('ComponentA imported namedExportModuleA:', namedExportModuleA)
console.log('ComponentA imported { browserHistory }:', browserHistory.replace)

export default class ComponentA extends React.Component {
  render () {
    return (<div>Hello from ComponentA</div>)
  }
}
