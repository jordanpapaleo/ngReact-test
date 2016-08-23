import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Input from './Input'
import { addField } from './actionFields'

class FormBuilder extends Component {
  testAngular () {
    console.log('React button clicked')

    const { cb, fields } = this.props
    cb(fields)
 }

 testRedux () {
   this.props.newField('some field')
 }

  render () {
    const { config, fields } = this.props

    const styles = {
      border: '2px gray dotted',
      padding: '20px 30px'
    }

    return (
      <div style={styles}>
        <h1>React App: Hey {config.fname}</h1>
        <button onClick={this.testAngular.bind(this)}>Test angular</button><br />
        <button onClick={this.testRedux.bind(this)}>Test redux</button>
        <h2>Fields</h2>

        <ul>
          {fields.map((field, i) => {
            return (<li key={i}>{field}</li>)
          })}
        </ul>

        <Input />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fields: state.fields
  }
}

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators({ addField }, dispatch)
  return {
    newField: bindActionCreators(addField, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilder)
