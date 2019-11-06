import React from 'react';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'



class Search extends React.Component {
	filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.myValue.value
		this.props.filterUpdate(val)
		console.log(val)
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
			//console.log('filter', this.state.filterText)
		return (
			<header>
	      <Form>
					<InputGroup size="lg">
						<Form.Control

	          type = "text"
	          ref={(value)=>this.myValue=value}
	          placeholder = "Search"
	          onChange={this.filterUpdate.bind(this)}
	          />

            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><img src={require('./search.svg')}></img></InputGroup.Text>
            </InputGroup.Prepend>
					</InputGroup>


	      </Form>
	    </header>

		);
	}
}
export default Search;
