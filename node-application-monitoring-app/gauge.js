const promClient = require('prom-client');

const gauge = (register) => {
    const g = new promClient.Gauge({
        name: 'node_my_gauge',
        help: 'This is my gauge',
        labelNames: ['code'],
        buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10] // 0.1 to 10 seconds
    });
    
    setInterval(() => {
        g.set({ code: 200 }, Math.random());
        g.set(Math.random());
        g.labels('300').inc();
        g.inc();
        g.set(22);
    }, 100);
    
    register.registerMetric(g);
};

module.exports = { gauge };