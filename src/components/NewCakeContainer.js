// import React,{useState} from 'react'
// import {connect} from 'react-redux'
// import {buyCake} from '../redux'



// const NewCakeContainer=(props)=>{

// 	const [number,setNumber]=useState(1)

// 	return (
// 		<div>

// 			<h2 className='ui heading'> Number Of cakes {props.numOfCakes}</h2>
// 			<input type='text' value={number} onChange={(e)=>setNumber(e.target.value)}
// 			<button onClick={()=>props.buyCake(number)} className='ui button blue'>Buy {number} Cake</button>


// 		</div>
// 		)
// }


// const mapStateToProps=(state)=>{
// 	return {
// 		numOfCakes:state.cake.numOfcakes
// 	}
// }

// const mapDispatchToProps=dipatch=>{
// 	return {
// 		buyCake:(number)=>dispatch(buyCake(number))
// 	}
// }




// export default connect(mapStateToProps,mapDispatchToProps)(NewContainer);