import { Button, Layout, Modal, ModalContent, ModalFooter, ModalHeader, Popover, Tooltip, Text, Span, CopyButton, FormFieldSelect, useForm, Notification } from "@netapp/bxp-design-system-react";
import { useState } from "react";

const PopoverComp = () => {
    return <div>
        <Popover>Some text for my popover</Popover>
        <Span>Some text. Some text.</Span>
    </div>
}

const TooltipComp = () => {
    return <div>
        <Text>I am some div that will have tooltip on hover</Text>
        <Tooltip>Some text for my popover - too much text wraps around, tooltip content breaks by default at 320px</Tooltip>
    </div>
}

const ModalComp = () => {
    const [open, setOpen] = useState(false);
    if (open) {
        return (
            <Modal>
                <ModalHeader>Modal header</ModalHeader>
                <ModalContent>I am a modal with one button in the footer</ModalContent>
                <ModalFooter>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    } else {
        return <Button onClick={() => { setOpen(true) }}>Open</Button>
    }
}

const MenuComp = () => {
    const form = useForm({ name: "" });
    const options = [
        { label: "Label all alone", value: 1 },
        { label: "Label with sub-label: ", value: 2, subLabel: "I'm the sub-label" },
        { label: "Label with tag", value: 7, tag: "Some Tag Text" },
        { label: "Label with secondary label", value: 3, secondaryLabel: "Secondary Label" },
        { label: "Label with tooltip", value: 4, tooltip: "tool tip" },
        { label: "Disabled Option", value: 5, isDisabled: true },
        { label: "Disabled Option with tooltip", value: 6, isDisabled: true, tooltip: "tool tip" }
    ];

    return <FormFieldSelect
        label="Account"
        name="name"
        form={form}
        options={options}
    />
}

const ReactPortals = () => {

    const triggerNotification = () => {
        window.postMessage({
            type: 'SERVICE:NOTIFICATION',
            payload: {
                message: 'Dummy notification to BlueXP',
                type: 'info',
            },
        });
    }
    return <>
        <Layout.Page>
            <Layout.Content>
                <Layout.Container>
                    <Layout.Grid centerContent rowGap="md">
                        <Layout.GridItem>
                            <PopoverComp />
                        </Layout.GridItem>
                        <Layout.GridItem>
                            <TooltipComp />
                        </Layout.GridItem>
                        <Layout.GridItem>
                            <ModalComp />
                        </Layout.GridItem>
                        <Layout.GridItem>
                            <Text>Copy this text</Text>
                            <CopyButton variant="square" color="secondary" text="Copy this text">Copy</CopyButton>
                        </Layout.GridItem>
                        <Layout.GridItem>
                            <MenuComp />
                        </Layout.GridItem>
                        <Layout.GridItem>
                            <Button variant="primary" onClick={() => triggerNotification()}>
                                Click to trigger notification
                            </Button>
                        </Layout.GridItem>
                    </Layout.Grid>
                </Layout.Container>
            </Layout.Content>
        </Layout.Page>
    </>
}

export default ReactPortals;