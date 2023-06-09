import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


function Post() {
  const [input, setInput] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", JSON.stringify(input.title));
    formData.append("content", JSON.stringify(input.content));
    formData.append("image", input.image);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios.post("http://localhost:3001/api/posts", formData, config).then((res) => {
      console.log(formData);
    });

    setInput({ title: "", content: "", image: null });
  };

  const onChangePreview = (e) => {
    const file = e.target.files[0];
    setInput((prev) => ({ ...prev, image: file }));
    setFile(URL.createObjectURL(file));
  };

  return (
    <Container>
      <h1>게시글 작성</h1>
      <Form onSubmit={onSubmitHandler}>
        <FormGroup>
          <Label htmlFor="title">제목</Label>
          <InputText
            type="text"
            onChange={onChangeHandler}
            name="title"
            value={input.title}
            placeholder="제목을 작성해주세요."
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="content">본문</Label>
          <Textarea
            type="text"
            onChange={onChangeHandler}
            name="content"
            value={input.content}
            placeholder="거지의 일상을 적어주세요."
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="file">이미지 첨부</Label>
          <InputFile
            type="file"
            id="file"
            accept="image/*"
            onChange={onChangePreview}
          />
        </FormGroup>
        <Button type="submit">저장</Button>
        {file && <PreviewImage src={file} alt={file} />}
        
      </Form>
    </Container>
  );
}

export default Post;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-sizing: border-box;
  text-align: center;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const InputText = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const InputFile = styled.input`
  margin-top: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  margin-top: 20px;
`;