import React, { Component } from 'react';

class studentComponent extends Component {
	state={
		activePage: 1, 
		searchTxt:'',
		addTxt:'',
		updateTxt:'',
		studentId: '',
	}
	render() {
		let listData = []
		let listNum = []
		let listBtn = []
		for(let i=1;i<=this.props.totalPage;i++) {
			listNum.push(i)
		}
		listBtn=listNum.map((value, index)=>{
			// console.log(this.props.totalPage,'ll');
			return(
				<button 
				onClick={()=>{
					this.setState({activePage: value})
					this.props.getStudent({activePage: value, searchTxt: this.props.searchTxt})
				}}
				style={(this.props.activePage===value) ? {backgroundColor: 'lightgreen'}: {backgroundColor: null}}
				key={index}
				>
					{value}
				</button>
			)
		})
		console.log(this.props.searchTxt,'ddd');
		if(this.props.student){
			listData = this.props.student.map((value, index) =>{
				return (
					<tr key={index}>
						<th>{index + 1}</th>
						<th>{value.name}</th>
						<th>
							<button
							onClick={() => {this.props.deleteStudent({studentId: value._id,searchTxt: this.props.searchTxt, activePage: this.props.activePage})}}
							>DELETE</button>
						</th>
						<th>
							<button
							onClick={() => {this.setState({updateTxt: value.name, studentId: value._id})}}
							>CHOOSE</button>
						</th>
					</tr>
				)
			})
		}
		return (
			<div>
				
				<div>
					<input
					onChange={(e)=>{
						this.setState({addTxt: e.target.value})
					}}
					value={this.state.addTxt}
					></input>
					<button
					onClick={() => {
						this.props.addStudent({addTxt: this.state.addTxt,searchTxt: this.props.searchTxt,activePage: this.props.activePage})
					}}
					>ADD</button>
				</div>
				<div>
					<input
					onChange={(e)=>{
						this.setState({updateTxt: e.target.value})
					}}
					value={this.state.updateTxt}
					></input>
					<button
					onClick={() => {
						this.props.updateStudent({updateTxt: this.state.updateTxt, studentId: this.state.studentId, searchTxt: this.props.searchTxt,activePage: this.props.activePage})
					}}
					>UPDATE</button>
				</div>
				<div>
					<input
					onChange={(e)=>{
						this.setState({searchTxt: e.target.value})
					}}
					value={this.state.searchTxt}

					></input>
					<button
					onClick={() => {
							this.props.getStudent({searchTxt: this.state.searchTxt, activePage: this.state.activePage})
					}}
					>SEARCH</button>
				</div>
				<div>
					<button
					onClick={() => {
						
						if(this.props.totalPage===1){
							if(this.state.updateTxt){
							this.props.getStudent({searchTxt: this.props.searchTxt, activePage: 1})

							}else{

								this.props.getStudent({searchTxt: '', activePage: 1})
							}

						}else{
							this.props.getStudent({searchTxt: this.props.searchTxt, activePage: 1})
						}
					}} 
					style={{display: this.props.searchTxt?'inline-block':'none'}}
   
					>BACK</button>
					
				</div>
				<table>
					<tbody>
						{listData}
					</tbody>
				</table>
				{listBtn}
			</div>
		);
	}
}

export default studentComponent;