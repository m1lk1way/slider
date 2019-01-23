/* eslint react/no-multi-comp: 0, no-console: 0 */
import 'rc-slider/assets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';

const Handle = Slider.Handle;
const Range = Slider.Range;

const style = { width: 800, margin: "0 auto" };

const handleWrapperStyles = {
  position: "absolute",
  width: 22,
  top: 4,
  marginLeft: -11,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  outline: "none",
  cursor: "pointer",
  WebkitTouchCallout: "none",
  WebkitUserSelect: "none",
  KhtmlUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  OUserSelect: "none",
  userSelect: "none",
};

const handleStyles = {
  height: 22,
  width: 22,
  borderRadius: 3,
  boxSizing: "border-box",
  border: "1px solid rgba(17,34,51,.15)",
  display: "inline-block",
  cursor: "pointer",
  boxShadow: "0px 0px 5px 0px rgba(17,34,51,.33)",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  pointerEvents: "none",
};

const handleValueStyle = {
  top: "100%",
  textAlign: "center",
  fontWeight: 600,
  fontSize: 15,
  pointerEvents: "none",
};

export const CustomHandle = ({value, index, ...restProps}) => (
  <Handle
    {...restProps} 
    key={index}
    value={value}
    style={handleWrapperStyles}
    className={undefined}
    untabbable={true}
    disabledKeyboard={true}
  >
    <React.Fragment>
      <div style={handleStyles}/>
      <div style={handleValueStyle}>{value}%</div>
    </React.Fragment>
  </Handle>
)

class PureRenderRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {Id: 1, Color: "lightgreen", Value: 0},
        {Id: 2, Color: "#8af046", Value: 20},
        {Id: 3, Color: "green", Value: 50},
        {Id: 4, Color: "#f5d711", Value: 80},
        {Id: 5, Color: "red", Value: 100},
      ],
    };
  }
  handleChange = (values) => {
    const currentValues = [...this.state.items];
    const items = currentValues.map((v, i) => ({...v, Value: values[i]}));
    this.setState({items});
  }
  processItems = () => {
    return this.state.items.map(i => i.Value);
  }
  generateTracks = () => {
    return this.state.items.map( (item, index, items) => {
      const baseStyles = {
        borderRadius: 0,
        height: 20,
      };

      if (index === 0) {
        baseStyles.borderRadius = "3px 0 0 3px";
      }
      if (index === items.length - 1) {
        baseStyles.borderRadius = "3px 0 0 3px";
      }

      return { ...baseStyles, backgroundColor: item.Color};
    }); 
  }

  render() {
    return (
      <Range
        allowCross={false}
        step={5}
        value={this.processItems()}
        max={105}
        trackStyle={this.generateTracks()}
        handle={CustomHandle}
        railStyle={{ height: 20, backgroundColor: this.state.items[this.state.items.length -1].Color }}
        pushable={5}
        onChange={this.handleChange}
        isTrackDisabled={true}
        //onAfterChange={this.onChange2}
        disabledHandles={[0, 100]}
      />
    );
  }
}

ReactDOM.render(
  <div>
    <div style={style}>
      <PureRenderRange />
    </div>
  </div>
  , document.getElementById('__react-content'));
