'use strict'

class Timer extends React.Component {
  constructor(props) {
    console.log(props)
    super();
  }

  componentDidMount () {
    setInterval(() => {
      this.props.conter++
    }, 1000)
  }

  render () {
    return (
      <div>Hey Elapsed: {this.props.counter}</div>
    );
  }
}
