import { useState, useEffect } from 'react';

const Isonline = () => {
  let [onlineAvaliable, setonlineAvaliable] = useState(true);
  useEffect(() => {
    window.addEventListener('offline', () => {
      setonlineAvaliable(false);
    });

    window.addEventListener('online', () => {
      setonlineAvaliable(true);
    });
  }, []);
  return onlineAvaliable;
};

export default Isonline;
