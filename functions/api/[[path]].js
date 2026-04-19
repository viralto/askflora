export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname.replace('/api', '');
  const workerUrl = `https://flora-api.viralto.workers.dev${path}`;
  
  return fetch(workerUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
  });
}
