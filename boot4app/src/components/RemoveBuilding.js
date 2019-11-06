import React from 'react';
import Button from 'react-bootstrap/Button';

class RemoveBuilding extends React.Component {

		//Here you will need to update the value of the filter with the value from the textbox


	render() {
		const {data,onDelete,selectedBuilding, handleDelete,selectedUpdate}=this.props;
		//const deletebuild = data.filter(build=>{
			//return build.id !== selectedBuilding.id
		//})
			//return <div>{deletebuild}</div>;
			const please= data.findIndex(item => item.id === selectedBuilding[0])
			console.log("real ", data.findIndex(item => item.id === selectedBuilding[0]))
			//const buildlist = selectedBuilding.map(id=> {
				//const {name, code, coordinates, address} = data[id-1]
				//const building =selectedBuilding.map (build=>{
					//const delit = build
					return (
						<Button variant="secondary"  size="lg" onClick={()=>handleDelete(please)}>	<img src={require('./x-circle.svg')}/> 
						Remove Building
						</Button>

					);
				//})

			//	return <div>{buildlist}</div>;



	}
}
export default RemoveBuilding;
