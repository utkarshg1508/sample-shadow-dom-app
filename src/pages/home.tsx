import { useNavigate } from 'react-router-dom';
import { Card, Heading, Layout, Text } from '@netapp/bxp-design-system-react';
import { ROUTES } from '../constants/routes';
import { useSelector } from 'react-redux';
import { RootState } from "../store";

const Home = () => {
    const navigate = useNavigate();
    const workspaceId = useSelector((state: RootState) => state.appConfig.workspaceId);

    const navigateToWE = () => {
        window.postMessage({
            type: 'SERVICE-NAVIGATE',
            payload: {
                pathname: `/working-environments`,
            },
        });
    }

    return (
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
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={navigateToWE}
                    >
                        <Card
                            hasHoverEffect={true}
                            style={{ padding: '20px', margin: '10px' }}
                        >
                            <Heading level="20">Navigate to BlueXP Canvas</Heading>
                            <Text level="14">Click here to test the service to BlueXP messaging!</Text>
                        </Card>
                    </div>
                </Layout.GridItem>
                <Layout.GridItem>
                    <Card
                        hasHoverEffect={true}
                        style={{ padding: '20px', margin: '10px' }}
                    >
                        <Heading level="20">{workspaceId}</Heading>
                        <Text level="14">Change Project on top project menu to test the BlueXP to service messaging!</Text>
                    </Card>
                </Layout.GridItem>
            </Layout.Grid>
        </Layout.Container>
    );
};

export default Home;
