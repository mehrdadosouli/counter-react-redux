import { increase } from '../redux/counter/counterAction.js'
import { connect } from 'react-redux'
const Counter=(props)=> {
  return (
    <div>
        <p>{props.counter}</p>
        <button onClick={props.increase}>click</button>
    </div>
  )
}

const mapStateToProps = state =>{
    return {
        counter:state.counter
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        increase:()=>dispatch(increase())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

