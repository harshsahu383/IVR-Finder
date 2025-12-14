const companiesData = [
  {
    id: 1,
    name: "Airtel",
    category: "Telecom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Airtel_logo.svg",
    services: [
      {
        id: 101,
        serviceName: "Mobile / SIM",
        phone: "198",
        ivr: "1 → 4 → 5",
      },
      {
        id: 102,
        serviceName: "Broadband / Wi-Fi",
        phone: "121",
        ivr: "2 → 3 → 1",
      },
      {
        id: 103,
        serviceName: "Airtel Payments Bank",
        phone: "400",
        ivr: "3 → 2 → 1",
      },
    ],
  },

  {
    id: 2,
    name: "Jio",
    category: "Telecom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Reliance_Jio_Logo.svg",
    services: [
      {
        id: 201,
        serviceName: "Mobile / SIM",
        phone: "199",
        ivr: "1 → 2 → 3",
      },
      {
        id: 202,
        serviceName: "Jio Fiber",
        phone: "1800-896-9999",
        ivr: "2 → 1 → 4",
      },
    ],
  },

  {
    id: 3,
    name: "Amazon India",
    category: "E-commerce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    services: [
      {
        id: 301,
        serviceName: "Orders & Delivery",
        phone: "1800-3000-9000",
        ivr: "2 → 1 → 0",
      },
      {
        id: 302,
        serviceName: "Amazon Pay",
        phone: "1800-120-9009",
        ivr: "3 → 2 → 1",
      },
    ],
  },
];

export default companiesData;
