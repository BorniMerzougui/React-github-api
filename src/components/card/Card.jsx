import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';

const CardUser = (props) => {
  const { data } = props;
  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={data.avatar_url} />
        <Card.Header>{data.login}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link href to={`/user/${data.login}`}>
            <Button basic color="red" >
              Voir plus
            </Button>
          </Link>
        </div>
      </Card.Content>
    </Card>
  );
};

CardUser.propTypes = {
  data: PropTypes.object,
};

export default CardUser;

