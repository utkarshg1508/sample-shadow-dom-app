import React, { useState } from 'react';
import productsData from "../assets/products.json";
import { Button, Card, ComponentLoader, Layout } from '@netapp/bxp-design-system-react';

interface ProductProps {
    id: number;
    name: string;
    price: number;
    src: string;
}

const Product = React.memo(({ name, price, src }: ProductProps) => {
    const [imageLoading, setImageLoading] = useState(true);

    const handleImageLoad = () => {
        setImageLoading(false);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <img src={src} alt={name} onLoad={handleImageLoad} />
            {imageLoading ? (
                <ComponentLoader style={{ margin: 'auto' }} />
            ) : (
                <>
                    <h3>{name}</h3>
                    <p>{`$${price}`}</p>
                    <Button onClick={() => { }}>Add to Cart</Button>
                </>
            )}
        </div>
    );
});

const Products: React.FC = () => {
    return (
        <Layout.Page>
            <Layout.Content>
                <Layout.Container>
                    <Layout.Grid>
                        {productsData.map((product) => {
                            const { id, name, price, src } = product;

                            return <Layout.GridItem lg={4} key={id}>
                                <Card hasHoverEffect={true} style={{ padding: '20px', margin: '10px' }}>
                                    <Product id={id} name={name} price={price} src={src} />
                                </Card>
                            </Layout.GridItem>
                        })}
                    </Layout.Grid>
                </Layout.Container>
            </Layout.Content>
        </Layout.Page>
    );
};

export default Products;
