import React, { Component } from 'react';
// CSS
import './normalize.css'
import './skeleton.css'
import './App.css'

class Blocktable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blockchains: []
        }
    }
    async componentDidMount() {
        await fetch('https://fathomless-lake-78876.herokuapp.com/blockchains')
            .then(response => response.json())
            .then(data => {
                this.setState({ blockchains: data })
            })
    }
    render() {
        return (
            <div className="mt-10">
            <h5>Blockchains Table</h5>
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>_id</th>
                            <th>Timestamp</th>
                            {/* <th>HashWithTimestamp</th> */}
                            <th>HashWithoutTimestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.blockchains.map(block =>
                            <tr key={block._id}>
                                <td>{block._id}</td>
                                <td>{block.Timestamp}</td>
                                {/* <td>{block.HashWithTimestamp}</td> */}
                                <td>{block.HashWithoutTimestamp}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Blocktable;