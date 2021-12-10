import cx from 'classnames';
import React, { useEffect, useRef, useState } from "react";

const Switch = (props) => {
    const buttonRef = useRef("accept-button"),
    [accepted, setAccepted] = useState(false);

    let bg,
    onClick = event => {
        bg.style.width = `${event.target.parentElement.offsetWidth}px`;
        bg.style.left = `${event.target.parentElement.offsetLeft}px`;

        [...event.target.parentElement.parentElement.children].forEach(element => {
            if(element.nodeName.toLowerCase() == 'label') {
                element.className = '';
            }
        });
        event.target.parentElement.className = 'active';
    },

    options = props.hasOwnProperty('options') && Array.isArray(props['options']) ? props['options'] : [
        { label: 'Provider', value: 'provider' },
        { label: 'Freelancer', value: 'freelancer', selected: true },
    ];

    useEffect(() => {
        if (!accepted) {
          setTimeout(() => {
            if (buttonRef.current instanceof Element) {
              setAccepted(true);
              buttonRef.current.dispatchEvent(new Event('click', { bubbles: true }));
            }
          }, 0);
        }
    }, [accepted]);

    return (
        <div className="switch-wrapper">
            { options.map((opton, i) => (
                <label key={i}>
                    <input type="radio" name="radio" ref={i == 0 ? buttonRef : null} value={ opton.value } onClick={onClick} />
                    <span>{ opton.label }</span>
                </label>
            ))}
            <span ref={c => {bg = c}} className="bg"></span>
        </div>
    )
}

export default Switch
