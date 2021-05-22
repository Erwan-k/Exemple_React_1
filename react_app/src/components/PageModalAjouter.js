import React from 'react';
import axios from 'axios';

import {Button,Modal,Form,Row,Col} from 'react-bootstrap'

function Modifier_la_valeur(user_,nom_,fonction_pour_re_render){
	axios.post('http://127.0.0.1:1234/user1', {user:user_,nom:nom_})
	.then(response => {
		if(response.status === 200){
			if (response.data.retour === "ok"){
				fonction_pour_re_render()
			}
		}
	})
	.catch(error => {console.log(error)})
}

class MyVerticallyCenteredModal extends React.Component{
	constructor(){
		super()
		this.state = {
			utilisateur:"",
			nom:""
		}
	}

	changeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	submitHandler = (e) => {
		e.preventDefault()
		Modifier_la_valeur(this.state.utilisateur,this.state.nom,this.props.fonction_pour_re_render)
		this.props.onHide()
	}

	render(){
	const {utilisateur,nom} = this.state
		return(
		<Modal
			{...this.props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
					Ajouter un utilisateur
				</Modal.Title>
			</Modal.Header> <br />

			<Modal.Body>
				<Form>
					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="4">
							Utilisateur
						</Form.Label>
						<Col sm="8">
							<Form.Control type="text" placeholder="Utilisateur" name="utilisateur" value={utilisateur} onChange={this.changeHandler} />
						</Col>
					</Form.Group><br />
					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="4">
							Nom
						</Form.Label>
						<Col sm="8">
							<Form.Control type="text" placeholder="Nom" name="nom" value={nom} onChange={this.changeHandler} />
						</Col>
					</Form.Group>
				</Form> <br />
			</Modal.Body>
			
			<Modal.Footer>
				<Button onClick={this.submitHandler}>Ajouter</Button>
			</Modal.Footer>
		</Modal>
		)
	}
}

function PageModalAjouter(props){
	const [modalShow, setModalShow] = React.useState(false);
	return(
		<div class="aaaae">
			<>
				<Button variant="outline-dark" onClick={() => setModalShow(true)}> Ajouter un utilisateur </Button>

				<MyVerticallyCenteredModal
					show={modalShow}
					infos={props.infos}
					fonction_pour_re_render={props.fonction_pour_re_render}
					onHide={() => setModalShow(false)}
				/>
			</>
		</div>
	)
}

export default PageModalAjouter;














