import { h, Component } from 'preact';
import Dynamic from './dynamic';
// This is a trivial example that reproduces the replaceChild bug
// The third setState causes the following error:
// Error: Failed to execute 'replaceChild' on 'Node': The new child element contains the parent.
//    at renderComponent
//    at setComponentProps
//    at buildComponentFromVNode
//    at idiff
//    ... ...
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWrappedSvg: false,
      showPlainSvg: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showPlainSvg: true
      });
    }, 250);

    setTimeout(() => {
      this.setState({
        showPlainSvg: false
      });
    }, 500);

    setTimeout(() => {
      this.setState({
        showWrappedSvg: true
      });
    }, 750);
  }

  render() {
    return (
      <div id="App">
        {this.state.showPlainSvg &&
          // Rendering one of these directly rather than through the dynamic component fixes the issue
          <Dynamic name="plainSvg" />
        }
        {this.state.showWrappedSvg &&
          <Dynamic name="wrappedSvg" />
        }
      </div>
    );
  }
}

export default App;
