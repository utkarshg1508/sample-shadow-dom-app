import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Heading, Layout, Text } from '@netapp/bxp-design-system-react';
import { ROUTES } from '../constants/routes';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Layout.Page>
            <Layout.Content>
                <Layout.Container>
                    <Layout.Grid>
                        <Layout.GridItem>
                            <div
                                style={{ cursor: 'pointer' }}
                                onClick={() => navigate(ROUTES.PRODUCTS)}
                            >
                                <Card
                                    hasHoverEffect={true}
                                    style={{ padding: '20px', margin: '10px' }}
                                >
                                    <Heading level="20">Featured Products</Heading>
                                    <Text level="14">Check out our latest arrivals and best sellers!</Text>
                                </Card>
                            </div>
                        </Layout.GridItem>
                        <Layout.GridItem>
                            <Card
                                hasHoverEffect={true}
                                style={{ padding: '20px', margin: '10px' }}
                            >
                                <Heading level="20">Customer Reviews</Heading>
                                <Text level="14">See what our customers are saying about us!</Text>
                            </Card>
                        </Layout.GridItem>
                        <Layout.GridItem>
                            <Card
                                hasHoverEffect={true}
                                style={{ padding: '20px', margin: '10px' }}
                            >
                                <Heading level="20">Special Offers</Heading>
                                <Text level="14">Don't miss out on our limited-time discounts and promotions!</Text>
                            </Card>
                        </Layout.GridItem>
                    </Layout.Grid>
                </Layout.Container>
            </Layout.Content>
        </Layout.Page>
    );
};

export default Home;
