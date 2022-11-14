import request from "supertest";
import supertest from "supertest";
import app from '../app/app.js'
import { jest } from '@jest/globals';
import mongoose from "mongoose";


describe("POST /api/v1/busTypes/", () => {

    describe("When bus details are given", () => {

        test('should respond with 200 status code', async () => { 
            const response = await request(app).post("/api/v1/busTypes/addBusType").send({
                    name: "177",
                    numberPlate: "NB-1222",
                    day: "Monday",
                    capacity: "40",
                    route: 2,
                    routeName: "B to G"
            })
            expect(response.statusCode).toBe(200)
         })

         test('should respond with json code', async () => { 
            const response = await request(app).post("/api/v1/busTypes/addBusType").send({
                    name: "177",
                    numberPlate: "NB-1222",
                    day: "Monday",
                    capacity: "40",
                    route: 2,
                    routeName: "B to G"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            })

         })

    })

