const { Box, Text, Flex, Textarea } = require("@chakra-ui/react");

const InvoiceNotes = () => {
  return (
    <Box border="2px solid" borderColor="dark" borderRadius="lg" p={3}>
      <Flex direction="column">
        <Text>Notes:</Text>
        <Textarea borderColor="white" placeholder="Any aditional comments" />
      </Flex>
    </Box>
  );
};

export default InvoiceNotes;
