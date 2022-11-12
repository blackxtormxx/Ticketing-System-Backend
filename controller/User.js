import User from "../model/User.js";
import BusRouteErrorFactory from "../errors/BusRouteErrors/BusRouteErrorFactory.js";

import bcrypt from 'bcrypt'
import RegisterErrorFactory from "../errors/RegistationErrors/RegistationErrorFactory.js";

let factory = new RegisterErrorFactory();


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


