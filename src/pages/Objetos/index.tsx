// Componente Objetos.tsx
import ProductSelected from "../../components/produtoselected";
import React from "react";
import { useParams } from 'react-router-dom';

export default function Objetos() {
  const { productId } = useParams();
  const validProductId = productId || '';

  return (
    <div>
      <h1>Página Objetos</h1>
      <ProductSelected productId={validProductId} />
    </div>
  );
}
