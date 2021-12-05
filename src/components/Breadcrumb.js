import React from 'react';
import { Link } from 'gatsby';

class Breadcrumb extends React.Component {
  render() {
    const { absolutePath } = this.props;
    if (absolutePath === '/zoeken') {
      return (
        <div className="breadcrumbs px-3 pl-lg-0">
          <span>Zoeken</span>
        </div>
      );
    }
    const paths = absolutePath
      .substr(absolutePath.indexOf('content/'), absolutePath.length)
      .replace('content/', '')
      .replace('index.md', '')
      .replace(/.md/, '')
      .split('/');

    const cleanPaths = paths.filter((path) => path !== '');
    let fullPath = '';
    const breadCrumbs = cleanPaths.map((path, index) => {
      fullPath = `${fullPath}/${path}`;
      return (
        <span key={index}>
          {index > 0 ? <span className="arrow">&gt;</span> : null}
          {cleanPaths.length === index + 1 ? (
            <>{path.replace(/-/g, ' ').replace('.mdx', '')}</>
          ) : (
            <Link to={fullPath}>{path.replace(/-/g, ' ').replace('.mdx', '')}</Link>
          )}
        </span>
      );
    });
    return <div className="breadcrumbs px-3 pl-lg-0">{breadCrumbs}</div>;
  }
}

export default Breadcrumb;
