import { useNavigate } from 'react-router-dom';
import { Card, Heading, Layout, Text } from '@netapp/bxp-design-system-react';
import { ROUTES } from '../constants/routes';
import { useSelector } from 'react-redux';
import { RootState } from "../store";

const Home = () => {
    const navigate = useNavigate();
    const workspaceId = useSelector((state: RootState) => state.appConfig.workspaceId);
    const start = performance.now();

    const navigateToWE = () => {
        window.postMessage({
            type: 'SERVICE-NAVIGATE',
            payload: {
                pathname: `/working-environments`,
            },
        });
    }

    // A general-purpose function to track any kind of user interaction (e.g., button clicks, video plays, downloads).
    const hitTrackEventAnalytics = () => {
        window.postMessage({
            type: 'SERVICE:SEND-GA-EVENT',
            payload: {
                type: 'trackEvent',
                details: { category: "SAMPLE_APP_TRACK_EVENT", action: "NAVIGATE_TO_CANVAS", label: 'TRACK_OPEN_CANVAS', value: 'Passed' }
            },
        });
    };

    // Tracks when a user clicks on a link that leads to an external website.
    const hitExternalLinkAnalytics = () => {
        window.postMessage({
            type: 'SERVICE:SEND-GA-EVENT',
            payload: {
                type: 'trackExternalLink',
                details: { category: "SAMPLE_APP_TRACK_EXTERNAL_LINK", label: 'TRACK_OPEN_GITHUB_LINK' }
            },
        });
    };

    // Tracks how long a user takes to perform a specific action or how long a process takes (e.g., page load time, form submission time).
    const hitTimingAnalytics = () => {
        const end = performance.now();
        window.postMessage({
            type: 'SERVICE:SEND-GA-EVENT',
            payload: {
                type: 'trackTiming',
                details: { category: "SAMPLE_APP_TRACK_TIMING", name: 'PREVIOUS_PAGE_LOAD_TIME', value: (end - start)}
            },
        });
    }

    return (
        <Layout.Container>
            <Layout.Grid>
                <Layout.GridItem>
                    <Card
                        hasHoverEffect={true}
                        style={{ padding: '20px', margin: '10px' }}
                    >
                        <Heading level="20">Sample Shadow Dom App Details</Heading>
                        <Text level="14">The global property name that should be used to configure the service application in the playground is <b>sampleShadowDomApp</b></Text>
                        <Text level="14">The GitHub URL for this sample Shadow DOM application. <a target='_blank' href='https://github.com/utkarshg1508/sample-shadow-dom-app' onClick={(e) => hitExternalLinkAnalytics()}>Click here</a></Text>
                    </Card>
                </Layout.GridItem>
                <Layout.GridItem>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => {navigateToWE(); hitTrackEventAnalytics(); hitTimingAnalytics();}}
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
            </Layout.Grid>
        </Layout.Container>
    );
};

export default Home;
