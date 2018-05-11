import React from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import ContentEditor from '../imports/ui/components/ContentEditor';

import './index.html';

Template.importsTest.onRendered(function () {
  ReactDOM.render(
    <ContentEditor />,
    document.getElementById('imports-test')
  );
});
