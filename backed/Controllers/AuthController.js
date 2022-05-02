const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Admin = require("../models/admin");


require("dotenv").config();

class AuthController {
    // let's generate a token

    static generateToken = (role) => {
        return jwt.sign({data: role}, process.env.TOKEN_SECRET, {
             expiresIn: 60 * 60,     
        });
    };


    // login
    static login = async (req, res) => {

    //    await  User.findAll().then(re=>{
    //         res.send(re)
    //     });
      

        try {
            const { email, password } = req.body;

            const admin = await Admin.findOne({
                where: {
                    email,
                }
            });
           

            if(admin === null) {

                
            res.status(401).json({
                message: "Incorrect email or password."
            });
            }

            const validPassword = bcrypt.compareSync(password, admin.password);

            if (validPassword) {
                const token = this.generateToken(admin.role);
                res.status(200).json({
                    token,
                  //  data: admin,
                    response: {
                        message: "logged in successfully!"
                    },
                });
            } else {
                res.sendStatus(401);
            }
        } catch (err) {
          console.log(err)
        }
    }

    //validating token
    static validateToken = (req, res, next) => {
        // gather the jwt access token from the request header

        const authHeader = req.headers["authorization"];

        const token = authHeader && authHeader.split(" ")[1];

        if (token === null) 
            return res.status(401).json({ message: "Unauthenticated" });
        jwt.verify(token, process.env.TOKEN_SECRET, (err, authData) => {

            //console.log(authData)
            if (err) res.sendStatus(403, err.message);
            req.role = authData.data;
            next(); // pass the execution off to whatever request the client intended
        });
    };
        
    static preAuthorize = (...role) => {
        return (req, res, next) => {
            if (!role.includes(req.role)) {
                next(
                    res.status(403).json("You do not have permission to perfom this action")
                )
            };
            next();
        };
        
    };
}

const { login, validateToken, preAuthorize } = AuthController;

module.exports = {
    login,
    validateToken,
    preAuthorize
};


