import { useCallback, useRef } from 'react';
/**
 *
 * @param delay Tempo de espera entre as chamadas a API nam medida em que se digita.
 * @param notDelayInFirstTime Na primeira chamada, o sistema espera DELAY para chamar o serviço,
 *                            o default é não esperar, logo que entra na página de busca, já chama a api.
 * @returns
 */

export const useDebounce = (delay = 300, notDelayInFirstTime = true) => {
  const debouncing = useRef<NodeJS.Timeout>();
  const isFirstTime = useRef(notDelayInFirstTime);

  const debounce = useCallback(
    (func: () => void) => {
      if (isFirstTime.current) {
        isFirstTime.current = false;
        func();
      } else {
        if (debouncing.current) {
          clearTimeout(debouncing.current);
        }
        debouncing.current = setTimeout(() => {
          func();
        }, delay);
      }
    },
    [delay]
  );
  return { debounce };
};
