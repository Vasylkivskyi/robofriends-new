import React, { useEffect } from 'react';
import './app.scss';
import CardList from '../../Components/CardsList/CardsList';
import Search from '../../Components/Search/Search';
import Loader from '../../Components/Loader/Loader';
import ErrorBoundry from '../../Components/ErrorBoundry/ErrorBoundry';
import { setSearchField, requestRobots } from '../../actions';
import { connect } from 'react-redux';

const App = ({
  searchField,
  onSearchChange,
  onRequestRobots,
  isPending,
  error,
  robots,
}) => {
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);
  console.log(robots);

  return (
    <div className="container">
      <h1>Robofriends app</h1>
      {!isPending ? (
        <>
          <div className="search-container">
            <Search value={searchField} changeHandler={onSearchChange} />
          </div>
          <ErrorBoundry>
            <CardList
              robots={robots.filter((robot) =>
                robot.name.toLowerCase().includes(searchField.toLowerCase()),
              )}
            />
          </ErrorBoundry>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
