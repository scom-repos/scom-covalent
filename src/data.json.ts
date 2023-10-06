export default [
  {
    "id": 0,
    "title": "[Counter] Balancer Markets - TVL",
    "path": "scom-counter",
    "properties": {
      "dataSource": "Covalent",
      "endpoint": "cq/covalent/app/balancer/markets",
      "title": "Balancer Markets - TVL",
      "options": {
        "counterColName": "tvl_quote",
        "counterLabel": "TVL Quote"
      }
    }
  },
  {
    "id": 1,
    "title": "[Table] Balancer Markets",
    "path": "scom-table",
    "properties": {
      "dataSource": "Covalent",
      "endpoint": "cq/covalent/app/balancer/markets",
      "title": "Balancer Markets",
      "options": {
        "columns": [
          {
            "name": "chain_name",
            "title": "Chain name"
          },
          {
            "name": "contract_name",
            "title": "Contract name"
          },
          {
            "name": "quote_rate",
            "title": "Quote rate",
            "numberFormat": "0,000.0a"
          },
          {
            "name": "tvl_quote",
            "title": "TVL quote",
            "numberFormat": "0,000.0a"
          }
        ]
      }
    }
  }
] as {
  id: number;
  title: string;
  description?: string;
  path: string;
  properties: {
    [key: string]: string | number | object
  }
}[]
