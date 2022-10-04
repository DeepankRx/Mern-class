import React, { useState } from 'react';

const AddToDo = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [list, setList] = useState([]);
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateDesc, setUpdateDesc] = useState('');
  const addToList = () => {
    if (!title || !desc) {
      alert('Title or Description cannot be blank');
    } else {
      const myNewInput = {
        title: title,
        desc: desc,
        id: Math.floor(Math.random() * 1000),
        edit: false,
      };
      setList([...list, myNewInput]);
      setTitle('');
      setDesc('');
    }
  };
  const deleteItem = (id) => {
    const updatedList = list.filter((item) => {
      return item.id !== id;
    });
    setList(updatedList);
  };
  const editItem = (id, edit) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        item.edit = !item.edit;
      }
      return item;
    });
    setList(updatedList);
  };
  const saveItem = (id) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        item.edit = false;
        item.title = updateTitle.length > 0 ? updateTitle : item.title;
        item.desc = updateDesc.length > 0 ? updateDesc : item.desc;
      }
      setUpdateTitle('');
      setUpdateDesc('');
      return item;
    });
    setList(updatedList);
  };
  return (
    <div className="container">
      <div className="row border border-dark rounded mt-5 pb-2">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
            className="form-control "
          />
          <button
            className="btn btn-success mt-3"
            onClick={() => {
              addToList();
            }}
          >
            Add ToDo
          </button>
        </div>
      </div>
      <div
        className="card mt-5"
        style={{
          backgroundColor: '#fff',
        }}
      >
        <div className="card-header">
          <h1 className="text-center">ToDo List</h1>
          {list.map((item) => {
            return (
              <div className="card-body" key={item.id}>
                <hr className="border border-dark" />
                <h5
                  className="card-title"
                  style={{
                    fontSize: '1.5rem',
                  }}
                >
                  Title : <em className="text-danger">{item.title}</em>
                </h5>
                <p className="card-text">
                  Description : <em className="text-danger">{item.desc}</em>
                </p>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    editItem(item.id);
                  }}
                >
                  Edit
                </button>
                {item.edit ? (
                  <div className="mt-3">
                    <input
                      type="text"
                      className="form-control my-2"
                      style={{
                        width: '50%',
                      }}
                      onChange={(e) => {
                        setUpdateTitle(e.target.value);
                      }}
                      value={updateTitle}
                    />
                    <input
                      type="text"
                      className="form-control my-2"
                      style={{
                        width: '50%',
                      }}
                      onChange={(e) => {
                        setUpdateDesc(e.target.value);
                      }}
                      value={updateDesc}
                    />
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        saveItem(item.id);
                      }}
                    >
                      Save
                    </button>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddToDo;