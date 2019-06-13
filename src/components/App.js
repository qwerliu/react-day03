import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      msg : 'hello world'
    }
  }
  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = { () => {
          this.setState({
            msg: 'hello msg'
          })
        } }>修改</button>
      </div>
    )
  }
}
// const com = new Com()
// com.btnClickFn()
export default Com;
