import type { ChangeEvent } from 'react';

import AppInput from '~shared/components/input/AppInput.tsx';

type ClientSearchProps = {
  searchQuery: string;
  handleOnChange: (searchQuery: string) => void;
};

const ClientSearch: FC<ClientSearchProps> = ({ searchQuery, handleOnChange }) => {
  return (
    <AppInput
      type={'text'}
      placeholder={'Search...'}
      value={searchQuery}
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e.target.value)}
    />
  );
};

export default ClientSearch;
