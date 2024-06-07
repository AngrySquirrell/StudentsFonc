import { Card, Text, Badge, Group, Divider, ActionIcon } from "@mantine/core";
import TeacherModel from "../scripts/types/TeacherModel";
import { IconTrash } from "@tabler/icons-react";

const colors = {
    math: "blue",
    science: "green",
    english: "red",
    "": "gray",
};

const TeacherCard = ({
    data,
    setter,
}: {
    data: TeacherModel;
    setter: React.Dispatch<React.SetStateAction<TeacherModel[]>>;
}) => {
    console.log(data);
    return (
        <>
            <Card h={"fit-content"} mah={135} w={270}>
                {/* <Card.Section> */}
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{data.name}</Text>
                    <Text fw={200}>{data.age} ans</Text>
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
                    <Text style={{ textTransform: "capitalize" }}>
                        Subject :{" "}
                        <Badge variant="light" color={colors[data.subject!]}>
                            {data.subject}
                        </Badge>
                    </Text>
                </Group>
            </Card>
        </>
    );
};

export default TeacherCard;
