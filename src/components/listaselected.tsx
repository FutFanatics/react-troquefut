

interface ListaSelectedProps<T> {
    options: T[];
    onChange: (selectedValue: T) => void;
    selectedValue?: T;
  }

  function ListaSelected<T extends string | number>({ options, onChange, selectedValue }: ListaSelectedProps<T>) {
    return(
        <select onChange={(e) => onChange(e.target.value as T)} value={selectedValue} className="list-select">
        <option value={undefined} disabled>Selecione uma opção</option>
        {options.map((option, index) => (
            <option key={index} value={option}>
            {option}
            </option>
        ))}
        </select>
    )
}
export default ListaSelected