import "./App.css";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { IconButton } from '@material-ui/core';

export default function App() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState({});
  const onSubmit = (data) => {
    const value = {
      version: data.version,
      notes: [
        { role: "staff", body: data.staffKo },
        { role: "publisher", body: data.publisherKo },
        { role: "advertiser", body: data.advertiserKo },
      ],
    };
    setResult(value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Version" name="version" inputRef={register} />
        <TextField
          multiline={true}
          label="스태프 한글"
          name="staffKo"
          inputRef={register}
        />
        <TextField
          multiline={true}
          label="퍼블리셔 한글"
          name="publisherKo"
          inputRef={register}
        />
        <TextField
          multiline={true}
          label="광고주 한글"
          name="advertiserKo"
          inputRef={register}
        />
        <Button type="submit" variant="contained" color="primary">
          생성
        </Button>
      </form>
      <div className="result">
        {Boolean(Object.keys(result).length) && JSON.stringify(result)}
        <IconButton aria-label="FileCopy" />
      </div>
    </div>
  );
}
