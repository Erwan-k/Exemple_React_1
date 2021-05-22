import React from 'react';
import axios from 'axios';

import {Button, Card} from 'react-bootstrap'

import PageModalModifier from "./PageModalModifier.js";

class ComponentElement extends React.Component {
	constructor(){
		super()
		this.supprimerHandler = this.supprimerHandler.bind(this)
	}

	supprimerHandler(){
		axios.post('http://127.0.0.1:1234/user3', {user:this.props.infos.user})
		.then(response => {
			if(response.status === 200){
				if (response.data.retour === "ok"){
					this.props.fonction_pour_re_render()
				}
			}
		})
		.catch(error => {console.log(error)})
	}

	render() {
	return(
		<div class="aaaaf">
			<Card style={{ width: '18rem' }}>
				<Card.Title> Nom : {this.props.infos.nom} </Card.Title> <br />
				<PageModalModifier infos={this.props.infos} infos2={this.props.infos2} fonction_pour_re_render={this.props.fonction_pour_re_render} /> <br />
				<Button onClick={this.supprimerHandler}> Supprimer </Button> <br />
			</Card>
		</div>
		)
	}
}

export default ComponentElement;