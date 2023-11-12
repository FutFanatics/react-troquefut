import React, { useState } from "react";
import { SH1 } from "../componentsStyled/Text";
import Button from "../componentsStyled/Button";


const DatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  return (
    <div className="date-picker d-flex w-100 justify-content-center">
      
      <SH1 typeTitle="acompanhe">Selecione um período:</SH1>
      <label>
        
        <span>Data de Início:</span>
        <input
          type="date"
          value={startDate.toISOString().substr(0, 10)}
          onChange={(e) => handleStartDateChange(new Date(e.target.value))}
        />
      </label>
      <label>
        
        <span>Data Final:</span>
        <input
          type="date"
          value={endDate.toISOString().substr(0, 10)}
          onChange={(e) => handleEndDateChange(new Date(e.target.value))}
        />
      </label>
      <Button >
        Buscar
      </Button>
    </div>
  );
};

export default DatePicker;
