import styled from "styled-components";

export const StyleContainer = styled.div`
  .date-picker-title {
    font-family: "PF BeauSans Pro", sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    text-align: center;
  }
  .date__choose {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    border-bottom: 1px solid #eeeeee;
  }
  .date__choose-title {
    font-family: Sarabun;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
    color: #999999;
  }
  .date__choose-value {
    font-family: Sarabun;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    text-align: right;
    color: #282828;
  }
  /* phần custom */
  .custom-calendar {
    width: 554px;
    min-height: 338px;
    border: none;
  }

  .custom-calendar .react-datepicker__month-container {
    height: 100%;
    width: 100%;
  }
  .react-datepicker {
    border-radius: 16px;
  }
  .react-datepicker__header {
    padding: 0;
    background-color: white;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    border-bottom: 0;
  }
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    height: 48px;
    padding: 0 16px;
    border-bottom: 1px solid #f5f5f5;
  }
  .month-year-display {
    font-family: "PF BeauSans Pro", sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    color: #737373;
  }

  .nav-buttons {
    display: flex;
    gap: 16px;
  }
  .disable {
    img {
      opacity: 0.5;
    }
  }
  .nav-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #333;
  }
  /* phần ngày tháng */
  .react-datepicker__day-names {
    margin-bottom: 0px;
    height: 34px;
  }
  .react-datepicker__day-name {
    width: 79px;
    line-height: 34px;
    margin: 0;
    font-family: Sarabun;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color: #737373;
  }
  /* phần hiển thị ngày */
  .react-datepicker__month {
    margin: 0;
  }
  .react-datepicker__week {
    height: 36px;
    margin-top: 12px;
  }
  .react-datepicker__day {
    width: 79px;
    line-height: 36px;
    height: 36px;
    margin: 0;
    font-family: Sarabun;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: #282828;
  }
  .react-datepicker__day--range-start {
    position: relative;
    z-index: 1;
  }
  .react-datepicker__day--range-start::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
  }
  .react-datepicker__day--range-start div {
    z-index: 10;
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #ee0033;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

  .react-datepicker__day--range-end {
    color: white;
    position: relative;
    z-index: 1;
  }

  .react-datepicker__day--in-selecting-range {
    position: relative;
    z-index: 1;
    /* background-color: #feebf0; */
  }
  .react-datepicker__day--selected {
    position: relative;
    z-index: 1;
    background-color: unset;
  }
  .react-datepicker__day--range-end::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: #fff;
  }
  .react-datepicker__day--range-end div ,
  .react-datepicker__day--selected div
  /* .react-datepicker__day--in-selecting-range div  */ {
    z-index: 10;
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #ee0033;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .react-datepicker__day--selected {
    color: black;
    /* background-color: #fff; */
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    border-radius: unset !important;
    /* background-color: unset !important; */
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: unset !important;
    /* background-color: #216ba5; */
    /* color: #fff; */
  }
  .btn-modal-filter-day {
    width: 160px;
    margin: 16px auto 0;
    font-family: "FS PFBeauSansPro", sans-serif !important;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    border: none;
    border-radius: 8px 8px 8px 0;
  }
  .disabled-modal-filter-day {
    background: #e5e5e5;
    color: #b6b6b6;
  }
  .btn-filter-day-active {
    background: #ee0033;
    color: #fff;
    cursor: pointer;
  }
  .react-datepicker__day--disabled {
    color: #999999 !important;
  }
  .react-datepicker__day--keyboard-selected {
    background-color: unset;
  }
  .react-datepicker__day--in-range {
    background-color: #feebf0;
    color: #ee0033;
  }
  .react-datepicker__day--in-selecting-range:not(
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--in-range
    ) {
    background-color: unset;
  }
  .react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--range-end {
    background-color: unset;
  }
  @media (max-width: 768px) {
    .date-picker-title {
      display: none;
    }
    .date__choose {
      padding: 12px 0;
      margin-bottom: 12px;
      height: 42px;
    }
    .date__choose__container {
    }
    .date__choose-value,
    .date__choose-title {
      font-size: 14px;
      line-height: 20px;
    }
    .month-year-display {
      font-size: 16px;
    }
    .nav-buttons {
      /* display: none; */
      img {
        width: 24px;
        height: 24px;
      }
    }
    .custom-calendar {
      width: 100%;
      min-height: 338px;
      border: none;
    }
    .react-datepicker__day-name,
    .react-datepicker__day {
      width: calc((100% - 24px) / 7);
    }
    .btn-tra-cuoc-mobi {
      /* display: none; */
      width: 100% !important;
    }
    .custom-header {
      height: 40px;
    }
    .month-year-display {
      line-height: 20px;
    }
    .react-datepicker__day-name {
      font-size: 12px;
    }
    .react-datepicker__day {
      font-size: 12px;
      font-weight: 400;
    }
    .react-datepicker__week {
      margin-top: 0;
    }
    .custom-calendar {
      min-height: 270px;
    }
    .btn-modal-filter-day {
      margin: 12px auto 0;
    }
  }
`;
