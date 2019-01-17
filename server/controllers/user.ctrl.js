const pool = require('../database')
const userCtrl = {};


userCtrl.consultarUsuario = (req, res) =>{
    pool.query('SELECT * FROM personaje',(error, result)=>{
        if(error) throw error;

        res.json(result);
    })

};

userCtrl.crearUsuario = (req, res) =>{
    pool.query('INSERT INTO personaje SET ?', req.body, (error, result) =>{
        if(error) throw error;

        res.status(201).send(`User added with  ID: ${result.insertId}`);
    })
}

userCtrl.consultarUsuarioPorId = (req, res) =>{
    const id = req.params.id;
    pool.query('SELECT * FROM personaje WHERE personaje.personaje_id = ?', id ,(error, result)=>{
        if(error) throw error;

        res.send(result);
    })
}

userCtrl.editarUsuario = (req, res)=>{
    const id = req.params.id;
    pool.query('UPDATE personaje SET ? WHERE personaje.personaje_id = ?', [req.body, id], (error,result)=>{
        if(error) throw error;

        res.send('Usuario actualizado satisfactoriamente');
    });
};



userCtrl.eliminarUsuario = (req, res)=>{
    const id = req.params.id;
    pool.query('DELETE FROM personaje WHERE personaje_id = ?', id, (error, result)=>{
        if(error) throw error;

        res.send('Usuario Eliminado');
    })
}

userCtrl.allUsers = async (req, res)=>{
    const users = await userModel.find();
    res.json(users);
}

userCtrl.createUser = async(req,res) =>{
    const newUser =  new userModel({
        cedula:req.body.cedula,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        correo: req.body.correo,    
        contraseña: req.body.contraseña,
        telefono:req.body.telefono
    });
    await newUser.save();
    res.json({
        status : 'Usuario guardado'
    });
}

userCtrl.findByIdUser = async (req, res) =>{
    const userId = await userModel.findById(req.params.id);
    res.json(userId);
}

userCtrl.editUser = async (req,res)=>{
    const { id } =req.params;
    const userEdit={
        cedula:req.body.cedula,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        correo: req.body.correo,
        contraseña: req.body.contraseña,
        telefono:req.body.telefono
    };
    await userModel.findByIdAndUpdate(id,{$set: userEdit}, {new:true});
    res.json({
        status : 'Usuario actualizado'
    });
}

userCtrl.deleteUser = async(req, res)=>{
    await userModel.findByIdAndRemove(req.params.id);
    res.json({status: 'usuario Eliminado'})
}


module.exports = userCtrl;