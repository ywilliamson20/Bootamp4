import React from 'react';
import Card from "react-bootstrap/Card";

class ViewBuilding extends React.Component {
	render() {
			const {data, selectedBuilding} = this.props;
			//console.log("this id ", selectedBuilding[0])
			console.log("this is length ",selectedBuilding.length)
			const buildlist = selectedBuilding.map(id=> {
				const {name, code, coordinates, address} = data[id-1]

				//console.log(data.findIndex(item => item.id === selectedBuilding[selectedBuilding.length-1]))
				return(
					<div>

							 <Card bg="primary" text="white" style={{ width: '18rem' }}>
								 <Card.Body>
									<li key = {id}>
									<li>Name: {name}	</li>
									<li> Code: {code}</li>
									<li >Address: {address}</li>
									<li >Coordinates: {coordinates&&
											<ul>
													<li >{coordinates.latitude}</li>
													<li>{coordinates.longitude}</li>
											</ul>
											}</li>
										</li>
									</Card.Body>
								</Card>



				</div>

				)
			})
		return (
			<div className= "selectedBuilding">
				<p>
					{' '}
					<i>Click on a name to view more information</i>

						{buildlist}

				</p>
			</div>
		);
	}
}
export default ViewBuilding;
