import React, { useEffect, useState } from "react";
import axios from "axios";
import { SH1 } from "../componentsStyled/Text";

import DatePicker from "./datepicker";
import { Box } from "../componentsStyled/Box";
import DevolutionItem from "./devolutionitem";
import Button from "../componentsStyled/Button";
import IconSearch from "../componentsStyled/icon/iconsearch";

type Devolution = {
  id: string;
  imgs: { url: string }[];
  created_at: string;
};

const ListagemDevolucoes: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState<Date | null>(new Date());
  const [devolucoes, setDevolucoes] = useState<Devolution[]>([]);

  useEffect(() => {
    const fetchDevolucoes = async () => {
      try {
        const response = await axios.get("http://localhost:5001/devolucoes");
        setDevolucoes(response.data);
      } catch (error) {
        console.error("Erro ao buscar devoluções", error);
      }
    };

    fetchDevolucoes();
  }, [selectedDate, currentDate]);

  const handleSearch = () => {
    
    const filteredDevolucoes = devolucoes.filter((devolucao) => {
      const createdAtDate = new Date(devolucao.created_at);
      return (
        (!selectedDate || createdAtDate >= selectedDate) &&
        (!currentDate || createdAtDate <= currentDate)
      );
    });

    setDevolucoes(filteredDevolucoes);
  };

  return (
    <div>
      <div className="d-flex justify-content-center mt-3 align-items-center box-date">
      <SH1 typeTitle="acompanhe">Selecione um período:</SH1>
      <div className="d-flex flex-column container-date"> 
        <label>Data início:</label>
        <DatePicker onSelectDate={setSelectedDate} placeholder="Selecione uma data" onChange={setSelectedDate}/>

      </div>
      <div className="d-flex flex-column container-date"> 
        <label>Data Final:</label>
      <DatePicker onSelectDate={setCurrentDate} selected={currentDate} placeholder="Data Atual" onChange={setSelectedDate} />
      </div>
      <Button onClick={handleSearch} typeButton="search"><IconSearch width={18}></IconSearch></Button>
      </div>
      <SH1 color='#777' fontSize='16px' fontWeight={350} textAlign='start'>Lista de devoluções</SH1>
      {devolucoes.map((devolucao) => (
        <DevolutionItem key={devolucao.id} devolucao={devolucao} />
      ))}
    </div>
  );
};

export default ListagemDevolucoes;
