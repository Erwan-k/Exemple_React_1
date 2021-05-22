import React from 'react';
import axios from 'axios';

import ComponentElement from "./ComponentElement.js";
import PageModalAjouter from "./PageModalAjouter.js";

class PagePrincipale extends React.Component {
	constructor(){
		super()
		this.state = {
			elements:[]
		}
		this.fonction_pour_re_render = this.fonction_pour_re_render.bind(this)
	}

	componentDidMount(){
		axios.post('http://127.0.0.1:1234/user2', {"nom":"rien"})
			.then(response => {
				if(response.status === 200){
					if (response.data.retour ==="ok"){
						this.setState({"elements":response.data.valeurs})
					}
				}
			}).catch(error => {console.log(error)})
	}

	fonction_pour_re_render(){
		axios.post('http://127.0.0.1:1234/user2', {"nom":"rien"})
			.then(response => {
				if(response.status === 200){
					if (response.data.retour ==="ok"){
						this.setState({"elements":response.data.valeurs})
					}
				}
			}).catch(error => {console.log(error)})
		this.forceUpdate()
	}

	render() {

		const elems = this.state.elements
			.map((elem, i) =>  <ComponentElement infos={elem} infos2={this.state} fonction_pour_re_render={this.fonction_pour_re_render} />);

		return(
			<div className="App">
				<div class="aaaaa">
					<div class="aaaab">
						<div class="aaaac">
							{elems}
						</div>
						<div class="aaaad">
							<PageModalAjouter infos={this.props.infos} fonction_pour_re_render={this.fonction_pour_re_render} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PagePrincipale;




