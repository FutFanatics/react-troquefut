import React, { useEffect, useState } from 'react';
import { SspanText } from "../componentsStyled/Text";
import { Box } from '../componentsStyled/Box';

interface OptionProps {
  text: string;
  path: string;
}

interface OptionsProps {
  options: OptionProps[];
}

const Options: React.FC<OptionsProps> = ({ options }) => {
  const [activeOption, setActiveOption] = useState<string | null>(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const matchingOption = options.find((option) => currentPath === option.path);

    if (matchingOption) {
      setActiveOption(matchingOption.text);
    } else {
      setActiveOption(null);
    }
  }, [options]);

  return (
    <div className="c-container-options d-flex">
      {options.map((option) => (
        <Box typeBox={option.text === activeOption ? 'active' : 'inative'}>
            <SspanText
                key={option.text}
                typeOption={option.text === activeOption ? 'active' : 'inative'}
                >
                {option.text}
            </SspanText>
        </Box>
        
      ))}
    </div>
  );
}

export default Options;
