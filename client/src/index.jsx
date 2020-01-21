import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }


  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      type: "POST",
      url: "/repos",//the url to which the request is sent,
      data: JSON.stringify({username: term}),//plainobject or string that is sent to the server with the request,
      contentType: 'application/json',
      success: (data) => {
       console.log('POST success!!')
       //after success, then do a GET request to the server for the data
      },
      error: (err) => {
        console.log('Error in POST', err);
      }
    })
  }
    // $.ajax({
    //   type: "GET",
    //   url: "/repos",
    //   data: JSON.stringify({username: term}),
    //   contentType: 'application/json',
    //   success: (data) => {
    //     this.setState({repos: data})
    //     //callback function executed if the request is successful
    //   },
    //   error: (err) => {
    //     console.log("Error in GET", err);
    //   }
    // });

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));