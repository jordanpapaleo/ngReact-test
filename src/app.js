/*
Form Builder
*/

import Input from './Input'

class FormBuilder extends React.Component {
  constructor (props) {
    super(props)
    console.log(props);
  }

  onclick () {
   console.log('Clicked')
   this.props.cb(true)
 }

  render () {
    return (
      <div>
        <h1>Test</h1>
        <button onClick={this.onclick.bind(this)}>Click Me</button>
        <Input />
      </div>
    )
  }
}

window.FormBuilder = FormBuilder
