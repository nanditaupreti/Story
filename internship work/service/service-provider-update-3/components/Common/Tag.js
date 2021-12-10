import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tag.module.scss';
import cx from 'classnames';
import Icon from '@material-ui/core/Icon';

const Tag = ({item, onChange, className=""}) => {
    const [isSelected, changeSelection] = useState(item?.selected),
    click = () => {
        item.selected = !isSelected;
        changeSelection(item.selected);
        onChange && onChange(item);
    }

    return (
        <div className={ cx(styles['tag'], styles[className], isSelected ? styles['selected'] : '')} onClick={ click }>
            { item?.icon ? <span className={ cx(styles['icon'], "mr-8") }><Icon>{item?.icon}</Icon></span> : '' }
            { item?.name }
        </div>
    )
}

Tag.propTypes = {
    item: {
        id: PropTypes.id,
        name: PropTypes.string,
        icon: PropTypes.string,
        selected: PropTypes.bool
    },
    className: PropTypes.string,
    onChange: PropTypes.func,
}

export default Tag
