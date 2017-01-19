
const mod = jest.genMockFromModule('../moduleA')

// stub the implementation
mod.namedExportModuleA = function () {
  console.log('__mocks__ namedExportModuleA')
}
module.exports = mod
