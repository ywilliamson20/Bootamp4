import React, { Component }  from 'react';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

class BuildingList extends React.Component {



	render() {

		const {data, filterText,selectedUpdate, addBuild} = this.props;

		//data.concat(newbuild)
		const buildingList = data

			.filter(building =>{
			      //remove names that don't match
						if(building.code.toLowerCase().indexOf(filterText.toLowerCase())>=0){
			      	return building.code.toLowerCase().indexOf(filterText.toLowerCase())>=0;
					}
						else if(building.name.toLowerCase().indexOf(filterText.toLowerCase())>=0)
					{
							return building.name.toLowerCase().indexOf(filterText.toLowerCase())>=0
					}


			    })

		.map(directory => {
			return (
							<tr key={directory.id}
								onClick={()=> selectedUpdate(directory.id)}

							>
							     
									 <ListGroup>
										 <ListGroup.Item variant="info"><td>{directory.code}{' '}
										 {directory.name}</td> </ListGroup.Item>

									 </ListGroup>

							</tr>
			)
		});

		return <div>{buildingList}</div>;

	}
}
export default BuildingList;
