import PropTypes from 'prop-types';
import React from 'react';
import ReactQueryParams from 'react-query-params';
import { Index } from 'elasticlunr';

export default class Search extends ReactQueryParams {
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
    // Initially perform search based on query param
    this.search(this.queryParams.search);
  }

  componentWillReceiveProps() {
    // Update search if query param has changed
    if (this.state.query !== this.queryParams.search) {
      this.search(this.queryParams.search);
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
        // Update query param *after* state has been set
        this.setQueryParams({ search: text });
        this.props.onSearch(text, hits);
      }
    );
  }

  createIndex() {
    this.index = Index.load(this.props.data.index);
  }

  getHits(query) {
    if (!query) return [];

    if (!this.index) this.createIndex();
    const hits = this.index.search(query, {});
    return hits.map(({ ref }) => this.index.documentStore.getDoc(ref));
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
  data: PropTypes.shape({
    index: PropTypes.object.isRequired
  }).isRequired,
  onSearch: PropTypes.func.isRequired
};
