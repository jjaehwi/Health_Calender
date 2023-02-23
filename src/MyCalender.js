import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";

class MyCalender extends Component {
  render() {
    return (
      <div className="App">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[daygridPlugin]}
          events={[
            { title: "event 1", date: "2023-02-19" },
            { title: "event 2", date: "2023-02-19" },
          ]}
        />
      </div>
    );
  }
}

export default MyCalender;
