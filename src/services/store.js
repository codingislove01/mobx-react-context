import React from "react";
import { action, observable } from "mobx";

/* Store start */
export default class Store {
  @observable title = "Coding is Love";

  @observable user = {
    userId: 1,
    name: "Ranjith kumar",
    website: "https://codingislove.com",
    email: "ranjith@codingislove.com",
  };

  @action
  setUser(user) {
    this.user = user;
  }

  @action
  updateUser(data) {
    this.user = { ...this.user, ...data };
  }

  @action
  clearUser() {
    this.user = undefined;
  }

  @action
  setTitle(title) {
    this.title = title;
  }
}
/* Store end */

/* Store helpers */
const StoreContext = React.createContext();

export const StoreProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useStore = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withStore = (Component) => (props) => {
  return <Component {...props} store={useStore()} />;
};
