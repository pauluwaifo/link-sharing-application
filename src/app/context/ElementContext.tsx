import { createContext } from 'react';
import { ElementData } from './ElementProvider';

export interface ElementContextType {
    elements?: ElementData[];
    addNewElement?: () => void;
    deleteElement?:  (id: number) => void ;
  }
  
const ElementContext = createContext<ElementContextType | undefined>(undefined);

export default ElementContext;