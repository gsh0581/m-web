export default{
    get(url){
        return $.ajax({
            url,
            dataType:'json',
            type:'get',
            success(result){
                return result;
            }
        })
    }
}