import React, { useState } from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps extends ReactDatePickerProps {
 onSelectDate: (date: Date | null) => void;
 placeholder?:string;
}

const DatePicker: React.FC<DatePickerProps> = ({ onSelectDate, onChange, ...props }) => {
 const [selectedDate, setSelectedDate] = useState<Date | null>(null);

 const handleDateChange = (date: Date | null, event: React.SyntheticEvent<any> | undefined) => {
    setSelectedDate(date);
    onSelectDate(date);
    if (onChange) {
      onChange(date, event);
    }
 };

 return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
      {...props}
    />
 );
};

export default DatePicker;