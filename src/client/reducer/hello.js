
// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import { SAY_HELLO } from '../action/hello'

const initalState = Immutable.fromJS({
  message: 'Initial reducer message',
})

const helloReducer = (state: Immut = initalState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SAY_HELLO:
      return state.set('message', action.payload)
    default:
      return state
  }
}

export default helloReducer
