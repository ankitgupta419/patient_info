import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Route, Link} from 'react-router-dom';
let data=[{
    'name':"Ankit",
    'age':'29',
    'gender':'male',
    'contact':'9732322332'
},{
    'name':"Rahul",
    'age':'21',
    'gender':'male',
    'contact':'8122322332'
},{
    'name':"kamla",
    'age':'29',
    'gender':'female',
    'contact':'9732322332'
},{
    'name':"Chavi",
    'age':'16',
    'gender':'female',
    'contact':'9732322332'
}

]
export class Patient extends Component {
    constructor(props){
        super(props);
        this.state={
            searchValue:''
        }
        this.input = React.createRef();
    }
  addData(){

  }
  searchPatient = (e) => {
      let getValue=document.getElementById('searchBox').value
      
        this.setState({
            searchValue:getValue
        });
  }
  viewPatient=(patient,e)=>{
    console.log(patient,"patient")
  }
  render() {
      let searchValue=this.state.searchValue
      let searchFound=0
      console.log(searchValue,"searchValue")
    const PatientData=data.map((patient,i)=>{
        if (patient.name.toLowerCase().includes(searchValue)) {
            searchFound++
            return(
                <tr key ={i} onClick={(e)=>this.viewPatient(patient,e)}>
                        <td>{patient.name}</td>
                        <td>{patient.age}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.contact}</td>
                    </tr>
            )
        }
    }
        
    )
    console.log(searchFound,"searchFound")
    return (
        <>
            <div><Link to="/add">Add User data</Link></div>
            <input id="searchBox" class="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.searchPatient}></input>
            {searchFound>0?( <table className="table table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Contact</th>
                </tr>
                {PatientData}
            </table>):(<div>No result found</div>)}
           
        </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}
const mapActionToProps = {
}
export default connect(mapStateToProps, mapActionToProps)(Patient);