import inventory from "../model/inventoryModel.js";

export const getItems = (req,res)=>{

    let result = inventory;
   const {category,quantity,search} = req.query;
    
   // category

    if(category){
        result=result.filter(item=>item.category.toLowerCase()===category.toLowerCase());
    }

    // quantity
    if(quantity){
        result=result.filter(
            item=>item.quantity==quantity
        );
    }
    // search
    if(search){
        result=result.filter(item=>item.name.toLowercase().includes(search.toLowercase()));
    }
    res.json(result);
};
 
// single item

export const getSingleitem=(req,res)=>{
    const id = req.params.id;
    const item = inventory.find(i=>i.id==id);
    if(!item){
        return res.json({message:"item not found"});
    }
    res.json(item);
};
 
// add item

export const addItem=(req,res)=>{
    const {name,category,quantity}=req.body;
    if(!name||!category||!quantity){
        return res.json({message:"all fields required"});
    }
    const newItem={
        id:Date.now(),
        name,
        category,
        quantity
    };
    inventory.push(newItem);
    res.status(201).json(newItem);
}

// update item

export const updateItem =(req,res)=>{
    const id = req.params.id;
    const index =inventory.findIndex(i=>i.id==id);
    
    if(index===-1){
        return res.json({message:"item not found"});
    }

    const { name, category, quantity } = req.body;

    if (!name || !category || !quantity) {
    return res.json({
      message: "All fields required"
    });
  }
  inventory [index]={
    id:inventory[index].id,
    name,
    category,
    quantity
  };
  res.json({message:"item updated sucessfully",item:inventory[index]});
}

// delete item

export const deleteItem = (req,res)=>{
    const id=req.params.id;
    
    const index = inventory.findIndex(i=>i.id==id);

    if (index===-1){
        return res.json({message:"item not found"});
    }
    inventory.splice(index,1);
    res.json({message:"item deleted"});

}