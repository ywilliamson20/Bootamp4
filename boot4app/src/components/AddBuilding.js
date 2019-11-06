import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';

class AddBuilding extends React.Component {
	///addBuild(){
		//return(
		//event.preventDefault();

		//var newbuild ={name:'test', code: "TES"}
				//this.props.data.concat(newbuild)
				//console.log("new ", newbuild.name)
			//)
	//}
	constructor(props) {
        super(props);
        //this.check = this.check.bind(this);

	this.state={
				obj: []
        //this.testVarible= "this is a test";
			}
    }

	state={
			name: "",
			address: " ",
			code: '',
			latitude: '',
			longitude: '',

	}
	clearForm = () => {
	  document.getElementById("createform").reset();
	}
	check=()=>{
		//console.log(document.getElementById('name').value); // Shows the right value!
		//document.getElementById('name').value='';
		var nname= document.getElementById('name').value
		console.log(nname)
					var	objectt = {name: nname	,
								code:	document.getElementById('code').value,
								address:	document.getElementById('address').value,
								latitude:	document.getElementById('latitude').value,
								longitude:	document.getElementById('longitude').value,
								id: this.props.data.length+1



		}
		this.props.addBuild(objectt)
		this.setState({
			obj: objectt
		})
		console.log("object ", objectt.name)
	}
	//console.log("form ", this.state.name)
	//if(document.getElementById('name')!=='')
	//afterSubmission(event) {
	//event.preventDefault();

//}
	render() {

			const {data, addBuild} = this.props;
		//event.preventDefault();

			return (

        <form id = "createform" >
					<label htmlFor= "name">Building Name</label>
					<input type = "text" name = "name" id="name" />
					<label htmlFor= "baddress">Building Address</label>
					<input type = "text" name = "address" id= "address" />
					<label htmlFor= "bcode">Code</label>
					<input type = "text" name = "code" id = "code" />
					<label htmlFor= "blongtitude">Longtitude</label>
					<input type = "text" name = "longitude" id = "longitude"/>
					<label htmlFor= "blatitude">Latitude</label>
					<input type = "text" name = "latitude" id = "latitude" />

					<Button variant="primary" button type='button' onClick={()=>{this.check(); this.clearForm();}}> <img src={require('./plus.svg')}></img>Add a Building</Button>


				</form>


			)



	}
}
export default AddBuilding;
