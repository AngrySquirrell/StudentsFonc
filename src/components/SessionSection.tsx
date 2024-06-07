import { useState } from "react";
import {
    ActionIcon,
    Flex,
    ScrollArea,
    TextInput,
    Title,
    Tooltip,
} from "@mantine/core";
import { IconNumber123 } from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import { sessions } from "../scripts/data/sessions";
import SessionModal from "./SessionModal";
import SessionCard from "./SessionCard";

const SessionSection = () => {
    const [sessionsList, setSessionsList] = useState(sessions);
    const [sortedBy, setSortedBy] = useState<"age" | "grade" | "none">("none");
    const [filterBy, setFilterBy] = useState<string | undefined>();

    const handleSort = (by: "age" | "grade" | "none") => {
        if (sortedBy === by) setSortedBy("none");
        else setSortedBy(by);
    };

    const openModal = () =>
        modals.open({
            title: "Authentication",
            children: <SessionModal setter={setSessionsList} />,
        });

    return (
        <Flex
            direction={"column"}
            bg={"grey"}
            h={"fit-content"}
            p={32}
            style={{ overflow: "hidden" }}
            gap={16}
        >
            <Flex flex={1} justify={"space-between"}>
                <Flex gap={16} align={"center"}>
                    <Title order={1}>Sessions</Title>
                    {/* <Tooltip label="Ajouter un professeur">
                        <ActionIcon onClick={openModal} color="indigo">
                            <IconPlus />
                        </ActionIcon>
                    </Tooltip> */}
                </Flex>
                <Flex>
                    <Flex align={"center"} gap={16}>
                        <Tooltip label="Trier par âge">
                            <ActionIcon
                                color="indigo"
                                onClick={() => {
                                    handleSort("age");
                                }}
                            >
                                <IconNumber123 />
                            </ActionIcon>
                        </Tooltip>
                        <TextInput
                            placeholder="Search by name"
                            onChange={(event) =>
                                setFilterBy(event.currentTarget.value)
                            }
                        />
                    </Flex>
                    {/* <Flex></Flex> */}
                </Flex>
            </Flex>
            <ScrollArea h={"fit-content"} pb={16}>
                <Flex direction={"row"} gap={"md"}>
                    {sessionsList
                        ?.filter(
                            (el, id) =>
                                filterBy === undefined ||
                                el.teacher?.name
                                    ?.trim()
                                    .toLowerCase()
                                    .includes(
                                        filterBy.trim().toLowerCase() as string
                                    ) ||
                                el.teacher?.subject
                                    ?.trim()
                                    .toLowerCase()
                                    .includes(
                                        filterBy.trim().toLowerCase() as string
                                    )
                        )
                        // .sort((a, b) => {
                        //     switch (sortedBy) {
                        //         case "age":
                        //             if (!a.age || !b.age) return 0;
                        //             return a.age! - b.age!;
                        //     }
                        // })
                        .map((session, index) => (
                            <SessionCard
                                key={index}
                                data={session}
                                setter={setSessionsList}
                            />
                        ))}
                </Flex>
            </ScrollArea>
        </Flex>
    );
};

export default SessionSection;
