const ProductRow = ({ product }) => {
  const name = product.stocked ? product.name :
    <span style={{ color: 'orange' }}>
      {product.name}
    </span>;
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;