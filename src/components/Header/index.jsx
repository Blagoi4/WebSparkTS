import { useState } from "react";
import Logo from "../../img/logo.svg";
import "./Header.css";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import BgWwaves from "../../img/Vector1.svg";

const Header = () => {
  const [value, setValue] = useState(dayjs("2022-04-17"));
  return (
    <>
      {" "}
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-content">
              <div className="header-logo-wrapper">
                <img src={Logo} alt="" className="header-logo" />
              </div>
              <div className="header-title">
                <div className="header-title__info">
                  <h2>monblanproject</h2>
                  <div className="start">
                    <span>Start on 17-02.2016</span>
                  </div>
                </div>
                <div className="header-subtitle">
                  <span>
                    <span className="bold">870</span> post
                  </span>
                  <span>
                    <span className="bold"> 11,787</span> followers
                  </span>
                  <span>
                    <span className="bold">112</span> following
                  </span>
                </div>
                <div className="header-datapicker">
                  <div>
                    <span></span>
                  </div>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                      <DatePicker
                        label="Uncontrolled picker"
                        defaultValue={dayjs("2022-04-17")}
                      />
                      <DatePicker
                        label="Controlled picker"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={BgWwaves} alt="" className="bg-waves" />
        </div>
      </header>
    </>
  );
};

export default Header;
