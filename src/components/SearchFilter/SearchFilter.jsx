import { Label, Input } from './SearchFilter.styled';

const SearchFilter = ({ onFilter }) => {
  return (
    <>
      <Label>
        Find contacts by name
        <Input type="text" name="filter" onChange={e => onFilter(e)} />
      </Label>
    </>
  );
};

export default SearchFilter;
