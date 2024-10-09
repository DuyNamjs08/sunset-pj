/* eslint-disable react/prop-types */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, subMonths } from "date-fns";
import { enUS } from "date-fns/locale";
import { StyleContainer } from "./style";

const customLocale = {
  ...enUS,
  localize: {
    ...enUS.localize,
    day: (n) => {
      const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
      return days[n];
    },
  },
  formatLong: {
    ...enUS.formatLong,
    date: () => "MMMM yyyy",
  },
};
const formatDate1 = (date) => {
  return date ? format(date, "dd/MM/yyyy") : "";
};
const CalendarCustom = ({ MonthFilter }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const renderDayContents = (day, date) => {
    return <div>{day}</div>;
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const handleClick = () => {
    if (startDate && endDate) {
      console.log(
        `Ngày bắt đầu: ${formatDate1(startDate)}, Ngày kết thúc: ${formatDate1(
          endDate
        )}`
      );
    }
  };
  return (
    <StyleContainer>
      <div className="text-[28px] font-semibold">Đặt lịch khảo sát</div>
      <div className="date__choose__container">
        <div className="date__choose">
          <div className="date__choose-title">Ngày chọn</div>
          <div className="date__choose-value">
            <span>{formatDate1(startDate)}</span>
            {endDate && <span>- {formatDate1(endDate)}</span>}
          </div>
        </div>
        <DatePicker
          minDate={null}
          maxDate={null}
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          locale={customLocale}
          renderDayContents={renderDayContents}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="custom-header">
              <div className="month-year-display">
                Tháng {date.getMonth() + 1} - {date.getFullYear()}
              </div>
              <div className="nav-buttons">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  className={`nav-button ${
                    prevMonthButtonDisabled ? "disable" : ""
                  }`}
                ></button>
                <button
                  style={nextMonthButtonDisabled ? { opacity: "0" } : {}}
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  className={`nav-button ${
                    nextMonthButtonDisabled ? "disable" : ""
                  }`}
                ></button>
              </div>
            </div>
          )}
          calendarClassName="custom-calendar"
          dateFormat="MM/yyyy"
        />
      </div>
      <button
        onClick={handleClick}
        className={`btn-modal-filter-day btn-tra-cuoc-mobi ${
          false ? "disabled-modal-filter-day" : "btn-filter-day-active"
        }`}
      >
        Chọn
      </button>
    </StyleContainer>
  );
};

export default CalendarCustom;
