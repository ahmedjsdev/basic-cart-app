import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/productsSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Row>
      {products.map((product) => (
        <Col className="mb-3" key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}
