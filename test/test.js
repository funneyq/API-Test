import { expect } from 'chai';
import supertest from 'supertest';

const request = supertest('https://eacp.energyaustralia.com.au/codingtest/');

describe('GET /festivals', () => {
  it('should GET the responses status as 200', async () => {
    const res = await request.get('api/v1/festivals')
    expect(res.statusCode).to.eq(200);
  });

  it('should return an array', async () =>{
    const res = await request.get('api/v1/festivals')
    expect(res.body).to.be.a('array');
  });

  it('should in throttle status if calling the API 10 times', async () =>{
    let responses= [];
    for (let index = 1; index < 10; index++) {
        const res = await request.get('api/v1/festivals')
        responses.push(res.statusCode.toString())
    }
    expect(responses).to.contain("429");
  });

  it('should have the correct schema', async () =>{
    var chai = require('chai');
    chai.use(require('chai-json-schema'));  
    const res = await request.get('api/v1/festivals')
    const schema = require('./schema')
    expect(res.body).to.be.jsonSchema(schema)  
  });
});

