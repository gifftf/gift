import logo from "./logo.svg";
import "./App.css";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CardHeader,
  Button,
} from "@mui/material";
import { congrats } from "./consts";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);

  const onNextBtnClick = () => {
    setIndex(index + 1);
  };

  console.log(index);

  return (
    <div className="App">
      <header className="App-header">
        {congrats.map(({ name, text, color }, i) => (
          <Card
            key={text}
            sx={{ minWidth: 275 }}
            style={index === i ? { display: "block" } : { display: "none" }}
          >
            <CardHeader
              title={name}
              subheader="13/12/2023"
              avatar={
                <Avatar
                  src="/public/ann.jpg" 
                  sx={{ "background-color": color }}
                >{`${name[0]}`}</Avatar>
              }
            ></CardHeader>
            <CardContent>
              <Typography
                variant="body2"
                style={{ fontSize: '18px', fontWeight: '400', fontStyle: 'Regular' }}
              >
                {text}
                <br />
              </Typography>
            </CardContent>
          </Card>
        ))}
        <Button onClick={onNextBtnClick}>Next</Button>
      </header>
    </div>
  );
}

export default App;
