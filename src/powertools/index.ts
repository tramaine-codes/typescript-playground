import { MetricUnit, Metrics } from '@aws-lambda-powertools/metrics';

const metrics = new Metrics({
  namespace: 'ServerlessAirline',
  serviceName: 'orders',
  singleMetric: true,
});

metrics.clearDefaultDimensions();
metrics.setDefaultDimensions({ foo: 'bar', baz: 'qux' });

metrics.addMetric('successfulBooking', MetricUnit.Count, 1);
metrics.addMetric('failedBooking', MetricUnit.Count, 1);

// metrics.publishStoredMetrics();

// const singleMetric = metrics.singleMetric();
// singleMetric.clearMetadata();
// singleMetric.clearDefaultDimensions();
// singleMetric.addDimensions({ foo: 'bar' });
// singleMetric.addMetric('successfulBooking', MetricUnit.Count, 1);
// singleMetrics.addMetric('failedBooking', MetricUnit.Count, 1);
