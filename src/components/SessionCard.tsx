import { Card, Text, Badge, Group, Divider, ActionIcon } from "@mantine/core";
import SessionModel from "../scripts/types/SessionModel";
import { IconTrash } from "@tabler/icons-react";

const levelLabels = ["", "6th grade", "7th grade", "8th grade", "9th grade"];
const colors = {
    math: "blue",
    science: "green",
    english: "red",
    "": "gray",
};

const SessionCard = ({
    data,
    setter,
}: {
    data: SessionModel;
    setter: React.Dispatch<React.SetStateAction<SessionModel[]>>;
}) => {
    console.log(data);
    return (
        <>
            <Card h={"fit-content"} mah={135} w={270 * 1.5}>
                {/* <Card.Section> */}
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{data.city}</Text>
                    <Text fw={200}>{data.teacher?.name} </Text>
                    <Text fw={200}>
                        {Intl.DateTimeFormat().format(data.date)}
                    </Text>
                    <ActionIcon
                        color="red"
                        onClick={() => {
                            setter((old) =>
                                old.filter((el) => el.id !== data.id)
                            );
                        }}
                    >
                        <IconTrash />
                    </ActionIcon>
                </Group>
                <Divider />
                <Group justify="space-between" mt="md" mb="xs">
                    {/* <Text >{data.teacher?.subject} </Text> */}
                    <Badge
                        variant="light"
                        color={colors[data.teacher?.subject!]}
                    >
                        {data.teacher?.subject}
                    </Badge>
                    <Text>{data.class?.students?.length} Persons</Text>
                    <Text>{levelLabels[data.class?.level as number]}</Text>
                    {/* <Text fw={200}>{data.class?.students?.map((el, id)=>{
                        return <Text>{el.name}</Text>
                    })} </Text> */}
                </Group>
            </Card>
        </>
    );
};

export default SessionCard;
