import { setWorldConstructor } from '@cucumber/cucumber';

interface Context {
  products: Array<{ name: string; price: number; sku: string }>;
  address: { street: string; city: string; zip: string } | null;
  orderId: string | null;
  userInfo:{ 
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    vendorGroup: string;
    vatNo: string;
  } | null;
}

class CustomWorld {
    context: Context;
  
    constructor() {
      this.context = {
        products: [],
        address: null,
        orderId: null,
        userInfo: null,
      };
    }
  
    setProductsInfo(products: { name: string; price: number; sku: string }) {
      this.context.products.push(products);
    }

    getProductsInfo (){
        return this.context.products;
    }
  
    setAddress(address: { street: string; city: string; zip: string }) {
      this.context.address = address;
    }

    getAddress() {
        return this.context.address;
      }
  
    setUser(userInfo: Partial<Context['userInfo']>) {
      if (!this.context.userInfo) {
        this.context.userInfo = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          vendorGroup: '',
          vatNo: '',
        };
      }
      this.context.userInfo = { ...this.context.userInfo, ...userInfo };
    }

    getUserInfo (){
        return this.context.userInfo;
    }
  
    setOrderId(orderId: string) {
      this.context.orderId = orderId;
    }
  
    getOrderDetails() {
      return this.context;
    }
  }
  
setWorldConstructor(CustomWorld);
