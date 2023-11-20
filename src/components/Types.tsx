export interface Produto {
  product_id: string; 
  name?: string;
  variant_value?: string;
  price?: number;
  img?: string;
  url?: string;
  quantity?: number;
  shipment_date?:string;
  }


  export interface Devolution {
    id: string;
    created_at?: string;
    imgs?: React.ReactNode;
    url?: string;
    result?:string;
    }

    interface Product {
      quant: number;
      price: string;
      refundType: string;
      reasonSub: string;
      reasonMain: string;
      obs: string;
      variant: string;
    }
    
    interface HistoryItem {
      title: string;
      date: string;
      fileIcon: string;
      status: string;
    }
    
    interface Status {
      title: string;
      status: string;
      msg: string;
      color: string;
    }
    
    interface LDN {
      status: boolean;
      url: string;
    }
    
    export interface DataFollow {
      id: number;
      order_id: number;
      method_shipment: string | null;
      dateCreatedReturn: string;
      customer: {
        fullname: string;
        fone: string;
        cellphone: string;
        cep: string;
        state: string;
        city: string;
        neigborhood: string;
        street: string;
        number: string;
        complement: string;
      };
      products: Product[];
      history: HistoryItem[];
      status: Status;
      coupon: string;
      ldn: LDN;
    }
    
    