import React, { useState } from 'react';

const AddToDo = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [list, setList] = useState([]);
  const addToList = () => {
    if (title.length < 3 || desc.length < 3) {
      alert('Title and desc should be more than 3');
      return;
    }
    const newInput = {
      title: title,
      desc: desc,
      id: Math.floor(Math.random() * 1000),
    };

    setList([...list, newInput]);
    setTitle('');
    setDesc('');
    console.log(list);
  };
  const deleteItem = (id) => {
    const updateList = list.filter((item) => {
      return item.id !== id;
    });
    setList(updateList);
  };
  return (
    <div>
      <div>
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>Description</label>
        <input
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button onClick={() => addToList()}>Add ToDo</button>
      </div>
      <div>
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                {item.title} {item.desc}
                <button>Edit</button>
                <button
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AddToDo;
