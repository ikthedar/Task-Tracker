import PropTypes from 'prop-types'
import Button from './Button'


const Header = ( {title} ) => {
  const onClick = () => {
    console.log('Click')
  }


    return (
        <header className='header'>
            <h1> {title} </h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}


Header.defaultProps = {
    title: 'Task Tracker',
  }
  
Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

// We can style 3 different ways in React. One is using style sheet, one is in line, one is CSS in JS
// like this down below:
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
