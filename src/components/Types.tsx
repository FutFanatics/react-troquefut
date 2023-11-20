export interface Produto {
  product_id: string; 
  name?: string;
  variant_value?: string;
  price?: number;
  img?: string;
  url?: string;
  shipment_date?:string;
  }


  export interface Devolution {
    id: string;
    created_at?: string;
    imgs?: React.ReactNode;
    url?: string;
    result?:string;
    }

    export interface DataFollow {
      id: number;
      orderId: number;
      type: string;
      method_shipment: string;
      customer: {
        fullname: string;
        fone: string;
        cellphone: string;
        cep: number;
        state: string;
        city: string;
        neiborhood: string;
        street: string;
        number: number;
        complement: string;
      };
      history: Array<{
        title: string;
        date: string;
        fileIcon: string;
        status: string;
      }>;
      variant: {
        type: string;
        value: string;
      };
      name:string;
      imgs?: React.ReactNode | undefined;
      quant: number;
      price: number;
      reasonMain: string;
      reasonSub: string;
      obs: string;
      status: {
        title: string;
        msg: string;
        color: string;
      };
      ldn: {
        status: boolean;
        url: string;
      };
      coupon: string;
    }
    
    