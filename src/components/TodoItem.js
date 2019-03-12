import React from 'react';

const TodoItem = () => {
    return (
        <li className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input type="checkbox" value="" />Take out the trash</label>
            </div>
        </li>
    );
};

export default TodoItem;