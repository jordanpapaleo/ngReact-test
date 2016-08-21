'use strict'

class Timer extends React.Component {
  constructor(props) {
    super()
    console.log(props)
  }

  componentDidMount () {
    // setInterval(() => {
    //   this.setState({
    //     counter: this.state.conter + 1
    //   })
    // }, 1000)
  }

  onclick () {
    console.log('Clicked')
    this.props.clickCheck(true)
  }

  render () {
    // const {person} = this.props
    return (
      <div>
        Hey Elapsed: {this.props.person.fname}
        <button onClick={this.onclick.bind(this)}>Click Me</button>
      </div>
    )
  }
}
