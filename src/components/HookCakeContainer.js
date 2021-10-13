import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyCake} from '../redux'


const HookCakeContainer=()=>{

	const numOfCakes=useSelector((state)=>state.cake.numOfCakes)
	const dispatch=useDispatch()
	return (
		<div>
		<h2>Num Of Cakes - {numOfCakes} </h2>
		<button onClick={()=>dispatch(buyCake())} className='ui button green' >Buy Cake</button>


		</div>
		)
}

export default HookCakeContainer;