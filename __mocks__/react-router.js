/* eslint-env jest */
const router = jest.genMockFromModule('react-router')

function __setReplaceSpy (spy) {
  this.browserHistory.replace = spy
}
__setReplaceSpy = __setReplaceSpy.bind(router)
// default
__setReplaceSpy(jest.fn())

router.__setReplaceSpy = __setReplaceSpy
module.exports = router
