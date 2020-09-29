import React,{useEffect} from 'react';
import './App.css';
import {DummyFunc} from './redux/actioncreator';
import {fetchUser} from './redux/reducer'
import {connect} from 'react-redux';
import Title from './components/Title';

function App({loading, users, err, fetchUser}) {
  useEffect(() => {
    fetchUser();
  }, [fetchUser])
  return (
    <div className="App">
      <h1>From APP</h1>
      <button className='btn' onClick={fetchUser}>Click</button>
        {
          loading? <p>Loading...</p> : users.length !== 0 && !err ? (users.map(user => <Title key={user.id} user={user}/>)) : <p>{err}</p>
        }
    </div>
  );
}
const mapStateToProps = state =>{
  return {
    loading : state.loading,
    users : state.users,
    err : state.err,
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    DummyFunc : ()=> dispatch(DummyFunc()),
    fetchUser : () => dispatch(fetchUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
