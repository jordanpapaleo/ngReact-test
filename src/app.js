import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import multi from 'redux-multi'
import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk'

import reducers from './reducers'
import FormBuilder from './FormBuilder'

(function () {
  const middleware = [thunk, multi, ReduxPromise]
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
  const store = createStoreWithMiddleware(reducers)

  class App extends Component {
    constructor (props) {
      super(props)
      console.info('APP Constructor', props);
    }

    render () {
      return (
        <Provider store={store}>
          <FormBuilder cb={this.props.cb} config={this.props.config} />
        </Provider>
      )
    }
  }

  App.propTypes = {
    config: PropTypes.object,
    cb: PropTypes.func.isRequired
  }

  // window.whatevs needs to go on the app level class only
  window.FormBuilder = App
})()
