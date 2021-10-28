import React from 'react'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="save-button">save</button>
                { props.children }           
            </div>
        </div>
    ): ""
}

export default Popup;