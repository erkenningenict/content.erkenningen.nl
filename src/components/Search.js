import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props, context) {
    super(props, context);

    this.search = this.search.bind(this);

    this.handleSearchInput = evt => {
      const text = evt.target.value;
      this.search(text);
    };

    this.state = {
      query: '',
      hits: []
    };
  }

  componentDidMount() {
    // Initially perform search if navigation state is set (from navbar search input)
    this.checkNavigationState();
  }

  componentWillReceiveProps() {
    this.checkNavigationState();
  }

  /**
   * Check if a navigate action is set with search state
   */
  checkNavigationState() {
    if (
      window &&
      window.history &&
      window.history.state &&
      window.history.state.search &&
      this.state.query !== window.history.state.search
    ) {
      this.search(window.history.state.search);
      // Clear navigation state
      window.history.state.search = '';
    }
  }

  search(text) {
    const hits = this.getHits(text);
    this.setState(
      s => {
        return {
          ...s,
          hits,
          query: text
        };
      },
      () => {
        this.props.onSearch(text, hits);
      }
    );
  }

  /**
   * Parse terms from query (using whitespace separator) and add required and wildcard options
   */
  parseTerms(query) {
    const ws = ' ';
    return query
      .split(ws)
      .map(term => '+' + term + '*')
      .join(ws);
  }

  getHits(query) {
    if (!query || !window.__LUNR__) {
      return [];
    }
    const terms = this.parseTerms(query);
    const lunrIndex = window.__LUNR__['du'];
    const results = lunrIndex.index.search(terms);
    return results.map(({ ref, score }) => ({ ...lunrIndex.store[ref], id: ref, score: score }));
  }

  render() {
    const { query } = this.state;
    return (
      <div role="search">
        <input
          onChange={this.handleSearchInput}
          placeholder="Zoek op trefwoord"
          className="searchInput"
          type="search"
          value={query}
        />
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};
