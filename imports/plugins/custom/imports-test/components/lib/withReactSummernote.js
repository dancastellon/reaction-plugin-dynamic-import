import { lifecycle } from "recompose";

export function withReactSummernote (component) {
  return lifecycle({
    componentDidMount () {
      import('react-summernote/dist/react-summernote.css');
      import('react-summernote')
        .then(ReactSummernote => {
          this.setState({
            ReactSummernote,
            loaded: true
          });
        })
        .catch(err => {
          console.log(err, 'react-summernote async import error');
        })
    }
  })(component);
}
