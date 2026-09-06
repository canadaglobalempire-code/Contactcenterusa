// Run: node scripts/test-lead-delivery.mjs — no external submissions.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const context = {
  exports: {}, require, FormData, Response, Request, Headers, URL, URLSearchParams,
  process: { env: {} }, console: { error() {} },
  fetch: async () => { throw new Error('Unexpected network request'); },
};
function load(file) {
  context.exports = {};
  const source = readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
  runInNewContext(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText, context);
  return context.exports;
}
const { submitLeadForm, SPLITFORMS_ACCESS_KEY } = load('lib/lead-tracking.ts');
const form = new FormData();
for (const [key, value] of Object.entries({
  full_name: ' Test lead ', work_email: 'test@example.com', solution_type: 'Inbound',
  source_page: '/contact', 'g-recaptcha-response': 'test-captcha',
  access_key: 'untrusted-override', redirect: '/thank-you', security_answer: 'omit',
})) form.set(key, value);
context.fetch = async (url, options) => {
  assert.equal(url, 'https://splitforms.com/api/submit');
  assert.equal(options.headers.Origin, undefined);
  assert.equal(options.body.get('access_key'), SPLITFORMS_ACCESS_KEY);
  assert.equal(options.body.get('full_name'), 'Test lead');
  assert.equal(options.body.get('work_email'), 'test@example.com');
  assert.equal(options.body.get('solution_type'), 'Inbound');
  assert.equal(options.body.get('source_page'), '/contact');
  assert.equal(options.body.get('g-recaptcha-response'), 'test-captcha');
  assert.equal(options.body.has('redirect'), false);
  assert.equal(options.body.has('security_answer'), false);
  return Response.json({ success: true });
};
assert.equal((await submitLeadForm(form)).data.success, true);
for (const result of [new Response('<html>Error</html>'), Response.json({ success: false }, { status: 403 })]) {
  context.fetch = async () => result;
  assert.equal((await submitLeadForm(form)).data.success, false);
}
const { POST } = load('app/api/contact/route.ts');
context.fetch = async () => { throw new Error('Missing configuration must not submit'); };
const request = () => new Request('https://contactcenterusa.com/api/contact', {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}',
});
assert.equal((await POST(request())).status, 503);
context.process.env.SPLITFORMS_ACCESS_KEY = 'test-public-form';
context.fetch = async () => new Response('<html>Error</html>');
assert.equal((await (await POST(request())).json()).success, false);
console.log('PASS: lead fields, CAPTCHA, configured identifier, provider failure and missing configuration.');
