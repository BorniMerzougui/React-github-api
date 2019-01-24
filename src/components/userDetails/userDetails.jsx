import React, { Fragment, Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import { get } from 'lodash';
import CardList from '../card/CardList';
import withStyle from './withUserDetailsStyle';
import UserSubDetails from './userSubDetails';

class UserDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // eslint-disable-next-line
    const { match } = this.props;
    const url = process.env.REACT_APP_API_GITHUB_URL;
    fetch(`${url}/users/${match.params.username}`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({
          user,
        });
      });
  }

  componentDidUpdate(nextProps) {
    // eslint-disable-next-line
    const { match } = nextProps;
    const url = process.env.REACT_APP_API_GITHUB_URL;
    if(this.props.match !== match){
    fetch(`${url}/users/${match.params.username}`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({
          user,
        });
      });
    }
  }

  async handleDetails(url, typeSearch) {
    const details = await axios.get(`${url}`);
    const objectsearch = get(details, 'data', []);
    this.setState({ objectsearch, type: typeSearch });
  }

  render() {
    // eslint-disable-next-line
    const { className } = this.props;
    const { user } = this.state;
    if (!user) {
      return (
        <Container textAlign="center"><h1> ai aia ai</h1></Container>
      );
    }
    return (
      <Fragment>
        <div className={className}>
          <div className="user-page__content">
            <div className="user-page__user">
              <div className="user">
                <img alt="user" src={user.avatar_url} className="user__img" id="innerRefImg" />
              </div>
              <div className="user__details">
                <div className="user__name">
                  {user.login} ({user.name})
                </div>
                { user.bio ?
                  <div className="user__bio">
                    {user.bio}
                  </div>
                  :
                  <div className="user__bio">
                  Dev
                  </div>
                }
                <div className="user_infos">
                  <div className="user_infos-it" onClick={() => this.handleDetails(user.repos_url, 'Repos')}> {user.public_repos} <br /> public_repos </div>
                  <div className="user_infos-it" onClick={() => this.handleDetails(user.followers_url, 'Followers')}> {user.followers} <br /> followers</div>
                  <div className="user_infos-it" > {user.following} <br /> following</div>
                </div>
              </div>
            </div>
            { this.state.objectsearch &&
            <UserSubDetails
              user={user.name}
              type={this.state.type}
              objectsearch={this.state.objectsearch}
            />
            }
          </div>
          <div className="user-page__recommender">
            <div className="user-page__recommender-title">Vous pourriez aussi voir </div>
            <CardList
              isFromDetails
            />
          </div>
        </div>
      </Fragment>
    );
  }
}


export default withStyle(UserDetails);

