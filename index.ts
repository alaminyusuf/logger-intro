import express from 'express'
import winston from 'winston'

const app = express()
const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
})

app.get('/', (req: any, res: any) => {
  logger.info('I am awesome')
})

app.listen(4000, () => console.log('Server is Working'))
