import assert from 'assert';
import { AfterAll, Before, BeforeAll, Given, Then, When } from 'cucumber';
import request from 'supertest';
import { MoocBackendApp } from '../../../../../../src/apps/mooc/backend/MoocBackendApp';

let _request: request.Test;
let application: MoocBackendApp;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
    _request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
    _response = await _request.expect(status);
});

When('I send a PUT request to {string} with body:', (route: string, body: string) => {
    _request = request(application.httpServer).put(route).send(JSON.parse(body));
});

Then('the response should be empty', () => {
    assert.deepStrictEqual(_response.body, {});
});

Then('the response should match:', (body: string) => {
    assert.deepStrictEqual(_response.body, JSON.parse(body));
});

BeforeAll(async () => {
    application = new MoocBackendApp();
    await application.start();
});

AfterAll(async () => {
    await application.stop();
});

Before('@skip', () => {
    return 'skipped';
});
