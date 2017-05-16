import React from 'react';
import { Card, CardActions, CardTitle, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class FoodCard extends React.Component {

  render(props) {
    return (<Card style={{ width: '350px', margin: '10px', display: 'inline-block' }}>
      <CardMedia
        overlay={<CardTitle title={this.props.title} style={{ fontFamily: 'haymaker' }} />}>
        <img src={this.props.picture} alt={this.props.title} style={{ height: '175px' }} />
      </CardMedia>
      <CardActions>
        <FlatButton label="ADD TO LIST" primary={true} />
        <FlatButton label="REMOVE" secondary={true} />
      </CardActions>
    </Card>
    )
  }
}
export default FoodCard;