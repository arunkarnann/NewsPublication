import React from 'react';
import './App.css';
import CardExampleImageCard from "./components/CardExampleImageCard";
import SpotifyCard from "./components/SpotifyCard";
import { Button, Header,Item, Segment, ItemGroup } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import NewsArticleApi from "./api/NewsArticleApi";

class App extends React.Component{

  state = {
    selected: "",
    allArticles : {
      item : ""
    },
    isRead: [],
    counter:0,
    tab: ""
  }
  

  onButtonOneClick = async(params) => {
    let res = await NewsArticleApi.getAllArticles(params);
    this.setState({tab: params})
    this.setState({selected: params})
    this.setState({allArticles: res.data.articles});
  }

  doParentToggle = (event) =>{
    console.log(event);
    this.setState(   { isRead: [...this.state.isRead,event ]} , console.log(this.state) );
    
  }

  componentDidMount= async(event) => {
    //TODO Enable this later
    let res = await NewsArticleApi.getAllArticles("");
    console.log(res.data);
    this.setState({allArticles: res.data.articles});
  }

  render(){
    return (
      <div className="App">
        <div inverted style={{marginLeft: "20%",marginRight: "20%",marginTop: "2%", textAlign: "left"}}>
          <Segment>
            <Header  left as='h1' textAlign="center" fontFamily='Bookman'>Madfarm</Header>
          </Segment>
          <Button.Group widths='4'size="large">
            <Button color={this.state.selected === "" ? "olive" : ""} active={this.state.selected === "" ? true : false} 
              size="large" onClick={(event)=> this.onButtonOneClick("")}>
              Headlines
              </Button>
            <Button color={this.state.selected === "technology" ? "olive" : ""} active={this.state.selected === "technology" ? true : false} 
              size="large" onClick={(event)=> this.onButtonOneClick("technology")}>
              Technology
              </Button>
            <Button color={this.state.selected === "entertainment" ? "olive" : ""} active={this.state.selected === "entertainment" ? true : false} 
              size="large" onClick={(event)=> this.onButtonOneClick("entertainment")}>
              Entertainment
              </Button>
            <Button color={this.state.selected === "entertainment" ? "olive" : "purple"} active={this.state.selected === "listennow" ? true : false} 
              size="large" onClick={(event)=> this.onButtonOneClick("listennow")}>
              Chill
              </Button>
          </Button.Group>
        </div>
        <br />

        {this.state.allArticles.length ? this.state.allArticles.slice(0, 9).map(a => 
              a.urlToImage ? <i aria-hidden="true" class={ this.state.isRead.includes(a.title) ? "circle icon large green": "circle outline icon large grey"} ></i> : ""  ) : ""}
        
        { this.state.tab !== "listennow" ? 
        (<div style={{marginLeft: "20%",marginRight: "20%",marginTop: "2%", textAlign: "left"}}>
          <Item.Group divided>
            {this.state.allArticles.length ? this.state.allArticles.slice(0, 9).map(a => 
              a.urlToImage ? (<CardExampleImageCard colorNow={this.state.isRead.includes(a.title)? "green": "" } counter={this.state.counter} parentToggle={this.doParentToggle}  onClick={(event) => this.onCardClicked(event)} key={a.title} props={a}/>) : ""  ) : ""}
          </Item.Group>
        </div>) : <div style={{marginLeft: "20%",marginRight: "20%",marginTop: "2%", textAlign: "left"}}>
          <Item.Group divided>
            <SpotifyCard />
            </Item.Group>
            </div> } 

      </div>
    );
  }
}


export default App;
