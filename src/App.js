import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CardList from './components/card/CardList';
import UserDetails from './components/userDetails/userDetails';


function App(props) {
  const { className } = props;
  return (
    <div className={className}>
      <div className="preheader-page">
        <img style={{width:'40px', height:'40px', marginTop: '10px'}} src="github.png" alt="" />
        <h1 style={{ margin: '10px'}}> React github Api</h1>
      </div>
      <Switch>
        <Route exact path="/" component={CardList} />
        <Route exact path="/user/:username" component={UserDetails} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  className: PropTypes.string,
};

export default styled(App)`
.preheader-page {
  width: 100%;
  height: 60px;
  background-color: #F3F3F3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
`;
