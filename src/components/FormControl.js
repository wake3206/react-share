import React from 'react';

const FormControl = () => {
    return (
        <div className="form-inline">
            <div className="form-group col-md-10">
                <input type="text" className="form-control add-todo" placeholder="Add todo..." />
            </div>
            <button className="btn btn-primary ">ADD</button>
        </div>
    );
};

export default FormControl;