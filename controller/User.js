import User from "../model/User.js";
import BusRouteErrorFactory from "../errors/BusRouteErrors/BusRouteErrorFactory.js";

import bcrypt from 'bcrypt'
import RegisterErrorFactory from "../errors/RegistationErrors/RegistationErrorFactory.js";

let factory = new RegisterErrorFactory();

/** This method registers a user */

export const registerUser = async (req, res) => {
    try {
        const user = await User.findOne({username:req.body.username});
        if(user)
            return res.status(409).send({message:"User with given username address already exist!!"});

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password,salt);

        const newUser = await new User({...req.body,password:hashPassword,balance:0, username:req.body.email}).save();
        const token = newUser.generateAuthToken();
        res.status(200).send({data:{token: token, id: newUser._id},message:"Registered in successfully!"});

    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

/** This method authenticates a user */

export const authUser = async (req, res) => {
    try {
        const user = await User.findOne({username:req.body.username});
        if(!user)
            return res.status(401).send({message: factory.createError('general')});

        const validPassword = await bcrypt.compare(
            req.body.password,user.password
        );
        if(!validPassword)
            return res.status(401).send({message: factory.createError('create')});

        const token = user.generateAuthToken();
        res.status(200).send({data:{token: token, id: user._id},message:"Logged in successfully!"});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

/** This method recharges a user's balance */

export const rechargeAcc = async (req, res) => {
    try {
        const {id} = req.params
        const {amt} = req.body;
        const user = await User.findById(id);
        if(!user)
            return res.status(401).send({message:"User not found"});
        const exBal = user.balance;
            const newUesr = await User.findByIdAndUpdate(id, {balance: +exBal + +amt});


        res.status(200).send({data:newUesr ,message:"Payment successful"});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

/** This method returns details of a specific user */

export const getUserDetails = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user)
            return res.status(401).send({message:"Invalid Email or Password"});
        res.status(200).send({ user, message:"Hello"});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

/** This method returns all the users */

export const addnewUser = (req, res) => {
    const route = req.body;
    const {id} = req.params;
    const request = new User({route});
    if (!route) {
      res.sendStatus(201)
      res.send({})
      return
    }
    res.send({});
}

export const newUser = (req, res) => {
    const route = req.body;
    const {id} = req.params;
    const request = new User({route});
    if (!route) {
      res.sendStatus(201)
      res.send({})
      return
    }
    else{
        res.send({message:"Payment adding failed!"});
    }
    res.send({});
}

