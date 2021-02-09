import React, { Component } from 'react'

export default class Environment extends Component<any, any> {
    render() {
        return (
            <div>
                <div>
                    { `REACT_APP_API_KEY: ${process.env.REACT_APP_API_KEY}` }
                </div>
            </div>
        )
    }
}
