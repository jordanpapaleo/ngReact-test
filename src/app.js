/*
Form Builder
*/

import Input from './Input'

class FormBuilder extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Test</h1>
        <Input />
      </div>
    )
  }
}

window.FormBuilder = FormBuilder
