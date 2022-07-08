import PropTypes from 'prop-types';

const styles = {
    backgroundColor: "",
    color: ""
};

const Input = ({label, color})=>{
    return (
    <input type="text" 
    placeholder={label} 
    style={{...styles, backgroundColor: color}}/>
    );
};
Input.propTypes= {
    label: PropTypes.string,
    color: PropTypes.string
};

/*Input.defaultProps = {
    label: 'Hola',
    color:'white'
}*/

export default Input;