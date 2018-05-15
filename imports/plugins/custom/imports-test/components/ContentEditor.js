import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withReactSummernote } from './lib/withReactSummernote';

class ContentEditor extends Component {

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  };

  constructor (props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  render () {
    const { value, onChange, onBlur } = this.props;
    const { ReactSummernote, loaded } = this.state;

    return (
      <div id="content-editor">
        This is a test. Confirm react-summernote is available by viewing the state of this component.
        Run meteor with the bundle visualizer in production mode to confirm react-summernote is not part of
        the initial client bundle.
      </div>
    );
  }
}

export default withReactSummernote(ContentEditor);
