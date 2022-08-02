import { Input } from "@chakra-ui/react";

const ClientsForm = () => (
  <form>
    <Input placeholder="Clients name" />

    <Input placeholder="Clients address" />
    <Input placeholder="City, State ZIP" />

    <Input placeholder="Country" />
  </form>
);

export default ClientsForm;
