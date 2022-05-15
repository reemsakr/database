import express, { NextFunction, Request, Response } from 'express'
import { order, ordersStore } from '../models/order_model'
//import jwt from 'jsonwebtoken';
// import db from '../database';

const store = new ordersStore()

// handler functions here
export const index= async (_req:Request,res:Response)=> {
    const order= await store.index();
    res.json(order);
};


export const show= async (req:Request,res:Response)=> {
    const order= await store.show(req.params.user_id);
    res.json(order);
};


export const destroy= async (_req:Request,res:Response)=> {
    const neworder= await store.delete(_req.params.id);
        res.json(neworder);
    };


export const create= async (req:Request,res:Response)=> {
    try{
    const order:order={
        id: req.body.id,
        product_id:req.body.product_id,
        quantity:req.body.quantity,
        user_id:req.body.user_id,
        status:req.body.status
    }
    const neworder= await store.create(order);
    res.json(neworder);
    }
    catch(err){
        res.status(400);
        res.json(err);
    }
};