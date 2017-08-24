import React from 'react';
import MotionMenu from '../../src';

export default () => (
  <MotionMenu
    type="arc"
    margin={-120}
    y={0}
    bumpy
    x={0}
    openSpeed={60}
    wing={false}
    reverse={false}
    onOpen={() => console.log('onOpen')}
    onClose={() => console.log('onClose')}
  >
    <div className="circle"><i className="fa fa-bars" /></div>
    <div className="circle"><i className="fa fa-cogs" /></div>
    <div className="circle"><i className="fa fa-cloud" /></div>
    <div className="circle"><i className="fa fa-home" /></div>
    <div className="circle"><i className="fa fa-flash" /></div>
    <div className="circle"><i className="fa fa-heart" /></div>
    <div className="circle"><i className="fa fa-globe" /></div>
    <div className="circle"><i className="fa fa-cogs" /></div>
  </MotionMenu>
);
