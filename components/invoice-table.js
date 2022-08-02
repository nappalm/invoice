import { SmallCloseIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  Button,
  Box,
  IconButton,
} from "@chakra-ui/react";

import styled from "@emotion/styled";

import { useEffect, useState } from "react";
import { v1 } from "uuid";

const initialElement = {
  rowId: v1(),
  id: null,
  description: null,
  quantity: null,
  price: null,
};

const InvoiceTableStyle = styled(Box)`
  .add-element {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.3s ease 0s;
  }

  &:hover .add-element {
    padding-bottom: 5px;
    padding-right: 5px;
    max-height: 3em;
  }
`;

const RowItem = styled(Tr)`
  overflow: hidden;
  .btn-remove {
    transition: transform 0.3s ease 0s;
    transform: translate(80px);
  }
  :hover .btn-remove {
    transform: translate(0px);
  }
  /* Verificar con framer motion */
`;

const InvoiceTable = (props) => {
  const { onChange } = props;
  const [items, setItems] = useState([initialElement]);

  useEffect(() => {
    onChange && onChange(items);
    // eslint-disable-next-line
  }, [items]);

  function handleAddItem() {
    setItems([
      ...items,
      {
        ...initialElement,
        rowId: v1(),
      },
    ]);
  }

  function handleRemoveItem(rowId) {
    setItems((items) => items.filter((el) => el.rowId !== rowId));
  }

  function updateItem(rowId, e) {
    setItems((prev) => {
      return prev.map((el) =>
        el.rowId === rowId
          ? Object.assign(el, {
              [e.target.name]: e.target.value,
            })
          : el
      );
    });
  }

  return (
    <InvoiceTableStyle>
      <TableContainer>
        <Table size="sm" overflow="hidden" variant="simple">
          <TableCaption></TableCaption>
          <Thead bg="#000">
            <Tr>
              <Th w="20%">
                <Input color="white" defaultValue="ID" />
              </Th>
              <Th w="30%">
                <Input color="white" defaultValue="Description" />
              </Th>
              <Th>
                <Input color="white" defaultValue="Quantity" />
              </Th>
              <Th>
                <Input color="white" defaultValue="Price" />
              </Th>
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item) => (
              <RowItem key={item.rowId}>
                <Td>
                  <Input placeholder="ID" defaultValue={item.id} />
                </Td>
                <Td>
                  <Input
                    placeholder="Item description"
                    defaultValue={item.description}
                  />
                </Td>
                <Td>
                  <Input
                    name="quantity"
                    placeholder="0"
                    onChange={(e) => updateItem(item.rowId, e)}
                    defaultValue={item.quantity}
                  />
                </Td>
                <Td>
                  <Input
                    name="price"
                    placeholder="$0.00"
                    onChange={(e) => updateItem(item.rowId, e)}
                    defaultValue={item.price}
                  />
                </Td>
                <Td>
                  <IconButton
                    onClick={() => handleRemoveItem(item.rowId)}
                    className="btn-remove"
                    icon={<SmallCloseIcon />}
                  />
                </Td>
              </RowItem>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box className="add-element">
        <Button variant="blue" onClick={handleAddItem} w="full">
          Add more
        </Button>
      </Box>
    </InvoiceTableStyle>
  );
};

export default InvoiceTable;
