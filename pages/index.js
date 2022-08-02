import {
  Flex,
  Box,
  Heading,
  IconButton,
  Tooltip,
  useToast,
} from "@chakra-ui/react";

import CompanyForm from "../components/company-form";
import ClientsForm from "../components/clients-form";
import InvoiceForm from "../components/invoice-form";
import InvoiceTable from "../components/invoice-table";

import InvoiceNotes from "../components/invoice-notes";
import InvoiceResult from "../components/invoice-result";
import InvoiceImage from "../components/invoice-image";
import { useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";

const Home = () => {
  const form = useForm();
  const toast = useToast();

  const [tableData, setTableData] = useState([]);

  const handleContinue = async () => {
    await form.trigger();

    const { errors } = form.formState;
    if (Object.keys(errors).length > 0) {
      toast({
        description: "Please fill out the required fields",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <Box
      boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
      position="relative"
      borderRadius="lg"
      padding={5}
    >
      <Flex minH="873px" direction="column" w="full" gap={5}>
        <Heading>Invoice</Heading>
        <Flex gap={5}>
          <Box w="60%">
            <Flex>
              <Flex direction="column">
                <CompanyForm {...form} onSubmit={(e) => console.log(e)} />
                <ClientsForm />
              </Flex>
            </Flex>
          </Box>
          <Flex align="end" justify="space-between" w="40%" direction="column">
            <InvoiceImage />
            <InvoiceForm />
          </Flex>
        </Flex>
        <InvoiceTable onChange={setTableData} />
        <Flex gap={5}>
          <InvoiceNotes />
          <InvoiceResult tableData={tableData} />
        </Flex>
      </Flex>

      <Tooltip label="Continuar">
        <IconButton
          onClick={handleContinue}
          position="absolute"
          right={-20}
          size="lg"
          top="50%"
          borderRadius="full"
          variant="blue"
          icon={<ArrowForwardIcon />}
        />
      </Tooltip>
    </Box>
  );
};
export default Home;
