import React from 'react'
import { Item , Label, } from 'semantic-ui-react'

class CardExampleImageCard extends React.Component{

  state = { isread: [] };

  onArticleClick(event){
    // console.log("clicked");
    this.setState(   { isread:  this.state.isread.push( event.target.getAttribute("data-key"))  } );
    console.log(this.state);
  }

  contains(arr, element) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === element) {
              return true;
          }
      }
      return false;
  }

  doParentToggleFromChild(event){	
    console.log("called");
    this.props.parentToggle(event.target.getAttribute("data-key"));
  }

  render(){
    return(
      
      <Item size="large" key={this.props.props.title} onClick={ (event) => this.doParentToggleFromChild }>
      <Item.Image src={this.props.props.urlToImage} />  
      {console.log(this.props)}
      <Item.Content onClick={ (event) => this.doParentToggleFromChild }>
        <Item.Header size="large" as='a' color="grey" data-key={this.props.props.title} target="_blank" onClick={ (event) => this.doParentToggleFromChild(event) } href={this.props.props.url}>{this.props.props.title}</Item.Header>
        <Item.Meta>
          <span className='cinema' color="grey" size="large"><b>{this.props.props.title}</b></span>
        </Item.Meta>
        <Item.Description size="large">{this.props.props.description}</Item.Description>
        <Item.Extra>
          <Label icon='globe' content={this.props.props.source.name}></Label>
          <i aria-hidden="true" class={ this.props.colorNow === ""  ? "check circle icon large grey": "check circle icon large green"} ></i>
        </Item.Extra>
      </Item.Content>
    </Item> 

    );
  }
}

export default CardExampleImageCard;