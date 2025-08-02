import { useState, useEffect } from 'react';
import { client } from '../sanity/lib/client';

export interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  type: 'boisson' | 'nourriture';
  image?: {
    asset: {
      _ref: string;
    };
  };
  isAvailable: boolean;
}

export function useMenuData() {
  const [data, setData] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "menuItem" && isAvailable == true] | order(category asc, name asc) {
          _id,
          name,
          description,
          price,
          category,
          type,
          image,
          isAvailable
        }`;
        
        const result = await client.fetch(query);
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  return { data, loading, error };
}

export function useMenuByCategory(category: string) {
  const [data, setData] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "menuItem" && category == $category && isAvailable == true] | order(name asc) {
          _id,
          name,
          description,
          price,
          category,
          type,
          image,
          isAvailable
        }`;
        
        const result = await client.fetch(query, { category });
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, [category]);

  return { data, loading, error };
} 
