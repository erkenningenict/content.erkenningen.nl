import React from 'react';
import Link from 'gatsby-link';

class Breadcrumb extends React.Component {
  render() {
    const { absolutePath } = this.props;
    const paths = absolutePath
      .substr(absolutePath.indexOf('pages/'), absolutePath.length)
      .replace('pages/', '')
      .replace('index.md', '')
      .replace(/.md/, '')
      .split('/');
    const cleanPaths = paths.filter((path) => path !== '');
    let fullPath = '';
    const breadCrumbs = cleanPaths.map((path, index) => {
      fullPath = `${fullPath}/${path}`;
      return (
        <span key={index}>
          {index > 0 ? <span className="arrow">></span> : null}
          {cleanPaths.length === index + 1 ? (
            <>{path.replace(/-/g, ' ').replace('.md', '')}</>
          ) : (
            <Link to={fullPath}>{path.replace(/-/g, ' ').replace('.md', '')}</Link>
          )}
        </span>
      );
    });
    return <div className="breadcrumbs px-3 pl-lg-0">{breadCrumbs}</div>;
  }
}

export default Breadcrumb;
