import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
  const [isError, setError] = useState(false);
  useEffect(() => {
    if (isError) {
      throw Error('err occured');
    }
  }, [isError]);
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button onClick={() => { setError(true); }}>throw error</Button>
  );
};
