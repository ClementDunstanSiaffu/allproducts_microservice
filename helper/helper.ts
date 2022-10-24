

class Helper{

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