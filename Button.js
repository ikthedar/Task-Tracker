import PropTypes from 'prop-types'


/* Created some props and passed it to the Button funtion.
*/

const Button = ({ color, text, onClick }) => {
    return <button 
    onClick={onClick} 
    style = {{backgroundColor: color}} 
    className='btn'
    >
        {text} 
    </button>
}

Button.defaultProps = {
    color: 'steelblue'
}

/* Specified the prop types for each of the props.
*/

Button.protoTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
