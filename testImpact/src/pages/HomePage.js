import React from 'react'
import StudentContainer from '../containers/container'
class HomePage extends React.Component{
	render(){
		return(
			<div className="HomePage">
				<h1>Trang chu</h1>
				<StudentContainer/>
			</div>
		);
	}
}

export default HomePage