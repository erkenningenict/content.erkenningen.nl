import React, { useState } from 'react';
import NavigationItem from './NavigationItem';
import SearchBar from '../components/SearchBar';
import { useFlexSearch } from 'react-use-flexsearch';

const VerticalNavigationList = ({ data }) => {
  let search = '';
  if (typeof window !== 'undefined') {
    search = window.location.search;
  }
  const query = new URLSearchParams(search).get('zoekterm');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const searchOptions = {
    suggestions: true,
    tokenize: 'full',
  };

  const hits = useFlexSearch(
    searchQuery,
    data.localSearchPages.index,
    data.localSearchPages.store,
    searchOptions
  );

  const pages = data.allMdx.edges;

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <nav>
        <dl>
          {hits && hits.length > 0
            ? hits.map((hit, index) => {
                const edge = pages.find(({ node }) => node.id === hit.id);
                if (!edge) {
                  return null;
                }
                return (
                  <div key={`nav-header-wrapper-${index}`}>
                    <NavigationItem
                      depth={1}
                      title={edge.node.frontmatter.title}
                      excerpt={edge.node.excerpt}
                      key={`nav-item-${index}-${edge.node.slug}`}
                      href={`../${edge.node.slug}`}
                    />
                  </div>
                );
              })
            : []}
        </dl>
      </nav>
    </div>
  );
};

export default VerticalNavigationList;
