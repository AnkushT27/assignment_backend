const user = require('../model/userModel')

    const getUser = (req,res,next)=>{
        user.findAll().then(
            (users)=>{
                res.send(users)
            }
        ).
        catch(
            (err)=>{
                res.status(500).send({"message":"Something went wrong"})

            }
        )
    }

    const addUser = (req,res,next)=>{
     
        user.create({
            name:req.body.name,
            email:req.body.email
        }).then(
            (result)=>{
                res.status(201).send(result);
            }
        ).catch(
            (err)=>{
                res.status(500).send({"message":"Something went wrong"})
            }
        )
    }

    const getUserById = (req,res,next)=>{
        let id = req.params.id
        user.findByPk(id).then(
            (user)=>{
                user ?
                res.send(user):
                res.status(500).send({"message":"Something went wrong"})
                
            }
        ).
        catch(
            (err)=>{
                res.status(500).send({"message":"Something went wrong"})
            }
        )
        
    }

    const updateUser = (req,res,next)=>{
        let id = req.params.id
        user.update({
            name:req.body.name,
            email:req.body.email
        },{where:{id:id}}).then(
            ([result])=>{
                if(result==1)
                {
                res.status(201).send({"message":"Updated Successfully"});
                }
            }
        ).
        catch(
            (err)=>{
                res.status(500).send({"message":"Something went wrong"})
            }
        )

    }
    


module.exports = {
    getUser:getUser,
    addUser:addUser,
    getUserById:getUserById,
    updateUser:updateUser
}