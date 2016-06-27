import Panel from '../Panel/Panel.react';
import SwitchControl from '../SwitchControl/SwitchControl.react';
import CheckBoxControl from '../CheckBoxControl/CheckBoxControl.react';
import SimpleButton from '../SimpleButton/SimpleButton.react';

class SpreadConfig extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Spread', icon: '#', link: '/console/spread'},
            {names: 'Config', icon: '#', link: '/console/spread/config'}
        ];

        this.checkboxes = [
            {names: 'filter', text: '自然科学', value: '0'},
            {names: 'filter', text: '计算机', value: '1'},
            {names: 'filter', text: '文学', value: '2'},
            {names: 'filter', text: '传播学', value: '3'}
        ]
    }

    renderForm() {
        return (
            <div className="panel-body">
                <form role="form" className="form-horizontal">
                    <SwitchControl
                        labelName="推广开关"
                        names="open"
                        value="0" />
                    <CheckBoxControl
                        labelName="过滤类别"
                        checkboxes={this.checkboxes} />
                    <div className="form-group text-right">
                        <SimpleButton
                            type="submit"
                            class="success"
                            text="提交" />
                        <SimpleButton
                            type="reset"
                            class="default"
                            text="重置" />
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return (
            <Panel
                title="推广设置"
                description="过滤或关闭推广内容"
                navs={this.navs}
                childComponent={this.renderForm()} />
        )
    }
}

export default SpreadConfig;