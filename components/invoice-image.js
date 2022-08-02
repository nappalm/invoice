import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

import styled from "@emotion/styled";

const WrapperStyle = styled(Box)`
  cursor: pointer;
`;

const defaultImageSize = "150px";
function InvoiceImage() {
  const [preview, setPreview] = useState(null);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setPreview(URL.createObjectURL(file));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <WrapperStyle
      w={preview ? "auto" : defaultImageSize}
      h={preview ? "auto" : defaultImageSize}
      borderRadius="lg"
      border="1px dashed"
      borderColor="#000"
      {...getRootProps()}
      className="dropzone-container"
      maxH={defaultImageSize}
      maxW={defaultImageSize}
    >
      <Input {...getInputProps()} />
      {preview ? (
        <Image src={preview} alt="preview-image" />
      ) : (
        <Flex h="full" align="center" justify="center">
          <Text color="gray.600" fontSize="sm" p={2}>
            Drag & drop a logo file or click to upload
          </Text>
        </Flex>
      )}
    </WrapperStyle>
  );
}

export default InvoiceImage;
