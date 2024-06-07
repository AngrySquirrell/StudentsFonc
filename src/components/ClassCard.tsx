import {
    Card,
    Text,
    Badge,
    Flex,
    SimpleGrid,
    ScrollArea,
    ActionIcon,
} from "@mantine/core";
import ClassModel from "../scripts/types/ClassModel";
import { IconTrash } from "@tabler/icons-react";

const levelLabels = ["", "6th grade", "7th grade", "8th grade", "9th grade"];

const ClassCard = ({
    data,
    setter,
}: {
    data: ClassModel;
    setter: React.Dispatch<React.SetStateAction<ClassModel[]>>;
}) => {
    console.log(data);
    return (
        <>
            <Card
                h={"fit-content"}
                miw={"fit-content"}
                mih={135}
                mah={135}
                w={270 * 2}
            >
                <Flex justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{levelLabels[data.level as number]}</Text>
                    <SimpleGrid fw={200} cols={4}>
                        {data.students?.map((el, id) => {
                            return <Text key={id}>{el.name}</Text>;
                        })}
                    </SimpleGrid>
                    <Badge color="grape">{data.students?.length}</Badge>
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
                </Flex>
            </Card>
        </>
    );
};

export default ClassCard;
