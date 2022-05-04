const Category = require('../models/Category');

exports.getAllCategories = async(req, res, next)=>{
    try{
        const categories = await Category.find({}).populate('name');
        res.status(200).json({
            status:'success',
            results: categories.length,
            data:{categories}
        })
    }catch(error){
        res.json(error)
    }
}

exports.createOneCategory = async(req, res, next)=>{
    try{
        const {userId} = req.user;
        const category = await Category.create({...req.body,author: userId});
        res.status(200).json({
            status:'success',
            data:{category}
        })
    }catch(error){
        next(error);
    }
}

exports.updateOneCategory = async(req, res, next)=>{
    try{
        const {categoryId} = req.params;
        const category = await Category.findByIdAndUpdate(categoryId,{...req.body},{new: true, runValidator: true});
        res.status(200).json({
            status:'success',
            data:{category}
        })
    }catch(error){
        res.json(error)
    }
}

exports.deleteOneCategory = async(req, res, next)=>{
    try{
        const {categoryId} = req.params;
        await Category.findByIdAndDelete(categoryId);
        res.status(200).json({
            status: 'success',
            message: 'Category has been deleted'
        })
    }catch(error){
        res.json(error)
    }
}