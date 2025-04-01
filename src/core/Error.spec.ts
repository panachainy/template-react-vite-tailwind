import { expect, it } from 'vitest'
import ErrorPage from './Error'
import { describe } from 'node:test'

// describe('ErrorPage Component', () => {
it('should render correctly and match the snapshot', () => {
  const result = ErrorPage({})
  expect(result).toMatchSnapshot()
})
// })
