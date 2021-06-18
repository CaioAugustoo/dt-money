import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer de website",
          type: "Deposit",
          category: "Desenvolvimento",
          amount: 6800,
          createdAt: new Date("2021-06-16 09:09:00"),
        },
        {
          id: 2,
          title: "Freelancer de website",
          type: "Deposit",
          category: "Desenvolvimento",
          amount: 5300,
          createdAt: new Date("2021-06-16 09:09:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
