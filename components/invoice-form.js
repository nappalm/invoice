import { Flex, Text, Input, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const InvoiceForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Box w="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex align="center" gap={1}>
          <Text flexShrink={0} as="label">
            Invoice No.:
          </Text>
          <Input {...register("location")} placeholder="City, State ZIP" />
        </Flex>

        <Flex align="center" gap={1}>
          <Text flexShrink={0} as="label">
            Invoice Date:
          </Text>
          <Input {...register("invoice_date")} placeholder="Invoice Date" />
        </Flex>
        <Flex align="center" gap={1}>
          <Text flexShrink={0} as="label">
            Invoice Date:
          </Text>
          <Input {...register("location")} placeholder="City, State ZIP" />
        </Flex>
        <Flex align="center" gap={1}>
          <Text flexShrink={0} as="label">
            Due Date:
          </Text>
          <Input {...register("location")} placeholder="City, State ZIP" />
        </Flex>
      </form>
    </Box>
  );
};

export default InvoiceForm;
