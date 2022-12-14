import request from "supertest";
import supertest from "supertest";
import app from '../app/app.js'
import { jest } from '@jest/globals';
import mongoose from "mongoose";


describe("POST /api/v1/user/register", () => {

    describe("When user details are given", () => {

        test('should respond with 200 status code', async () => { 
            const response = await request(app).post("/api/v1/user/addnewuser").send({
                    username: "Thevindu",
                    email: "thevinduwijesinghe@gmail.com",
                    password: "User1234@@"
            })
            expect(response.statusCode).toBe(200)
         })

         test('should respond with json code', async () => { 
            const response = await request(app).post("/api/v1/user/addnewuser").send({
                    name: "Thevindu",
                    email: "thevinduwijesinghe@gmail.com",
                    password: "User1234@@"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            })

         })

    })

