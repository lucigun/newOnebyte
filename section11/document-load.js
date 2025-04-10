//exporter를 위한 작업추가//
import {
	ConsoleSpanExporter,
	SimpleSpanProcessor,
} from "@opentelemetry/sdk-trace-base";
import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import { DocumentLoadInstrumentation } from "@opentelemetry/instrumentation-document-load";
import { ZoneContextManager } from "@opentelemetry/context-zone";
import { registerInstrumentations } from "@opentelemetry/instrumentation";

console.log("Tracer provider initialized");

const provider = new WebTracerProvider({
	spanProcessors: [new SimpleSpanProcessor(new ConsoleSpanExporter())],
});

provider.register({
	contextManager: new ZoneContextManager(),
});

console.log("Provider registered");

registerInstrumentations({
	instrumentation: [new DocumentLoadInstrumentation()],
});

console.log("Instrumentations registered");
