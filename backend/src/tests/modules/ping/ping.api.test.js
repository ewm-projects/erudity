import mongoose from 'mongoose'
import supertest from 'supertest'

import Conn from '../../../main/data/conn'
import Express from '../../../main/http/app'

import { PingData } from './ping.data.js'
import { PingRepository } from '../../../main/modules/ping'

const Api = supertest(Express.create())

beforeAll(async () => await Conn.start())

describe('Get Pings', () => {
    beforeAll(async () => await PingRepository.removeAll())

    test('Success - get all pings', async () => {
        // Arrange
        await PingRepository.addAll(PingData)

        // Act
        const res = await Api.get('/api/ping').expect(200)
        const pings = res.body

        // Assert
        pings.forEach(ping => expect(ping.id).toBeDefined())
        expect(pings).toHaveLength(PingData.length)
    })
})

describe('Create Pings', () => {

    test('Success - add new ping', async () => {
        const newPing = {message: "new ping"}

        // /application\/json/ is regexp, see https://javascript.info/regexp-introduction
        await Api.post('/api/ping').send(newPing).expect(201).expect('Content-Type', /application\/json/)
        const pings = await PingRepository.getAll()

        expect(pings).toHaveLength(1)
    })

    afterEach(async () => await PingRepository.removeAll())
})

describe('Update Pings', () => {

    test('Success - ping is modified', async () => {
        const ping = {message: "ping"}
        const newPing = {message: "new ping"}
        const savedPing = await PingRepository.add(ping)

        await Api.put(`/api/ping/${savedPing.id}`).send(newPing).expect(201).expect('Content-Type', /application\/json/)
    })
})

describe('Delete Pings', () => {

    test('Success - ping is deleted', async () => {
        const ping = {message: "ping"}
        const savedPing = await PingRepository.add(ping)

        await Api.delete(`/api/ping/${savedPing.id}`).expect(204)
        const pings = await PingRepository.getAll()

        expect(pings).toHaveLength(0)
    })
})

afterEach(async () => await PingRepository.removeAll())
afterAll(async () => await Conn.stop())