# Node.js Application Monitoring with Prometheus and Grafana

The repository contains a sample Node.js app that integrates the [Prometheus client for node.js](https://github.com/siimon/prom-client) and exposes metrics on [http://localhost:8080/metrics](http://localhost:8080/metrics). The metrics are periodically scraped by [Prometheus](https://prometheus.io) and visualized through a [Grafana](https://grafana.com/oss/grafana) monitoring dashboard.

## Prerequisites

Make sure that you have Docker and Docker Compose installed:
- [Docker Engine](https://docs.docker.com/engine)
- [Docker Compose](https://docs.docker.com/compose)

## Getting started

Clone the repository:
```bash
git clone https://github.com/arpendu11/node-prometheus-grafana.git
```

Navigate into the project directory:
```bash
cd node-prometheus-grafana
```

 Start the Docker containers:
```bash
docker-compose up -d
```

## Test containers

- Prometheus should be accessible via [http://localhost:9090](http://localhost:9090)
- Grafana should be accessible via [http://localhost:3000](http://localhost:3000)
- Example Node.js server metrics for monitoring should be accessible via [http://localhost:8080/metrics](http://localhost:8080/metrics)
- Example Node.js slow URL should be accessible via [http://localhost:8080/slow](http://localhost:8080/slow)

## Open monitoring dashboards

Open in your web browser the monitoring dashboards:

- [NodeJS Application Dashboard](http://localhost:3000/d/PTSqcpJWk/nodejs-application-dashboard)
- [High Level Application metrics](http://localhost:3000/d/OnjTYJg7k/high-level-application-metrics)
- [Node Service Level Metrics Dashboard](http://localhost:3000/d/WBxkVyRnz/node-service-level-metrics-dashboard)
- [NodeJS Request Flow Dashboard](http://localhost:3000/d/2Er5E1R7k/nodejs-request-flow-dashboard)
