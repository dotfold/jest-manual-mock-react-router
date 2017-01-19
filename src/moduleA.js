
const namedExportModuleA = function () {
  console.log('namedExportModuleA')
  return true
}

export { namedExportModuleA }
export default function moduleA () {
  console.log('moduleA')
  return true
}
