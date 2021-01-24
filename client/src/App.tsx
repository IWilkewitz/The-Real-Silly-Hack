import React from 'react';
import './App.css';
import RenderTable from './render-table'

//object that holds the data for each pixel
type PIXEL_OBJECT = {
  id: number,
  index: number,
  color: string,
  isClicked: boolean,
  position: {
    x: number,
    y: number,
  }
}

type PICTURE_ARRAY = {
  PIXEL_OBJECT: PIXEL_OBJECT[],
}
type Props = {}
type State = {
  PICTURE_ARRAY: PICTURE_ARRAY[]
  height: number;
  width: number;
}


export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      PICTURE_ARRAY: [],
      height: 10,
      width: 10,
    }
  }

  //initialize pixel board
  init() {

    const thisWidth = this.state.width;
    const thisHeight = this.state.width;
    const PICTURE_SIZE = thisWidth * thisHeight;

    let initArr: PICTURE_ARRAY[] = [];

    //push some initial data to our pixel objects
    for (let i = 0, x = 0, y = 0; i < PICTURE_SIZE; i++, x++) {
      if (x % thisWidth == 0 && i > 0) {
        x = 0;
        y += 1;
      }

      initArr.push({
        PIXEL_OBJECT: [{
          index: i,
          id: 1 + Math.random(),
          color: " ",
          isClicked: false,
          position: {
            x: x,
            y: y,
          }
        }]
      })
    }
    this.setState({ PICTURE_ARRAY: initArr })

  }

  //when main component mounts, the initial array is populized
  componentDidMount() {
    this.init();
  }


  render() {
    return (
      <div className="App">
        <RenderTable data={this.state.PICTURE_ARRAY} />
      </div >
    )
  }
}

