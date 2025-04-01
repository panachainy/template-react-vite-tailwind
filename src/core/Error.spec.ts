import { expect, it } from 'vitest'
import ErrorPage from './Error'

it('toUpperCase', () => {
  const result = ErrorPage('foobar')
  expect(result).toMatchSnapshot()
})
