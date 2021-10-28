import { Schema } from "mongoose"

const TransactionResponseSchema = new Schema({
    hash: { type: String, required: true },
    blockNumber: { type: Number },
    timestamp: { type: Number },
    chainId: { type: Number, required: true }
})

const TransactionReceiptSchema = new Schema({
    status: { type: Number, required: true },
    confirmations: { type: Number }
})

// eslint-disable-next-line import/prefer-default-export
export const TransactionSchema = new Schema({
    response: TransactionResponseSchema,
    receipt: TransactionReceiptSchema
})