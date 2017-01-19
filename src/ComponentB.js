import React from 'react'
import { browserHistory } from 'react-router'
import { namedExportModuleA } from './moduleA'

console.log('ComponentB imported namedExportModuleA:', namedExportModuleA)
console.log('ComponentB imported { browserHistory }:', browserHistory.replace)

export default class ComponentB extends React.Component {
  render () {
    return (<div>Hello from ComponentB!</div>)
  }
}
