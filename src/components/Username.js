import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../services/store";

const Username = observer(() => {
  const store = useStore();
  return <div style={{ fontSize: 14 }}>- By {store.user.name}</div>;
});

export default Username;
