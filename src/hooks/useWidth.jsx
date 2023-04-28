import {useState, useEffect} from 'react'

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleSize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize',handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return {
    width
  }
}

export default useWidth