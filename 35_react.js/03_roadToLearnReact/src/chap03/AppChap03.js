import React, { Component } from 'react';
import Search from './components/Search';
import Button from './components/Button';
import Loader from './components/Loader';

const DEFAULT_QUERY = 'redux';
const DEFAULT_PAGE = 0;
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'hitsPerPage=3&query=';
const PARAM_PAGE = 'page=';

class AppChap03 extends Component {
  constructor(props) {
    super(props);

    // initialise states
    this.state = {
      searchTerm: DEFAULT_QUERY,
      searchPage: DEFAULT_PAGE,
      result: null,
      isLoading: false
    };

    // bind class methods
    this.onSearchChange = this.onSearchChange.bind(this);
    this.setSearchTopstories = this.setSearchTopstories.bind(this);
  }

  /**
   * React:
   * - use 'dangerouslySetInnerHTML' to set html text
   */
  render() {
    const { searchTerm, result, isLoading } = this.state;
    const hasHits = result && result.hits && result.hits.length;

    // construct results elements
    const resultElements;
    if (hasHits) {
      resultElements = result.hits.map((hit) => (
        <li key={hit.objectID} className="item">
          <a className="title" target="_blank"
            href={hit.url}
            dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
          <span className="subtitle">
            <small>Created by:</small>&nbsp;
            <b>{hit.author}</b>
          </span>
        </li>
      ));
    } else {
      resultElements = <p>No Results!</p>;
    }

    // construct pagination
    const pagination;
    if (hasHits) {
      pagination = (
        <div className="pagination">
          <Button
            disabled={this.state.searchPage <= 0}
            onClick={() => this.onSearchPagePrev()}>
            Previous
          </Button>

          &nbsp;
          {this.state.searchPage + 1}
          &nbsp;

          <Button
            disabled={this.state.searchPage >= (this.state.result ? this.state.result.nbPages : 0)}
            onClick={() => this.onSearchPageNext()}>
            Next
          </Button>
        </div>
      );
    } else {
      pagination = null;
    }

    // loader
    const loader = <Loader>Loading...</Loader>;

    return (
      <div className="chaptor" id="AppChap03">
        <h3>Chaptor 3</h3>

        <Search
          term={searchTerm}
          onChange={e => this.onSearchChange(e)}>
          Search Hacker News:
        </Search>

        {isLoading ? loader : resultElements}
        {isLoading ? "" : pagination}
      </div>
    );
  }

  /**
   * React:
   * - called after render from mounting
   */
  componentDidMount() {
    const { searchTerm, searchPage } = this.state;
    this.fetchSearchTopstories(searchTerm, searchPage);
  }

  /**
   * React:
   * - called after render from updates
   */
  componentDidUpdate(prevProps, prevState) {
    // do new search when term is updated to different value
    const { searchTerm, searchPage } = this.state;
    if (searchTerm != prevState.searchTerm || searchPage != prevState.searchPage) {
      this.fetchSearchTopstories(searchTerm, searchPage);
    }
  }

  /**
   * class methods
   */

  onSearchChange(e) {
    // merge latest valid search term into state
    const newSearchTerm = e.target.value;
    this.setState({
      searchTerm: newSearchTerm
    });
  }

  onSearchPagePrev() {
    const newSearchPage = this.state.searchPage - 1;
    if (newSearchPage < 0) {
      return false;
    }
    this.setState({
      searchPage: newSearchPage
    });
  }

  onSearchPageNext() {
    const newSearchPage = this.state.searchPage + 1;
    this.setState({
      searchPage: newSearchPage
    });
  }

  fetchSearchTopstories(searchTerm, searchPage) {
    // skip search if term is invalid
    if (!searchTerm || searchTerm.length <= 2 || searchPage < 0) {
      return false;
    }

    this.setState({
      isLoading: true
    });

    const requestUrl = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${searchPage}`;

    // uses native fetch API for demo purpose
    fetch(requestUrl)
      .then(response => response.json())
      .then(result => this.setSearchTopstories(result))
      .catch(e => e);
  }

  setSearchTopstories(result) {
    // ES6: use same name shorthand syntax
    this.setState({
      result,
      isLoading: false
    });
  }
}

export default AppChap03;
// Chaptor 3 completed