const promClient = require('prom-client');

const histogram = (register) => {
    const h = new promClient.Histogram({
        name: 'node_my_sample_histogram',
        help: 'This is my sample histogram',
        labelNames: ['code'],
        buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10] // 0.1 to 10 seconds
    });

    const hc = new promClient.Histogram({
        name: 'node_my_custom_histogram',
        help: 'This is my custom histogram',
        labelNames: ['code', 'color'],
        buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10] // 0.1 to 10 seconds
    });
    
    setTimeout(() => {
        h.labels('200').observe(Math.random());
        h.labels('300').observe(Math.random());
        hc.labels('200', 'blue').observe(Math.random());
        hc.labels('300', 'red').observe(Math.random());
        hc.labels('300', 'blue').observe(Math.random());
        hc.labels('200', 'red').observe(Math.random());
    }, 10);

    register.registerMetric(h);
    register.registerMetric(hc);
};

module.exports = { histogram };