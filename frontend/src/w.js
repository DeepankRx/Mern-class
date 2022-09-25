import React from 'react';

const AddToDo = () => {
  return (
    <div className="card mx-3 my-3">
      <div className="card-body">
        <h5 className="card-title">Add ToDo</h5>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToDo;
