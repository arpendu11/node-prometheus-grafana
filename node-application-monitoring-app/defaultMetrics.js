const promClient = require('prom-client');

const defaultMetrics = (register) => {
	promClient.collectDefaultMetrics({
		prefix: 'node_',
		timeout: 10000,
		gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5], // These are the default buckets.
	});
	
	console.log(register.metrics());
}

module.exports ={ defaultMetrics };