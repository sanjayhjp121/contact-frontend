import { Box, Button, Grid, IconButton, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactCard from "../components/Contactspage/ContactCard/ContactCard";
import { createContacts, getContacts } from "../Redux/contacts/contact.actions";
import { BsPlusLg } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
export default function ContactsPage() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.contactReducer);
  console.log(data);
  const [contacts, setContacts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  useEffect(() => {
    setContacts(data);
  }, [data]);

  const createContact =()=>{
    dispatch(createContacts({title,body}))
    onClose()
  }

  return (
    <Box mt={20} padding={8}>
      <Grid
        gap={10}
        w={"90%"}
        margin={"auto"}
        gridTemplateColumns="repeat(4 ,1fr)"
      >
        {contacts?.map((el) => (
          <ContactCard {...el} />
        ))}
      </Grid>

      <>
        <IconButton
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
          }
          position={"fixed"}
          w={"80px"}
          h={"80px"}
          borderRadius={50}
          bg={"yellowgreen"}
          bottom={0}
          right={0}
          onClick={onOpen}
          margin={16}
          icon={<BsPlusLg />}
        ></IconButton>

      

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Contact</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

                <Input value={title}m placeholder="Please enter name" onChange={(e)=>setTitle(e.target.value)}></Input>
                <Input mt={8} value={body} placeholder={'Please enter number'} onChange={(e)=>setBody(e.target.value)}></Input>
              
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={createContact}>
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
}
