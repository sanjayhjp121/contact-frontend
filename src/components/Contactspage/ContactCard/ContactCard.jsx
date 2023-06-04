import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import "./style.css";
import contactbg from "../../../assets/contact_bg.png";
import { useDispatch } from "react-redux";
import { deleteContacts, updateContacts } from "../../../Redux/contacts/contact.actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function ContactCard({ title, body, user, _id }) {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);

  const updateContact =()=>{

    dispatch(updateContacts(_id,{title:tempTitle,body:tempBody}))
    onClose()

  }

  return (
    <Card backgroundImage={`url(${contactbg})`}>
      <CardBody>
        <VStack>
          <Heading>{title}</Heading>
          <Text>{body}</Text>

          <Flex gap={2}>
            <>
              <Button onClick={onOpen}>Update</Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update Contact</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Input
                      value={tempTitle}
                      m
                      placeholder="Please enter title"
                      onChange={(e) => setTitle(e.target.value)}
                    ></Input>
                    <Input
                      mt={8}
                      value={tempBody}
                      placeholder={"Please enter description"}
                      onChange={(e) => setBody(e.target.value)}
                    ></Input>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={updateContact}>
                      Update
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
            <Button
              onClick={() => {
                dispatch(deleteContacts(_id));
              }}
            >
              Delete
            </Button>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
}
