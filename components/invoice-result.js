import { Flex, Text, Input, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const InvoiceResult = ({ tableData }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    const counterElements = tableData.map((item) => {
      return Number(item.price) * Number(item.quantity);
    });

    const value = counterElements.reduce((acc, cc) => acc + cc, 0);
    setSubtotal(value || 0);
  }, [tableData]);

  const getTotal = () => {
    let total = 0;

    const tx = subtotal * tax;
    total = subtotal + tx;

    total = total - total * discount;
    return total || 0;
  };

  return (
    <Flex direction="column">
      <Flex gap={2} justify="space-between" align="center">
        <Input defaultValue="Subtotal:" />
        <Text>{subtotal.toFixed(2)}</Text>
      </Flex>
      <Flex gap={2} justify="space-between" align="center">
        <Input defaultValue="Tax:" />
        <Flex w="20%" gap={1}>
          <Input
            textAlign="right"
            onChange={({ target }) => setTax(target.value / 100)}
            placeholder="0"
          />
          <Text>%</Text>
        </Flex>
      </Flex>
      <Flex gap={2} justify="space-between" align="center">
        <Input defaultValue="Discount:" />
        <Flex w="20%" gap={1}>
          <Input
            textAlign="right"
            onChange={({ target }) => setDiscount(target.value / 100)}
            placeholder="0"
          />
          <Text>%</Text>
        </Flex>
      </Flex>
      <Divider />
      <Flex gap={2} justify="space-between" align="center">
        <Input defaultValue="Total:" />
        <Text>{getTotal().toFixed(2)}</Text>
      </Flex>
    </Flex>
  );
};

export default InvoiceResult;
