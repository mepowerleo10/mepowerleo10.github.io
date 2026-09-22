import { openobserveRum } from "@openobserve/browser-rum";


export function initOpenObserveRum() {
  const options = {
    clientToken: "rumduGl3pAoeM1c7jc0",
    applicationId: "mepowerleo10.github.io",
    site: "openobserve.demo.serahangi.com",
    service: "mepowerleo10.github.io",
    env: "production",
    version: "0.0.1",
    organizationIdentifier: "default",
    insecureHTTP: false,
    apiVersion: "v1",
  };

  openobserveRum.init({
    applicationId: options.applicationId,
    clientToken: options.clientToken,
    site: options.site,
    organizationIdentifier: options.organizationIdentifier,
    service: options.service,
    env: options.env,
    version: options.version,
    trackResources: true,
    trackLongTasks: true,
    trackUserInteractions: true,
    apiVersion: options.apiVersion,
    insecureHTTP: options.insecureHTTP,
    defaultPrivacyLevel: "allow", // 'allow' or 'mask-user-input' or 'mask'. Use one of the 3 values.
    sessionSampleRate: 100, // Track 100% of sessions
    sessionReplaySampleRate: 50, // Record 50% of sessions
  });

  openobserveRum.startSessionReplayRecording();
}