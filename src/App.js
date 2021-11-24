import React, { Fragment, Component } from 'react';
import { IndexRoute, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Patient } from './components/Patient/Patient';
import { PatientInfo } from './components/PatientInfo/PatientInfo';
import { AddPatientData } from './components/Patient/AddpatientData';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('root constructed!');
  }

  render() {
    return (
      <Fragment>
        <Route path="/" component={Patient} >
          <Route exact path="/" render={props => <Patient {...props} />} />
          <Route path="/add" render={props => <AddPatientData {...props} />} />
          <Route path="/pinfo" render={props => <PatientInfo {...props} />} />
        </Route>
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

