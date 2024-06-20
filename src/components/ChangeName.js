import React, { useState } from "react";

const ChangeName = () => {
    const [name, setName] = useState("Yusuf Ali");
    const [showForm, setShowForm] = useState(false);

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="App">
            <h1>Hello, my name is: {name}</h1>
            <button className="btn btn-primary p-1" onClick={toggleForm}>
                {"Change Name"}
            </button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <label className="mb-2 mt-2" htmlFor="newName">
                        Enter Name:
                    </label>
                    <input
                        type="text"
                        id="newName"
                        name="newName"
                        onChange={handleChangeName}
                    />
                    <button type="submit" className="btn btn-primary p-1 mt-2">
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default ChangeName;
