import { connect } from 'react-redux';
import { plus_count } from '../../redux/actions/actions';


function Test(props) {
  const { counter, addCount } = props;
  return (
    <div>
      <h1>{ counter }</h1>
      <input type='button' value='+1' onClick={addCount}/>
    </div>
  )
}

function mapStateToProps(state) {
    return { counter: state.appState.counter.count, };
}

function mapDispatchToState(dispatch) {
    return {
        addCount: () => { dispatch(plus_count()) }
    };
}

export const ReduxTest =  connect(mapStateToProps, mapDispatchToState)(Test);