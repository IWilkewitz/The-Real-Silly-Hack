import React from 'react';
import './App.css';


type Props = {
    data: any,
    width: number,
}
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
                        //using <a> as an arbitrary tags for temporary formatting.
                        //it works so it will stay for now.
                        <a>
                            {((index % this.props.width == 0) && (index != 0)) ? <br /> : null}
                                    ({item.PIXEL_OBJECT[0].position.x}, {item.PIXEL_OBJECT[0].position.y})
                        </a>
                    )
                })
                }

            </div >
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

