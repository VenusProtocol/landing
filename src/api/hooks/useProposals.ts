import { useEffect, useState } from 'react';
import { fetchProposalCount } from '../index';

export const useProposalsCountFromApi = () => {
  const [data, setData] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();

  const fetchData = () => {
    fetchProposalCount()
      .then(res => {
        setData(res);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
    fetchData,
  };
};
