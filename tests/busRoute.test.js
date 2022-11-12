import request from "supertest";
import supertest from "supertest";
import app from '../app/app.js'
import { jest } from '@jest/globals';
import mongoose from "mongoose";


describe("POST /api/v1/busRoutes/addRoute", () => {

    describe("When ticket details are given", () => {

        test('should respond with 200 status code', async () => { 
            const response = await request(app).post("/api/v1/busRoutes/addRoute").send({
                    name: "B to G",
                    stopList: ["B", "C", "D", "E", "F", "G"],
                    ticketPrice: 400.0
            })
            expect(response.statusCode).toBe(200)
         })

         test('should respond with json code', async () => { 
            const response = await request(app).post("/api/v1/busRoutes/addRoute").send({
                    name: "B to G",
                    stopList: ["B", "C", "D", "E", "F", "G"],
                    ticketPrice: 400.0
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            })

         })

    })

