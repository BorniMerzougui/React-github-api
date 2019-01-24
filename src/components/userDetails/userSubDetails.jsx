import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function UserSubDetails(props) {
  const {
    user, objectsearch, type, className,
  } = props;
  return (
    <Grid className={className}>
      <Grid.Row>
        <Grid.Column>
          <h2 style={{ paddingLeft: '20px' }}>{user}'s {type}:</h2> <br />
          { type === 'Repos' &&
              objectsearch.map((item) =>
              // eslint-disable-next-line
                (<a href={item.clone_url} target="_blank">
                  <div className="repos_container">
                    <h4> {item.full_name} </h4> <br />
                    <label className="repos_label">{item.stargazers_count}☆</label>
                  </div>
                </a>
                ))
          }
          { type === 'Followers' &&
              objectsearch.map((item) =>
                (<Link to={`/user/${item.login}`} href>
                  <div className="followers_container" >
                    <img src={item.avatar_url} alt="Avatar" className="avatar_user" /> <br />
                    <label className="followers_label">{item.login}</label>
                  </div>
                </Link>))
          }
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

UserSubDetails.propTypes = {
  user: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  objectsearch: PropTypes.object,
};

export default styled(UserSubDetails)`
  .repos_container{
    display: flex;
    margin-left: 50px;
  }

  .repos_label{
    border: 1px solid;
    height: 20px;
    margin-left: 10px;
  }

  .followers_container{
    display: flex;
    margin-left: 50px;
    padding: 10px;
  }

  .avatar_user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .followers_label{
    margin-left: 10px;
  }
`;
