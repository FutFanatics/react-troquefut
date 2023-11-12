export interface Produto {
  product_id: string; // Make it a required string
  name?: string;
  variant_value?: string;
  price?: string;
  img?: string;
  url?: string;
  }


  export interface Devolution {
    id: string;
    created_at?: string;
    imgs?: React.ReactNode;
    url?: string;
    result?:string;
    }
  