/**
 * Created by vino on 5/31/17.
 */
var config = {
    word: function (data,list) {
        for(i=0;i<list.length;i++){
            if(data == list[i]){
                return data
            }
        }
        return "Data not present"
    }
};
module.exports = config;
