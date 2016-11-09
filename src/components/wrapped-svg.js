import {h} from 'preact';
import hoc from './hoc';

const WrappedSvg = () => {
  return (
    <div>
      <div> {/* removing one wrapping div fixes the issue */}
        <svg><circle cx="50" cy="20" r="40" fill="green" /></svg>
      </div>
    </div>
  );
};

// Removing the hoc also fixes the issue
export default hoc()(WrappedSvg);
