import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import CardUser from './Card';

class CardList extends React.Component {
  constructor() {
    super();
    // intialization of our state
    this.state = {};
  }

  // load users just after render to the dom, we will use fetch
  componentDidMount() {
    const perPage = this.props.isFromDetails ? 5 : process.env.REACT_APP_PER_PAGE;
    const url = process.env.REACT_APP_API_GITHUB_URL;
    fetch(`${url}/users?per_page=${perPage}`)
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          users,
        });
      });
  }

  // search users bu login : we will use axios
  // if event.target.value is empty we load the list of 50 users
  async handleChange(event) {
    const perPage = process.env.REACT_APP_PER_PAGE;
    const url = process.env.REACT_APP_API_GITHUB_URL;
    if (event.target.value) {
      const user = await axios.get(`${url}/search/users?q=${event.target.value}`);
      const usersSearch = get(user, 'data.items', []);
      this.setState({ users: usersSearch });
    } else {
      fetch(`${url}/users?per_page=${perPage}`)
        .then((response) => response.json())
        .then((users) => {
          this.setState({
            users,
          });
        });
    }
  }

  render() {
    // destruct props
    const { className, isFromDetails } = this.props;
    if (!this.state.users) {
      return (<div className="user-page">LOADING...</div>);
  }
    return (
      <Grid className={className}>
        <Grid.Row>
          <Grid.Column>
            { !isFromDetails &&
            <div className="input_container">
              <div className="input_img-container">
                <input
                  placeholder="taper le login"
                  className="input_search"
                  type="search"
                  onChange={(e) => this.handleChange(e)}
                />
                <img className="input_search__img" src="search_icon.png" alt="" />
              </div>
            </div>
            }
            <Card.Group className="users_list">
              {this.state.users && this.state.users.map((item) => (
                <CardUser
                  key={item.id}
                  data={item}
                />
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

// props validations is here
CardList.propTypes = {
  className: PropTypes.string,
  isFromDetails: PropTypes.bool,
};

// export the component and add css here in the same file ( small css code )
export default styled(CardList)`
.users_list {
  justify-content: center;
  margin: 0;
}

.input_search{
  padding-top: 20px;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
  }

  .input_search__img{
    position:absolute;
    bottom:2px;
    right:5px;
    width:24px;
    height:24px;
    }

    .input_container {
      position:relative;
      padding:0 0 0 20px;
      margin:0 auto;
      width: 200px;
  }

  .input_img-container{
    display: block;
    margin: 0 auto;
  }
`;
