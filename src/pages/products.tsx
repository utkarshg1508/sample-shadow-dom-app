import React, { useState } from 'react';
import { Button, Card, ComponentLoader, Heading, Layout, Table, Text, useTable } from '@netapp/bxp-design-system-react';
import productsData from "../assets/products.json";

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
                    <Heading level={20}>{name}</Heading>
                    <Text>{`$${price}`}</Text>
                    <Button onClick={() => { }}>Add to Cart</Button>
                </>
            )}
        </div>
    );
});

const ProductsGrid = () => {
    return <Layout.Container>
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
}

const ProductsTable = () => {
    const tableColumns = [{
        header: "Name",
        accessor: "prod_name",
        id: "prod_name"
    },
    {
        header: "Price",
        accessor: "prod_price",
        id: "prod_price"
    }];
    const tableRows = productsData.map((product) => { return { prod_name: product.name, prod_price: product.price } });
    const { organizedRows, columns } = useTable({ columns: tableColumns, rows: tableRows });

    return <Layout.Container>
        <Table columns={columns} rows={organizedRows} fixedHeight={500} />
    </Layout.Container>
}


const Products = () => {

    return (
        <Layout.Page>
            <Layout.Content>
                <ProductsGrid />
                <ProductsTable />
            </Layout.Content>
        </Layout.Page>
    );
};

export default Products;
