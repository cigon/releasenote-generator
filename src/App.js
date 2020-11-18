import "./App.css";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';

export default function App() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState({});
  const onSubmit = (data) => {
    const value = {
      version: data.version,
      notes: [
        { role: "staff", lang: "ko", body: data.staffKo },
        { role: "staff", lang: "en", body: data.staffEn },
        { role: "publisher", lang: "ko", body: data.publisherKo },
        { role: "publisher", lang: "en", body: data.publisherEn },
        { role: "advertiser", lang: "ko", body: data.advertiserKo },
        { role: "advertiser", lang: "en", body: data.advertiserEn },
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
          label="스태프 영어"
          name="staffEn"
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
          label="퍼블리셔 영어"
          name="publisherEn"
          inputRef={register}
        />
        <TextField
          multiline={true}
          label="광고주 한글"
          name="advertiserKo"
          inputRef={register}
        />
        <TextField
          multiline={true}
          label="광고주 영어"
          name="advertiserEn"
          inputRef={register}
        />
        <Button type="submit" variant="contained" color="primary">
          생성
        </Button>
      </form>
      <div className="result">{Object.keys(result).length ? JSON.stringify(result) : ""}</div>
    </div>
  );
}
