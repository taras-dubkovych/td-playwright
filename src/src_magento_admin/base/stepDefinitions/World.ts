import { setWorldConstructor } from '@cucumber/cucumber';

interface Context {
  product: Array<{ name: string; price: number }>;
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
        product: [],
        address: null,
        orderId: null,
        userInfo: null,
      };
    }
  
    addToCart(product: { name: string; price: number }) {
      this.context.product.push(product);
    }

    getProductInfo (){
        return this.context.product;
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
