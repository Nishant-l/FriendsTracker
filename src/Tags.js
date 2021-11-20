import style from './tags.module.css';
import PropTypes from 'prop-types';

const Tags = ({text}) => {
    return(
        <div className={style.tag}>
            {text}
        </div>
    )
}

Tags.propTypes = {
    text: PropTypes.string.isRequired
}

export {Tags}