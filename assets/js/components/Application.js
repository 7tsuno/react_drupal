import React from 'react';

class Application extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      users:[]
    }

  }

  getUser(){

    fetch('http://dev-meetup14.pantheonsite.io/rest/users?_format=json')
    .then(res => res.json())
    .then(json => {
      this.setState({
        users:json
      })
    })

  }

  render() {
    return (
      <div>
        <input type='button' onClick={() => this.getUser()} value='GET USER'/>
        {this.state.users.length > 0 &&
          <table>
          <thead>
            <tr><th>名前</th><th>会社</th></tr>
          </thead>
          <tbody>
            {this.state.users.map((user, key) =>
              <tr key={key}><td>{user.field_name}</td><td>{user.field_company_name}</td></tr>
            )}
          </tbody>
          </table>
        }
      </div>
    );
  }
}

export default Application;
