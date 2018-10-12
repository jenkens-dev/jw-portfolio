import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
   phrase: PropTypes.string.isRequired,
};

class HelloWorld extends React.Component {
   render() {
      const { phrase } = this.props;
      return <div>Hello {phrase}</div>;
   }
}

export const WORLD = 'world';

HelloWorld.propTypes = propTypes;

export default HelloWorld;
