

export const welcome = (req,res) =>{
    res.json({
        data:'hello from nodejs api from routes',
    });
};

export const preRegister = async (req, res) => {
    try{
        console.log(req.body);
        const emailSent = true;

        if(emailSent){
            return res.json({ok: true});
        }else{
            return res.json({ok: false});
        }
    }catch(err){
        console.log(err);
        return res.json({error: "Something went wrong. Try again." });
    }
};