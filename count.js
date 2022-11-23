import React, { Component } from 'react';

class Count1 extends Component {
constructor(props) {
super(props)

this.state = {
count:0
};
}
increment=()=>{this.setState({count:this.state.count+1});
};
decrement=()=>{this.setState({count:this.state.count-1});
};
render() {
return (
<div className='App'>

52

<button onClick={this.increment} className='counter'>+</button>
&nbsp;
<button onClick={this.decrement} className='counter'>-</button>
<h2>Count : {this.state.count}</h2>
</div>
);
}
}
export default Count1;
