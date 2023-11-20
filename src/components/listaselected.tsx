interface ListaSelectedProps<T> {
    options: T[];
    onChange: (selectedValue: T) => void;
    selectedValue?: T;
    quantityNumber?: number;
  }

  function ListaSelected<T extends string | number>({ options, onChange, selectedValue, quantityNumber = 0 }: ListaSelectedProps<T>) {
    
    let quantities = [];

    for (let i = 1; i <= quantityNumber; i++) {
        quantities.push(i);
    }

    if(quantityNumber > 0) {
        return(
            <select onChange={(e) => onChange(e.target.value as T)} value={selectedValue} className="list-select">
                <option value="" disabled>Selecione uma opção</option>
                {quantities.map((option, index) => (
                    <option key={index} value={option}>
                    {option}
                    </option>
                ))}
            </select>
        )
    }

    return(
        <select onChange={(e) => onChange(e.target.value as T)} value={selectedValue} className="list-select">
        <option value="" disabled>Selecione uma opção</option>
        {options.map((option, index) => (
            <option key={index} value={option}>
            {option}
            </option>
        ))}
        </select>
    )
}
export default ListaSelected