/* global process */
import {h, Component} from 'preact';
import WrappedSvg from './wrapped-svg';
import PlainSvg from './plain-svg';

const components = {
  wrappedSvg: WrappedSvg,
  plainSvg: PlainSvg
};

class Dynamic extends Component {
  render() {
    const {name} = this.props;
    const DynamicComponent = components[name];
    return <DynamicComponent />;
  }
}

export default Dynamic;
