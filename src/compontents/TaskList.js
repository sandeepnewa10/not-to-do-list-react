import React from "react";

export const TaskList = ({ taskList }) => {
  return (
    <div className="col-md-6">
      <div className="wrap__secondtitle">
        <h2>Task List</h2>
      </div>
      <div className="list-item">
        <table className="table">
          <tbody id="task-list">
            {taskList.map((item, i) => {
              return <tr>
                <td>
                  <input type="checkbox" name="" id="" /> 
                </td>
                <td>{item.task}</td>
                <td>{item.hr} hrs</td>
                <td className="text-end">
                  <button className="btn btn-delete" onclick="deletItem(${i})">
                    <i
                      className="fa-solid fa-trash-can faa-shake animated-hover"
                      title="Delete"
                    ></i>
                  </button>
                  <button className="btn btn-go" onclick="markAsNotToDo(${i})">
                    <i
                      className="fa-solid fa-arrow-right faa-horizontal animated-hover"
                      title="Submit"
                    ></i>
                  </button>
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
