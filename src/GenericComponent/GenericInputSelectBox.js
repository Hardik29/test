import React, { useState } from 'react';
import GenericInputBox from './GenericInputBox';
import { AiFillCloseCircle } from 'react-icons/ai';

const  GenericInputSelectBox = ({labelName, option}) => {
  const [inputValues, setInputValues] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    {inputValue == undefined && setSuggestions([]);}
    {inputValue && setSuggestions(getSuggestions(inputValue));}
    setSelectedSuggestion(null);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValues((prevState) => [...prevState, suggestion]);
    setInputValue('');
    setSuggestions([]);
    setSelectedSuggestion(null);
  };

  const handleSuggestionHover = (suggestion) => {
    setSelectedSuggestion(suggestion);
  };

  const handleInputRemove = (value) => {
    setInputValues((prevState) =>
      prevState.filter((inputValue) => inputValue !== value)
    );
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue) {
      setInputValues((prevState) => [...prevState, inputValue]);
      setInputValue('');
      setSuggestions([]);
      setSelectedSuggestion(null);
    }
  };

  const getSuggestions = (inputValue) => {
    return option.filter(
      (suggestion) =>
        suggestion[0].toLowerCase().indexOf(inputValue[0].toLowerCase()) !== -1
    );
  };

  return (
    <div>
      <GenericInputBox labelName={labelName} onChange={handleInputChange} width={25} onKeyDown={handleInputKeyDown} value={inputValue}/>
      {suggestions.length > 0 && inputValue &&(
        <ul>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseEnter={() => handleSuggestionHover(suggestion)}
              onMouseLeave={() => handleSuggestionHover(null)}
              className={`${selectedSuggestion === suggestion ? 'bg-gray-200' : 'bg-white'} pointer`}
            >
            {suggestion}
            </li>
          ))}
        </ul>
      )}
      <div className='mt-1'>
        <ul className='flex flex-row flex-wrap'>
          {inputValues.map((value, index) => (
            <li key={index} className='rounded-lg bg-[#36104C] text-white poiner w-max px-2 py-1 text-xs opacity-70 flex justify-center items-center ml-2 mt-1'>
              {value}
              <button onClick={() => handleInputRemove(value)}className='ml-2'><AiFillCloseCircle/></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default  GenericInputSelectBox;
