import {h, Component} from 'preact';

export default function createHOC() {
  return function hoc(c) {
    class Connected extends Component {
      render() {
        return h(c, {});
      }
    }
    return Connected;
  };
}
