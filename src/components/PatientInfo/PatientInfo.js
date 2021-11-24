import React, { Component } from 'react'
import { connect } from 'react-redux';

export class PatientInfo extends Component {
  
  render() {
    
    return (

      <div>
        Patient
      </div>

    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}
const mapActionToProps = {
}
export default connect(mapStateToProps, mapActionToProps)(PatientInfo);