import React from "react";
export class DashBoardPage extends React.Component {
  state = {
    users: [],
    error: null,
  };
  componentDidMount() {
    this.getLabeldata();
  }
  getLabeldata = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      // ...then we update the users state
      .then((data) => {
        console.log(data);
        this.setState(() => ({
          users: data,
          error: null,
        }));
      })
      // Catch any errors we hit and update the app
      .catch((error) => this.setState({ error }));
  };

  render() {
    return (
      <div className="content-container">
        {this.state.error ? <p>{this.state.error.message}</p> : null}
        <div className="box_layout__box">
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="button"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    One-line Item collapsed
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                {this.state.users.map((user) => {
                  const { username, name, email } = user;
                  return (
                    <div key={username}>
                      <p>Name: {name}</p>
                      <p>Email Address: {email}</p>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoardPage;
