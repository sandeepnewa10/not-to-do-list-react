import React, { useState } from "react";

const initialState = { task: "", hr:""};

export const Form = ({addNewTask}) => {
 
  const [newTask, setNewTask] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    
    setNewTask({
      ...newTask,
      [name]: name === "hr" ? +value : value,
    });
   
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    addNewTask(newTask);
    setNewTask(initialState);
  };
console.log(newTask);

  return (
    <div className="row">
      <div className="col">
        <div className="form-box d-flex justify-content-center">
          <form
             onSubmit={handleOnSubmit}
            className="row row-cols-md-auto g-3 align-items-center"
          >
            <div className="col-md-6">
              <label className="visually-hidden" for="">
                Your Task
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="task"
                  
                  onChange={handleOnChange}
                  value={newTask.task}
                  className="form-control"
                  id=""
                  placeholder="Your task"
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <label
                className="visually-hidden"
                for="inlineFormInputGroupUsername"
              >
                Hours
              </label>
              <div className="input-group">
                <input
                  type="number"
                  name="hr"
                  onChange={handleOnChange}
                  value={newTask.hr}
                  className="form-control"
                  id=""
                  placeholder="Hours"
                  required
                />
              </div>
            </div>

            <div className="col-md-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
