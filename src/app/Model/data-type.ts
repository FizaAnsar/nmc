export class Login{
    username:string;
    password:string;
}

export class Department {
   public id: number;
        public departmentName: string;  
 
}

export class Supplier {
        public id: number;
        public suplierName: string;
        public suplierAddress: string;
        public suplierContact: number;
}

export class Vehicles {
        public id: number;
        public vehicleNumber:string;
        public vehicleMake:string;
        public vehicleModel:string;
        public allowedFuel:number;
        public fuelType:number;
        public driverId:string;
        public departmentId:string;
}

export class Stores {
        public id: number;
        public storeName:string;
        public inchargeName:string;
        public contactNumber:string;
        public stockCapacity:string;
        public storeAddress:string;
}

export class Purchase {
        public id: number;
        public fuelType: string;
        public fuelQuantity: number;
        public totalPrice: number;
        public storage: string;
        public recievingDate: number;
        public invoiceNumber: number;
        public supplierName: string;
        public paymentMode: string;
        public amountPaid: number;
}

export class User {
        public id: number;
        public userName:string;
        public userRole:string;
        public firstName:string;
        public lastName:string;
        public userPassword:string;
}