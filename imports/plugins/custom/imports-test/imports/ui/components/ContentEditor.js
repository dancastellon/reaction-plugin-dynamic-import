import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContentEditor extends Component {

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

  componentWillMount () {
    this.importSummernote();
  }

  importSummernote = async () => {
    const ReactSummernote = await import('react-summernote');
    await import('react-summernote/dist/react-summernote.css');
    this.ReactSummernote = ReactSummernote.default;
    window.ReactSummernote = ReactSummernote.default;
    this.setState({ loaded: true });
  };

  render () {
    const { value, onChange, onBlur } = this.props;
    const { loaded } = this.state;
    const { ReactSummernote } = this;

    return (
      <div id="content-editor">
        This is a test. Confirm react-summernote is available by typing window.ReactSummernote in console.
        Run meteor with the bundle visualizer in production mode to confirm react-summernote is not part of
        the initial client bundle.
      </div>
    );
  }
}
