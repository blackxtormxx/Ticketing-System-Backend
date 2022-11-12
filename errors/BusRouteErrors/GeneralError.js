class GeneralError {
    throwError() {
        return {error: true, errorMessage: this.message}
    }

}

export default GeneralError;