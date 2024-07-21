import * as React from "react";

interface SelectedItemContextType {
  selectedTodos: string[];
  setSelectedTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectedItemContext = React.createContext<
  SelectedItemContextType | undefined
>(undefined);
SelectedItemContext.displayName = "SelectedItemContext";

export default SelectedItemContext;
