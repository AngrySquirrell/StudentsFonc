import { Card, Text, Badge, Group, Divider, ActionIcon } from "@mantine/core";
import StudentModel from "../scripts/types/StudentModel";
import { IconTrash } from "@tabler/icons-react";

const StudentCard = ({
    data,
    setter,
}: {
    data: StudentModel;
    setter: React.Dispatch<React.SetStateAction<StudentModel[]>>;
}) => {
    console.log(data);
    return (
        <>
            <Card h={"fit-content"} miw={"fit-content"} mah={135} w={270}>
                {/* <Card.Section> */}
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{data.name}</Text>
                    <Text fw={200}>{data.age} y/o</Text>
                    <Badge color="grape">{data.grades?.mean}</Badge>
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
                    <Text>English : {data.grades?.english}</Text>
                    <Text>Science : {data.grades?.science}</Text>
                    <Text>Maths :{data.grades?.math}</Text>
                </Group>
            </Card>
        </>
    );
};

export default StudentCard;
