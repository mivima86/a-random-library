import Input from './input';

export default {
    tittle: "Text input",
    component: Input,
    args: {
        label: "Este va a ser el texto original",
        color:"white"
    }
};

const InputTemplate = args => <Input {...args}/>;

const Standard = InputTemplate.bind({});

const InputNumber = InputTemplate.bind({});
InputNumber.args = {label: "Add a number", color: 'blue'};

export {Standard, InputNumber};