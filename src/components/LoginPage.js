import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from './../actions/aut';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="layout__title">Boiler plate</h1>
            <p>Tagline for App</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)