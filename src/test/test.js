import React, { Component } from 'react';
import TestDialog from './WeUI/TestDialog';
import TestActionSheet from './WeUI/TestActionSheet';
import TestProgress from './WeUI/TestProgress';
import TestSlider from './WeUI/TestSlider';
import TestSwitch from './WeUI/TestSwitch';

export default class Test extends Component {
    render() {
        return (
            <div>
                <h3>渲染ActionSheet请单独打开</h3>
                <TestDialog />
                {/* <TestActionSheet /> */}
                <TestProgress />
                <TestSlider/>
                <TestSwitch />
            </div>
        )
    }
}