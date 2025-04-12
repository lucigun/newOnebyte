// instrumentation.js
import opentelemetry from "@opentelemetry/api";
import {
  defaultResource,
  resourceFromAttributes,
} from "@opentelemetry/resources";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";
import {
  ConsoleSpanExporter,
  BatchSpanProcessor,
} from "@opentelemetry/sdk-trace-node";
import {
  PeriodicExportingMetricReader,
  ConsoleMetricExporter,
} from "@opentelemetry/sdk-metrics";
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
} from "@opentelemetry/semantic-conventions";

// Resource 설정
const resource = defaultResource().merge(
  resourceFromAttributes({
    [ATTR_SERVICE_NAME]: "todo-service",
    [ATTR_SERVICE_VERSION]: "0.0.1",
  })
);

// 트레이서 프로바이더 설정
const exporter = new ConsoleSpanExporter();
const processor = new BatchSpanProcessor(exporter); // 오타 수정(BatchSapnProcessor → BatchSpanProcessor)
const provider = new NodeTracerProvider({
  resource: resource,
  spanProcessor: processor, // 배열이 아닌 단일 프로세서 전달
});

provider.register();

// SDK 초기화
const sdk = new NodeSDK({
  resource: resourceFromAttributes({
    [ATTR_SERVICE_NAME]: "TODO-SERVICE",
    [ATTR_SERVICE_VERSION]: "0.0.1",
  }),
  traceExporter: new ConsoleSpanExporter(),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new ConsoleMetricExporter(),
  }),
});

try {
  sdk.start();
  console.log("tracing initialized"); // ✅ 정상 출력
} catch (error) {
  console.error("Error initializing tracing:", error);
}
