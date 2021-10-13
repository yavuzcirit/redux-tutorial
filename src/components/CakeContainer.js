import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'



const CakeContainer=(props)=>{
	return (
		<div>

			<h2 className='ui heading'> Number Of cakes {props.numOfCakes}</h2>
			<button onClick={props.buyCake} className='ui button blue'>Buy Cake</button>


		</div>
		)
}


const mapStateToProps=(state)=>{
	return {
		numOfCakes:state.numOfcakes
	}
}

const mapDispatchToProps=dipatch=>{
	return {
		buyCake:()=>dispatch(buyCake())
	}
}




export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);