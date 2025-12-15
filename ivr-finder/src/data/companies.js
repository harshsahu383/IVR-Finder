const companies = [
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
    ],
  },
];

export default companies;
