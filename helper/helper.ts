
type ProductObject = {
    id:String,
    productImage:String,
    productName:String,
    productDescription:String,
    productPrice:Number,
    available:String,
    categoryId:String
}


class Helper{

    getCategoryProducts(categoryId:String,productArray:any[]):any[]{
        const categoryProducts = productArray.reduce((newArr,item)=>{
            if (item.categoryId===categoryId){
                newArr.push(item);
            }
            return newArr;
        },[])
        return categoryProducts;
    }

    getSearchedItems(searchedKey:String,contentsArray:any[] ):any[]{
        let defaultArray = [];
        if (contentsArray && contentsArray.length > 0){
            for (let i = 0;i < contentsArray.length;i++){
                if (contentsArray[i]["productName"]?.toLowerCase().includes(searchedKey.toLocaleLowerCase())){
                    defaultArray.push(contentsArray[i])
                }
            }
        }  
        return defaultArray; 
    }
}

export default new Helper();