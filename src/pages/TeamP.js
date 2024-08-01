import React from "react";
import Card from "../components/Card";
import "../style/team/TeamPage.css";
import { useState } from "react";
import Accordion from "./../components/TeamPage/Accordion";
import { accordionData } from "./../utils/Content";
import Footer from "./../components/HomePage/Footer";
import Boardmember from "./../constants/boardmem";
const TeamP = () => {
  const [yearslt, setyearslt] = useState("22-23");
  return (
    <>
      <div className="teamPage">
        {/* <div className='selectOption'>
        <span>
            <select
            onChange={(event)=>
            {
                console.log(event.target.value);
                setyearslt(event.target.value);
            }}
            className='select'>
                <option value="2122" >2021-22</option>
                <option value="2021" >2020-21</option>
            </select>
        </span>
      </div> */}

        <h2>Overall Coordinators</h2>
        <div className="outerCards core">
          {Boardmember.map((val) => {
            if (val.title === "President" || val.title === "Vice President")
              return (
                <Card
                  name={val.head}
                  title={val.title}
                  rollno={val.rollno}
                  gmaillink={val.gmail}
                  linkedin={val.linkedin}
                  profileimage={val.imageSource}
                />
              );
            else <Card />;
          })}
        </div>
        {/* <Card/> */}
        <h2>Department Heads</h2>
        <div className="outerCards headOfDepts">
          {Boardmember.map((val) => {
            if (val.title != "President" && val.title != "Vice President") {
              return (
                <Card
                  name={val.head}
                  title={val.title}
                  rollno={val.rollno}
                  gmaillink={val.gmail}
                  linkedin={val.linkedin}
                  profileimage={val.imageSource}
                />
              );
            } else {
              <Card />;
            }
          })}
        </div>

        <div>
          <h1>Departmentwise Team Members</h1>
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamP;
