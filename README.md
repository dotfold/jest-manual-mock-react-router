
From a terminal, run `npm test`.

| mod | desc |
|-----|------|
| `moduleA`| has a default export and a named export |
| `moduleB` | has a default export and a named export |
| `ComponentA` | imports the named export from `moduleA`, also react-router/browserHistory |
| `ComponentB` | imports the named export from `moduleA`, also react-router/browserHistory |

`moduleA` has a manual mock that stubs the behaviour of the named export.
This should be used by `ComponentA` because it explicitly calls `jest.mock()` - which is
verified by the console log from `ComponentA.spec.js`.


So a manual mock of a module under src works as expected.


Both `ComponentA` and `ComponentB` also import `browserHistory` from the 'react-router' package. A manual mock
is set up to use a jest spy for the `replace` function. `ComponentA.spec.js` explicitly calls `jest.mock()` on
react-router, so it should be using the manual mock, which is verified by the console log. `ComponentB.spec.js` _does not_
call `jest.mock()` on react-router, so it is expected that `browserHistory.replace` will not be a mock function. However
the console shows that it is the manual mock.

So a manual mock of a node_modules package does not work as expected.

Hopefully my implementation of the manual mocks is just incorrect, in which case I would be happy to help improve
the docs for this area.
