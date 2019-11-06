import React, { Component } from 'react';
import './App.css';
import BuildingList from './components/BuildingList';
import ViewBuilding from './components/ViewBuilding';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';
import Search from './components/Search';
import Credit from './components/Credit';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props)
    this.addBuild = this. addBuild.bind(this)
    this.state = {
      filterText: '',
      selectedBuilding:[],
      idDelete: 0,
      dat: [],
      delted: [],
      dat: props.data,
      newbuild: []
    };
  }
  handleDelete(dDelete,props){
       console.log("remove ", dDelete)
       //deleting(props){
      // console.log("this is delted ", this.props.data[dDelete].name)
       		 this.state.dat.splice(dDelete, 1)

       	//}
       this.setState({
         //dat: this.state.dat.filter(id=> id.dDelete !==dDelete)

       })
    }

  filterUpdate(value){
    this.setState({
        filterText: value
      })
  }

  addBuild(obj){
    var newbuild ={name:'test', code: "TES", address: "blah"}
    //const date = this.state.dat
      //Object.assign(newbuild, date);

    var date= this.state.dat.slice()
      date.push(obj)
    	console.log("this is here ", obj.name )
        this.setState({
          dat: date
        })

  }
  selectedUpdate=id=> {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    //this.state.selectedBuilding.splice(id)
    this.state.selectedBuilding=[]
    var updat= []
     updat=this.state.selectedBuilding.concat(id)
      console.log("size ", updat.length)

    //console.log("index ", this.props.data.findIndex(idd=>idd.id=id))
    //handleDelete(id)
    this.setState({

      selectedBuilding:updat,
      idDelete: id
    })
  }

render (){

  return (
    <div className="bg">
       <div className="row">
         <h1>UF Directory App</h1>
         </div>
              <Search
               filterText = {this.state.filterText}
               filterUpdate = {this.filterUpdate.bind(this)}
               />
             
              <main>

                <div className="row">
                  <div className="column1">
                    <div className="tableWrapper">
                      <table className="table table-striped table-hover">
                        <tr>
                          <td>
                            <b>Code Building</b>
                          </td>
                        </tr>
                        <BuildingList data= {this.state.dat}
                          addBuild = {this.state.addBuild}
                        filterText={this.state.filterText}
                        idDelete={this.state.idDelete}
                        selectedUpdate={this.selectedUpdate.bind(this)}
                        delted={this.state.delted}
                        />
                      </table>
                   </div>
                 </div>
                 <div className="column2">
                   <ViewBuilding
                     selectedBuilding = {this.state.selectedBuilding}

                     data={this.state.dat}
                     />
                      <div>
                  <AddBuilding
                    addBuild={this.addBuild.bind(this)}
                     data= {this.state.dat}

                     />
                </div>
                   </div>
                   <div>
                     <RemoveBuilding
                       data={this.state.dat}
                       handleDelete={this.handleDelete.bind(this)}
                       selectedBuilding = {this.state.selectedBuilding}
                       selectedUpdate={this.selectedUpdate.bind(this)}
                       />
                   </div>
                 </div>
                <Credit />
              </main>
            </div>
          );

    }
}
export default App;
