import React from 'react';
import './App.css';
import CardExampleImageCard from "./components/CardExampleImageCard";
import { Button, Divider, Header,Item } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import NewsArticleApi from "./api/NewsArticleApi";

class App extends React.Component{


  state = {
    article:{
      title: "........",
      shortDescription:".........................................",
      fullArticle:"........................................................."
    },
    allArticles : {
      item : ""
    }
  }

  onButtonOneClick = async(event) => {
    let res = await NewsArticleApi.getAllArticles("none");
    console.log( res.data.items);
    this.setState({allArticles: res.data.items});
  }

  componentDidMount= async(event) => {
    let res = await NewsArticleApi.getAllArticles("none");
    this.setState({allArticles: res.data.items});
  }

  render(){
    return (
      <div className="App">
        <br />
        <Header as='h1'>The List : by madfarm.xyz</Header>
        <Divider />

        <div style={{marginLeft: "20%",marginRight: "20%",marginTop: "2%", textAlign: "left"}}>
          <Button.Group widths='3'size="large">
            <Button size="large" onClick={(event)=> this.onButtonOneClick("hot")}>Hot Topics</Button>
            <Button size="large">New</Button>
            <Button size="large">Popular</Button>
          </Button.Group>
        </div>

        <div style={{marginLeft: "20%",marginRight: "20%",marginTop: "2%", textAlign: "left"}}>
          <Item.Group divided>
            {this.state.allArticles.length ? this.state.allArticles.map(a => <CardExampleImageCard props={a}/>): ""}
          </Item.Group>
        </div>

      </div>
    );
  }
}


export default App;
