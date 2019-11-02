import React from 'react'
import { Item , Label } from 'semantic-ui-react'

class CardExampleImageCard extends React.Component{
  
  render(){
    return(
      <Item>
      <Item.Image src={this.props.props.thumbnail} />
      {console.log(this.props)}
      <Item.Content>
        <Item.Header as='a'>{this.props.props.title}</Item.Header>
        <Item.Meta>
          <span className='cinema'><b>{this.props.props.title}</b></span>
        </Item.Meta>
        <Item.Description size="medium">{this.props.props.pubDate}</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item> 

    );
  }
}

export default CardExampleImageCard;