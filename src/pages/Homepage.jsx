import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import contact from "../assets/contact.png";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Image position={"absolute"} right={0} w={500} src={contact} />
      <Heading mt={16} textAlign={"start"} size={"4xl"}>
        Contacts App
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
      A contact app is a powerful tool that organizes and stores vital information about people in one convenient place. It allows users to efficiently manage their contacts, providing easy access to phone numbers, email addresses, and other relevant details. With a contact app, users can quickly search, add, edit, and delete contacts, ensuring their address book remains up to date. Additionally, some advanced contact apps offer features like contact synchronization across devices, social media integration, and customizable groups or tags for better organization. Overall, a contact app simplifies communication and enhances productivity by streamlining contact management in our increasingly digital world.
      </Text>
    </Box>
  );
}
