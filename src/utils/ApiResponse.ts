class ApiResponse {
	public statusCode: number;
	public data: any;
	public message: string;

    constructor(statusCode: number, data: any, message: string) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}

export { ApiResponse }