import React, { Component } from 'react';
import NavigationItem from './NavigationItem';
import Search from '../components/Search';

class VerticalNavigationList extends Component {
  constructor(...rest) {
    super(...rest);
    this.state = {
      hits: null,
      query: null
    };
  }
  render() {
    const { edges } = this.props;
    const { hits, query } = this.state;

    return (
      <div>
        <Search
          onSearch={(text, hits) =>
            this.setState({
              hits: text !== '' ? hits : null,
              query: text
            })
          }
        />
        {query && hits && hits.length === 0 ? (
          <i>Er zijn geen resultaten gevonden met "{query}"</i>
        ) : null}
        <nav>
          <dl>
            {hits
              ? hits.map((hit, index) => {
                  const edge = edges.find(({ node }) => node.id === hit.id);
                  if (!edge) {
                    return null;
                  }
                  return (
                    <div key={`nav-header-wrapper-${index}`}>
                      <NavigationItem
                        depth={1}
                        title={edge.node.frontmatter.title}
                        excerpt={edge.node.excerpt}
                        key={`nav-item-${index}-${edge.node.fields.slug}`}
                        href={`${edge.node.fields.slug}`}
                      />
                    </div>
                  );
                })
              : null}
          </dl>
        </nav>
      </div>
    );
  }
}

export default VerticalNavigationList;
