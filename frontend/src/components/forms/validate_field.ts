export const validateField=(fieldName:string,fieldValue:string)=>{
    console.log("---->",fieldName);
    const error=[];
    let length=0;
    if (fieldName==="name"){    
        const isOnlyAlphabets=/^[A-Za-z\s]+$/.test(fieldValue);
        if(isOnlyAlphabets){
            length=fieldValue.length
        }else{
            error.push("No numbers or special charecters are allowed")
        }
        if(!(length>5) && isOnlyAlphabets){
            error.push("Charactes length must be greater than 5")
        }
        // console.log(error);
        return error;
    }

}