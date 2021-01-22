import React from 'react';
import './App.css';


//object that holds the data for each pixel
type PIXEL_OBJECT = {
  id: number,
  color: string,
  isClicked: boolean,
  position: {
    x: number,
    y: number,
  }
}

type PICTURE_ARRAY = {
  PIXEL_OBJECT: PIXEL_OBJECT[]
}
type Props = {}
type State = {
  PICTURE_ARRAY: PICTURE_ARRAY[]
}


export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      PICTURE_ARRAY: [],
    }
  }

  //initialize pixel board
  init() {

    //size of image 10 * 10 = 100 pixels
    const PICTURE_SIZE = 10

    let initArr: PICTURE_ARRAY[] = [];

    //push some initial data to our pixel objects
    for (let i = 0; i < PICTURE_SIZE; i++) {
      initArr.push({
        PIXEL_OBJECT: [{
          id: 1 + Math.random(),
          color: " ",
          isClicked: false,
          position: {
            x: 0,
            y: i,
          }
        }]
      })
    }

    for (let i = 0; i < PICTURE_SIZE; i++) {
      for (let j = 1; j < PICTURE_SIZE; j++) {
        if (i == 0) { continue }
        initArr[i].PIXEL_OBJECT.push({
          id: 1 + Math.random(),
          color: " ",
          isClicked: false,
          position: {
            x: j,
            y: i,
          },
        }
        )
      }
    }

    this.setState({ PICTURE_ARRAY: initArr })

  }

  //when main component mounts, the initial array is populized
  componentDidMount() {
    this.init();
  }

  renderTable() {
    return (
      <div>
        {
          this.state.PICTURE_ARRAY.map((item, index) => {
            return (
              <td>
                {item.PIXEL_OBJECT[index].id}

              </td>
            );
          })}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.renderTable}
      </div>
    )
  }
}

