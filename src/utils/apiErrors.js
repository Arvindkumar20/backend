class apiErrors extends Error{
    constructor(
        statusCode,
        message="something went wrong",
        errors=[],
stack=""
     ){
        super(message);
        this.message=message;
        this.statusCode = statusCode;
        this.data = null;
        success=false;
        this.errors=errors;
        if(stack){
        this.stack=stack;
    }
    else{
        Error.captureStackTrace(this,this.constructor)
    }
}
}
export { apiErrors }