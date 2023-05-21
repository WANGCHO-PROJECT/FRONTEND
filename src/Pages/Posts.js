import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Post() {
  const [input, setInput] = useState({
    title: '',
    content: '',
    image: '',
  });
  const [file, setFile] = useState('');
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('title', input.title);
    formData.append('content', input.content);
    formData.append('image', input.image);

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };

    axios
      .post('http://localhost:3001/api/posts', formData, config)
      .then((res) => {
        console.log(formData);
      });

    setInput({ title: '', content: '' });
    navigate('/questions');
  };

  const onChangePreView = (e) => {
    const fileBlob = URL.createObjectURL(e.target.files[0]);
    setInput((prev) => ({ ...prev, image: e.target.files[0] }));
    setFile(fileBlob);
  };

  return (
    <>
      <div>
        <form enctype='multipart/form-data' onSubmit={onSubmitHandler}>
          <input
            type='text'
            onChange={onChangeHandler}
            name='title'
            value={input.title}
            placeholder='제목을 작성하세요..'
          />
          <input
            type='text'
            onChange={onChangeHandler}
            name='content'
            value={input.content}
            placeholder='본문을 작성하세요..'
          />
          <input
            type='file'
            id='file'
            accept='image/*'
            onChange={onChangePreView}
          />
          <button>저장</button>
          <img src={file} alt={file} />
        </form>
      </div>
    </>
  );
}

export default Post;