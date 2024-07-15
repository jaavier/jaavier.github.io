const projects: Project[] = [
  {
    "name": "Webhooker - Webhook Creator",
    "description": {
      en: `Webhook Manager is an HTTP server developed in Go using the Echo framework.<br /><br />It enables the creation, management, and monitoring of webhooks and associated requests, providing a robust solution for handling webhooks in both development and production environments.<br /><br />It includes features for dynamic webhook management, statistics, and configuration updates, with a focus on security and authorization.`,
      es: ""
    },
    "url": "https://github.com/jaavier/go-requests",
    "stars": 0,
    "forks": 0,
    "date": "Jul 12, 2022",
    "image": "/assets/projects/go-requests.png",
    "features": [
      "Webhook Management: Create, delete, and update webhooks with or without passwords. Assign webhooks to specific users.",
      "Monitoring and Statistics: Obtain global and detailed statistics on webhooks and associated requests.",
      "Dynamic Updates: Modify properties of webhooks and users, including limits and active status.",
      "Authentication and Security: Middleware for authorization, IP control, and permission management.",
      "Configuration and Environment: Support for different environments (development and production) and dynamic configuration updates."
    ]
  }, {
    name: "Authentication JWT-Based",
    description: {
      en: `This project is a boilerplate for implementing authentication in Golang applications using JSON Web Tokens (JWT).`,
      es: `This project is a boilerplate for implementing authentication in Golang applications using JSON Web Tokens (JWT).`
    },
    url: "https://github.com/jaavier/go-requests",
    stars: 3,
    forks: 0,
    date: "Jul 12, 2022",
    image: "/assets/projects/go-requests.png",
    features: [
      "Login",
      "Sign Up",
      "Easily configurable with .env file",
      "Middleware for validating requests",
    ],
  }, {
    name: "Package: go-requests",
    description: {
      en: "It provides a unified interface for handling various HTTP methods, supporting both JSON and form data.<br/><br/> This package was created to reduce repetitive code when interacting with external servers.",
      es: "It provides a unified interface for handling various HTTP methods, supporting both JSON and form data. This package was created to reduce repetitive code when interacting with external servers.",
    },
    url: "https://github.com/jaavier/go-requests",
    stars: 3,
    forks: 0,
    date: "Jul 12, 2022",
    image: "/assets/projects/go-requests.png",
    features: [
      "Unified request function for all HTTP methods",
      "Support for both JSON and form data",
      "Custom header management",
      "POST, DELETE, PUT, and UPDATE requests",
      "Built-in error handling and response parsing",
      "Easy-to-use API reducing boilerplate code"
    ],
  }, {
    name: "Package: inputcheck",
    description: {
      en: "Package inputcheck provides advanced input validation for Go applications, including IPv4, IPv6, domain validation, and more.",
      es: "Package inputcheck provides advanced input validation for Go applications, including IPv4, IPv6, domain validation, and more.",
    },
    url: "https://github.com/jaavier/inputcheck",
    stars: 3,
    forks: 0,
    date: "Jul 12, 2022",
    image: "/assets/projects/go-requests.png",
    features: [
      "Alphanumeric validation",
      "Email Validation",
      "Phone number validation",
      "URL validation",
      "Case Sensitivity validation",
      "UUID Validation"
    ],
  }];

export default projects;