"use client"

import React, { useState } from 'react';
import Card from '../components/lib/Card';
import Input from '../components/lib/Input';
import Button from '../components/lib/Button';
import Container from '../components/lib/Container';
import InputButtonGroup from '../components/lib/InputButtonGroup';
import Alert from '../components/lib/Alert';
import SuccessView from '../components/SuccessView';
import loginImage from "../public/images/login-image.jpg";

export default function HomePage() {
  
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  
  const onChangeHandler = (event: any) => {
    setMessage("");
    setValue(event.target.value);
  };

  const [isVerified, setIsVerified] = useState(false);
  const Login = () => {
    if (value.toLowerCase() === "cr4eae") { 
      setIsVerified(true);
    } else {
      setMessage("Nice try 😂");
    }
  }

  let content;
  if (isVerified) {
    content = <SuccessView />;
  } else {
    content = 
    <Container>
        <Card images={[loginImage]} maxWidth='400px'>
          <p  className='mt-0'>
            <strong>Hallo Cecile, hallo Reini</strong><br />
            Den Code findet ihr in der Boulderwand.
          </p>
          <InputButtonGroup className='mb-10'>
          <Input
            value={value}
            onChange={onChangeHandler}
            onEnterPressed={Login}
            placeholder="Bitte gib den Code ein" />
            <Button onClick={Login}>Weiter</Button>
          </InputButtonGroup>
          {message !== "" && <Alert>{message}</Alert>}
        </Card>
      </Container>;
  }

  return (
    <>
      {content}
    </>
  );
}
