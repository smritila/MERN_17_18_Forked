// create a context of data to be passed between components
import React from "react";
const MyContext = React.createContext();

// context provider
export const MyProvider = MyContext.Provider;

// context consumer
export const MyConsumer = MyContext.Consumer;

export default MyContext;
