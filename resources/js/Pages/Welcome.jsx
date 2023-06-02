import { useEffect } from 'react';

export default function Welcome() {
  useEffect(() => {
    window.location.href = '/login';
  }, []);
  return <></>;
}
