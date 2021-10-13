import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../redux'




const IceCramContainer=(props)=>{
	return (
		<div>

			<h2 className='ui heading'> Number Of iceCreams {props.numOfCakes}</h2>
			<button onClick={props.buyIceCream} className='ui button blue'>Buy iceCream</button>


		</div>
		)
}


const mapStateToProps=(state)=>{
	return {
		numOfIceCream:state.iceCream.numOfIceCream
	}
}

const mapDispatchToProps=dipatch=>{
	return {
		buyIceCream:()=>dispatch(buyIceCream())
	}
}




export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);
