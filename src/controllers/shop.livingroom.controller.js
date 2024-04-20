const products = require("../database/shop.database");
const pool = require("../database/shop.database");
const utilities = require("../utilities/utilities");

class productsControlle
{
    
    //all livingroom products
    async getAllLivingRoomProducts(req, res)
    {
        try 
        {
            let productsLivingRoom = await pool.query("SELECT * FROM livingRoom");
            if(productsLivingRoom.rowCount > 0)
            {
                return res
                .status(200)
                .send(productsLivingRoom.rows)
            }else
            {
                return res.status(200).send({
                    code:200,
                    message:"Not Data Found"
                })
            }
            
            
        } catch (err) 
        {
            return res
            .status(500)
            .send({
                code:500,
                message:err
            })
        }
    }



    //add livingroom products
    async addLivingRoomProducts(req, res)
    {
        try 
        {
            const 
            {
                name,
                price,
                color,
                image,
                star,
            } = req.body;
            
            if(name.length > 0)
            {
                if(utilities.onlyLettes(name))
                {
                    if(image.length > 0)
                    {
                        let productsLivingRoomAdded = await pool.query("INSERT INTO livingRoom (Name, price, Color, Image, star) values" + 
                        "($1, $2, $3, $4, $5)", [name, price, color, image, star]);
                        if(productsLivingRoomAdded.rowCount)
                        {
                            return res.status(200).send({
                                code:200,
                                message:"Product added"
                            })
                        }
                        return res
                        .status(400)
                        .send({
                            code:400,
                            message:"Could not be able to add the product",
                            details:{
                                detail : productsLivingRoomAdded.rows
                            }})
                    }else
                    {
                        return res
                        .status(200)
                        .send({
                            code:400,
                            message:"Image can't be empty"
                        })
                    }
                }else
                {
                    return res
                    .status(400)
                    .send({
                        code:400,
                        message : "Name field can not contains numbers"
                    })
                }
                
            }else
            {
                return res
                    .status(200)
                    .send({
                        code:400,
                        message:"Name can't be empty"
                    })
            }
            
            
        } catch (err) 
        {
            return res.status(500).send({
                code:500,
                message:err
            })
            
        }
    }


    //dele living room products

    async deleteLivingRoomProduct(req, res)
    {
        try 
        {
            if(utilities.onlyNumbers(req.params.id))
            {
                const id = parseInt(req.params.id);
                if(id > 0)
                {
                    let deleproduct = await pool.query("DELETE  FROM LivingRoom where id=$1",[id]);
                    if(deleproduct.rowCount == 1)
                    {
                        return res
                        .status(200)
                        .send({
                            code:200,
                            message:"livingRoom porduct deleted"
                        })
                    }

                }else
                {
                    return res
                    .status(400)
                    .send({
                        code:400,
                        message:"Param can not be less than 1"
                    })
                }

            }else
            {
                return res
                .status(400)
                .send({
                    code:400,
                    message:""
                })
            }
            
        } catch (error) 
        {
            return res.status(500).send({
                code:500,
                message:err
            })
        }
    }
}


module.exports = new productsControlle();