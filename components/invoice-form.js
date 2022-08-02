import { Flex, Text, Input, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { DatePicker } from "chakra-ui-date-input";

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
          <Input {...register("location")} placeholder="####" />
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
          <DatePicker placeholder="Invoice Date" onChange={() => {}} />
        </Flex>
        <Flex align="center" gap={1}>
          <Text flexShrink={0} as="label">
            Due Date:
          </Text>
          <DatePicker placeholder="Due date" onChange={() => {}} />
        </Flex>
      </form>
    </Box>
  );
};

export default InvoiceForm;
