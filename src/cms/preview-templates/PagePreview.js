import React from 'react';
import PropTypes from 'prop-types';

const PagePreview = ({ entry, widgetFor }) => (
  // eslint-disable-next-line:react/jsx-no-undef
  <PageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PagePreview;
