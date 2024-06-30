
export const register = (req,res)=>{
    try{
        constuser =req.body;
        const detail = await Auth.create(user)
        res.status(200).json({
            message: "user created successfully"
            data: "detail"
        })
    } catch (error){
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}
export default Auth;
