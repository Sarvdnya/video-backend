class ApiError extends Erros{
    constructor(
        statusCode,
        message='spmethng went wrong',
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode = statuscode
        this.data=null
        this.message =message
        this.sucess=false;
        this.errors = errors

        if(statck){
            this.statck=statck
        } else{
            Error.captureStackTrace(this,rhis,constructor)
        }
    }
}

export {ApiError}