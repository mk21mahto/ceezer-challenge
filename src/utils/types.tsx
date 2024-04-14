export type AppContextType = {
    cartItem: any[];
    setCartItem: React.Dispatch<React.SetStateAction<any[]>>;
}

export type CartItem = {
    name: string;
    supplier: string;
    basePrice: number;
    quantity: number;
    deliveryDate: string;
    image: string;
  }

export type AdvanceFilter = {
    suppliers: string[];
    countries: string[];
  }

  export interface Option {
    title: string;
    options: string[];
  }

  
export type FilterOptionsProps = {
    applyFilters: (filters: AdvanceFilter) => void;
    filterOptions: Option[];
}

type Product = {
    image: string,
    name: string,
    id: number,
    supplier_name: string,
    country: string,
    description: string,
    offered_volume_in_tons: number,
    price_per_ton: number,
    earliest_delivery: string
}

export type ProductCardProps = {
    product: Product;
}