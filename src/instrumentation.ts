import { registerOTel } from "@vercel/otel";

export function register() {
  // Register the OpenTelemetry.
  registerOTel("next-app");
}