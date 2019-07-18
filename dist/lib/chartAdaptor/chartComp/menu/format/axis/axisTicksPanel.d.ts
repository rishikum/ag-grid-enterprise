// ag-grid-enterprise v21.1.0
import { Component } from "ag-grid-community";
import { ChartController } from "../../../chartController";
export declare class AxisTicksPanel extends Component {
    static TEMPLATE: string;
    private axisTicksGroup;
    private axisTicksColorPicker;
    private axisTicksWidthSlider;
    private axisTicksSizeSlider;
    private axisTicksPaddingSlider;
    private chartTranslator;
    private readonly chartController;
    private chart;
    constructor(chartController: ChartController);
    private init;
    private initAxisTicks;
}
