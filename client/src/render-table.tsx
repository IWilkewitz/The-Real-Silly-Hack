import React from 'react';
import './App.css';


type Props = { data: any }
type State = {}


export default class RenderTable extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    renderTable() {

        return (
            <div>

                {this.props.data.map((item: any, index: any) => {
                    return (
                        <div>
                            <table>
                                <tr>({item.PIXEL_OBJECT[0].position.x},{item.PIXEL_OBJECT[0].position.y})</tr>


                            </table>
                        </div>
                    )
                })}

            </div>
        )
    }

    render() {
        return (
            <div className="App">
                {this.renderTable()}
            </div>
        )
    }
}

